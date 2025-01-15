<?php
namespace App\Repositories;
use App\Models\Media;

class MediaRepository
{

    public function __construct(
        protected Media $model
    ){}
    public function create( array $data) : Media
    {
        try {

        return Media::create([
            'path'=>$data['image_path'],
            'extention'=>$data['extention'],
            'alt'=>$data['alt'],
        ]);
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getOneWithPath( string $path) : ?Media
    {
        try {

            return Media::where('path',$path)->first();
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getOne(int $id) : Media 
    {
        
        try {
            return Media::find($id);
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 
    }
    public function deleteOne(int $id) : void 
    {
        
        try {
            Media::destroy($id);

            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 
    }

}




