<?php
namespace App\Repositories;
use App\Models\AboutUs;

class AboutUsRepository
{

    public function __construct(
        protected AboutUs $model
    ){}
    public function create( array $data) : void
    {
        try {
            $aboutUs = AboutUs::create([
            'title'=>$data['title'],
            'description'=>$data['description'],
            'text_aligment'=>$data['textAligment'],
    
            'page_id'=>$data['pageId'],
             ]);
            $aboutUs->media()->create([
                'path'=>$data['media']['image_path'],
                'extention'=>$data['media']['extention'],
                'alt'=>$data['media']['alt'],
            ]);
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function createWithoutMedia( array $data) : void
    {
        try {
            $aboutUs = AboutUs::create([
            'title'=>$data['title'],
            'description'=>$data['description'],
            'text_aligment'=>$data['textAligment'],
    
            'page_id'=>$data['pageId'],
             ]);
           
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function update( object $model,array $newAboutUs) : void
    {
        try {

            $model->update(
                [
                    'title'=>$newAboutUs['title'],
                    'description'=>$newAboutUs['description'],
                    'text_aligment'=>$newAboutUs['textAligment'],
                   
            
                    'page_id'=>$newAboutUs['pageId'],
                ]);
                $model->media()->create([
                    'path'=>$newAboutUs['media']['image_path'],
                    'extention'=>$newAboutUs['media']['extention'],
                    'alt'=>$newAboutUs['media']['alt'],
                ]);
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function updateWithoutMedia( object $model,array $newAboutUs) : void
    {
        try {

            $model->update(
                [
                    'title'=>$newAboutUs['title'],
                    'description'=>$newAboutUs['description'],
                    'text_aligment'=>$newAboutUs['textAligment'],
                   
            
                    'page_id'=>$newAboutUs['pageId'],
                ]);
                
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function aboutUsExists( int $pageId) : ?AboutUs
    {
        try {

            return   AboutUs::where('page_id',$pageId)->first();
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getAboutUsForPage( int $pageId) : ?AboutUs
    {
        try {
        $aboutUs =  AboutUs::where('page_id',$pageId)->first();
       
        $aboutUs['media']= $aboutUs->media;
        return $aboutUs;
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function deleteImage(object $model) : void
    {
        try {
            $model->media->delete();
           
                
                
            } catch (\Exception $e) {
                // Handle any other exceptions
                throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
            } 
    }
    public function get (int $id) : AboutUs
    {
        try {
            $aboutUs = AboutUs::find($id);
            $aboutUs['media']= $aboutUs->media;
            return $aboutUS;
           
                
                
            } catch (\Exception $e) {
                // Handle any other exceptions
                throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
            } 
    }
}




