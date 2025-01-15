<?php
namespace App\Services;
use App\Repositories\MediaRepository;
use App\Models\Media;


class MediaService
{
    public function __construct(MediaRepository $mediaRepository)
    {
        $this->mediaRepository = $mediaRepository;
    }

    public function create( $request) : Media
    {
       
            
        if ($request->hasFile('media')) {
            // Get the uploaded file
            $image = $request->file('media');

            // Store the image in the public folder, under the 'images' directory
            $imagePath = $image->store('images', 'public');
            $data['image_path'] = $imagePath;
            $data['extention'] = substr($imagePath,strpos($imagePath,'.')+1 );
            $data['alt']='image';

            return $imageStored = $this->mediaRepository->create($data);
        }
            

        
    }
    public function getOne(int $id) : Media
    {
        return $this->mediaRepository->getOne($id);
    }
    public function deleteOne(int $id) : void
    {
        $this->mediaRepository->deleteOne($id);
    }
}