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
                'working_hours'=>$data['workingHours'],
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
            // dd( $page->hero);
            // dd( $page->aboutUs);
            // dd( $page->menuSections);
            // dd( $page->noImgsmenuSections);
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
            return $pages = $query->limit(5)->paginate(5);;
        }catch(\Exception $e){
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        }
    }
    public function getPages() : Collection
    {
        try {
            
            return Page::where('publish',1)->orderBy('visited','desc')->limit(5)->get();
            
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getPagesIncludingTag(string $tag) : Collection
    {
        try {
            
            return Page::where('publish',1)->where( "tags",'like','%'.$tag.'%')->orderBy('visited','desc')->limit(5)->get();
            
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    // public function getPagesBbq() : Collection
    // {
    //     try {
            
    //         return Page::where('publish',1)->where( "tags",'like',"%BBQ%")->orderBy('visited','desc')->limit(5)->get();
            
    //     }catch (\Exception $e) {
    //         // Handle any other exceptions
    //         throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
    //     } 

    // }
    // public function getPagesGiros() : Collection
    // {
    //     try {
            
    //         return Page::where('publish',1)->where( "tags",'like',"%Giros%")->orderBy('visited','desc')->limit(5)->get();

            
    //     }catch (\Exception $e) {
    //         // Handle any other exceptions
    //         throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
    //     } 

    // }
    public function incrementVisited(int $pageId) : void
    {
        try {
            $page = Page::find($pageId);
            if ( $page->visited ){

                $a = $page->visited + 1;
            }else{
            

                $a = 1;
            }
            $page->visited = $a;
            $page->save();
            // $page->update(['visited' => $a]);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function adminGetPages() : LengthAwarePaginator
    {
        try {
            return Page::paginate(10);
        }catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }

}