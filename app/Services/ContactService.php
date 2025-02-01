<?php
namespace App\Services;
use App\Repositories\ContactRepository;
use App\Http\Resources\ContactResource;
use App\Models\ContactInfo;
use App\Http\Resources\ContactInfoResource;


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

    public function getContactForPage(int  $pageId):  ContactInfoResource
    {
        $contact =  $this->contactRepository->getContactForPage($pageId);

        return new ContactInfoResource($contact);

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