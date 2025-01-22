<?php
namespace App\Repositories;
use App\Models\Page;

class PageRepository{
    public function __construct(
        protected Page $model
    ){}
    
    public function create(array $data) : void
    {
        try {
            Page::create([
                'title'=>$data['title'],
                'city'=>$data['city'],
                'theme'=>$data['theme'],
                'font_family'=>$data['font_family'],
                'tags'=>$data['tags'],
                'user_id'=>$data['user_id'],
                'publish'=>0,
            ]);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function update( array $data) : void
    {
        try {
           Page::where('user_id',  $data['user_id'])->update(
            [
                'title'=>$data['title'],
                'city'=>$data['city'],
                'theme'=>$data['theme'],
                'font_family'=>$data['font_family'],
                'tags'=>$data['tags'],
            ]);
      
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getOneWithUserId(int $userId) : ?Page
    {
        try {
            return Page::where('user_id',$userId)->first();
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }

}