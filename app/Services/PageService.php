<?php



namespace App\Services;
use App\Repositories\PageRepository;
use App\Services\ContactService;
use App\Services\AboutUsService;
use App\Models\Page;
use App\Http\Requests\StoreContactInfoRequest;
use Illuminate\Pagination\LengthAwarePaginator;


class PageService
{
    public function __construct(PageRepository $pageRepository,ContactService $contactService,AboutUsService $aboutUsService)
        {
            $this->pageRepository = $pageRepository;
            $this->contactService = $contactService;
            $this->aboutUsService = $aboutUsService;
        }

    public function create(array $data,$contactRequest) : void
    {
        $tags = implode(',', $data['tags']);
        $data['tags']= $tags;
        if ( !$this->pageRepository->getOneWithUserId($data['user_id'])){
            
            $page = $this->pageRepository->create($data);




        }else{
            $contactValidated = $contactRequest->validated();
            
            $this->contactService->create($contactValidated['contactInfo']);
            
            $this->pageRepository->update($data);
        }
    }
    public function initialCreate(array $data) : void
    {
        $tags = implode(',', $data['tags']);
        $data['tags']= $tags;
        if ( !$this->pageRepository->getOneWithUserId($data['user_id'])){
            
            $page = $this->pageRepository->create($data);




        }
    }
    public function pageExists(int $userId) : ?Page
    {
        return $this->pageRepository->pageExists($userId);
    }
    public function pageExistsWithId(int $pageId) : ?Page
    {
        return $this->pageRepository->pageExistsWithId($pageId);
    }
    public function getUsersPage(int $userId) : ?Page
    {
        $page = $this->pageRepository->getOneWithUserId($userId);
        $tags = explode(',',$page->tags);
        $page->tags = $tags;
        return $page;
    }
    public function postPage(int $pageId) :void
    {
        $page = $this->pageRepository->getOne($pageId);
        if( $page->publish == 1 ){
            $this->pageRepository->updatePublished($pageId,0);
        }else{
            $this->pageRepository->updatePublished($pageId,1);

        }
    }
    public function getRestaurantsForGuest($request) : ?LengthAwarePaginator
    {

        
        $query = Page::query();
        
        if ( $request['title'] ){
            $query->where( "title",'like',"%".$request['title']."%");
            
        }
        if ( $request['filters'] ){
            $filters = $request['filters'];
            foreach($filters as $filter ){
                $query->orWhere( "tags",'like',"%".$filter ."%");

            }
        }
        if ( $request['cities'] ){
            $query->whereIn('city', $request['cities']);
        }
        $pages =  $this->pageRepository->pageQuery($query);

        foreach ($pages as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
        }
        return $pages;
        
    }
    public function getPages() : ?LengthAwarePaginator
    {
        $pages =  $this->pageRepository->getPages();
        foreach ($pages as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
        }
        return $pages;
    }
    
}