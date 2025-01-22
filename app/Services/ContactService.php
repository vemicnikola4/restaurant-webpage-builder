<?php
namespace App\Services;
use App\Repositories\ContactRepository;
use App\Models\ContactInfo;


class ContactService
{
    public function __construct(ContactRepository $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function create(array  $data ) : void

    {   
        if ( $this->contactExists($data['pageId'])){
             $this->contactRepository->update($data);

        }else{
             $this->contactRepository->create($data);
        }
        
    }
    public function contactExists(int  $pageId): ?ContactInfo
    {
        return $this->contactRepository->contactExists($pageId);
    }
    // public function getOneWithPath(string $path) : ?Media
    // {
    //     return $this->mediaRepository->getOneWithPath($path);
    // }
    // public function deleteOne(int $id) : void
    // {
    //     $this->mediaRepository->deleteOne($id);
    // }
}