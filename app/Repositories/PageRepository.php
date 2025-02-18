<?php
namespace App\Repositories;
use App\Models\Page;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;



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
    public function pageExists( int $userId) : ?Page
    {
        try {
        return Page::where('user_id',$userId)->first();
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function pageExistsWithId( int $pageId) : ?Page
    {
        try {
        return Page::find($pageId);
       
            
            
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
    public function getOne(int $pageId) : Page
    {
        try {
            return Page::find($pageId);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function updatePublished(int $pageId,$value) : void
    {
        try {
            $page = Page::find($pageId);
            $page->update(['publish' => $value]);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getAll() : Collection
    {
        try {
            return Page::where('publish',1)->get();
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function pageQuery($query) : ?LengthAwarePaginator
 
    {
        try{
            return $pages = $query->paginate(3);
        }catch(\Exception $e){
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        }
    }
    public function getPages() : LengthAwarePaginator
    {
        try {
            return Page::where('publish',1)->paginate(3);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }

}