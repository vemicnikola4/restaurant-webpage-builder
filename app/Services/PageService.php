<?php



namespace App\Services;
use App\Repositories\PageRepository;
use App\Services\ContactService;
use App\Services\AboutUsService;
use App\Models\Page;
use App\Http\Requests\StoreContactInfoRequest;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;

class PageService
{
    public function __construct(PageRepository $pageRepository,ContactService $contactService,AboutUsService $aboutUsService)
        {
            $this->pageRepository = $pageRepository;
            $this->contactService = $contactService;
            $this->aboutUsService = $aboutUsService;
        }

    public function create(array $data,$contactRequest) 
    {
        $tags = implode(',', $data['tags']);
        foreach($data['workingHours'] as $key => $val ){
            if ( $data['workingHours'][$key]['open'] == true ){
                $validator = Validator::make($data['workingHours'][$key],[
                    'openHours' =>'required|integer|min:0|max:23',
                    'openMinutes' =>'required|integer|min:0|max:59',
                    'closingHours' =>' required|integer|min:0|max:23',
                    'closingMinutes' =>' required|integer|min:0|max:59',
                ]);
                
                    if ($validator->fails()) {
                        return redirect()->back()->withErrors($validator)->withInput();  

                    }
                
            }
            else{
                $data['workingHours'][$key]['openHours'] = null;
                $data['workingHours'][$key]['openMinutes'] = null;
                $data['workingHours'][$key]['closingHours'] = null;
                $data['workingHours'][$key]['closingMinutes'] = null;
                
            }
        }
        $data['tags']= $tags;
        if ( !$this->pageRepository->getOneWithUserId($data['user_id'])){
            
            $page = $this->pageRepository->create($data);




        }else{
            $contactValidated = $contactRequest->validated();
            
            $this->contactService->create($contactValidated['contactInfo']);
            
            $this->pageRepository->update($data);
            return redirect()->route('dashboard')->with('message','Successfully created');   


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
    public function getPage(int $pageId) : Page
    {
        $page = $this->pageRepository->getOne($pageId);
        $tags = explode(',',$page->tags);
        $workingHours = json_decode($page->working_hours);
        $page->workingHours = $workingHours;
        $page->tags = $tags;
        return $page;
    }
    public function getUsersPage(int $userId) : ?Page
    {
        $page = $this->pageRepository->getOneWithUserId($userId);
        $tags = explode(',',$page->tags);
        $workingHours = json_decode($page->working_hours);
        $page->workingHours = $workingHours;
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
    public function incrementVisited( int $pageId) : void
    {
        $this->pageRepository->incrementVisited($pageId);
    }
    public function updateMenuPosition ( array $data ) : void 
    {

        $this->contactService->updateMenuPosition($data);
    }
}