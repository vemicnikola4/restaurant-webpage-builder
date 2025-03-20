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
        
        $days = [
            'sunday','monday','tuesday','wednesday','thursday','friday','saturday'
        ];
        $tags = implode(',', $data['tags']);
        if ( !$data['workingHours']){
            for( $i = 0 ; $i < 7; $i++ ){
                $data['workingHours'][$i]['day'] =  $days[$i];
                $data['workingHours'][$i]['value'] =  $i;
                $data['workingHours'][$i]['open'] =  false;
                $data['workingHours'][$i]['openHours'] = null;
                $data['workingHours'][$i]['openMinutes'] = null;
                $data['workingHours'][$i]['closingHours'] = null;
                $data['workingHours'][$i]['closingMinutes'] = null;
            }
        }else{

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
    public function postPage(int $pageId) : void
    {
        $page = $this->pageRepository->getOne($pageId);
        
        if ( $page->hero && $page->aboutUs && $page->contactInfo ){
            if( $page->publish == 1 ){
                $this->pageRepository->updatePublished($pageId,0);
            }else{
                $this->pageRepository->updatePublished($pageId,1);
    
            }
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
                $query->where( "tags",'like',"%".$filter ."%");

            }
        }
        if ( $request['cities'] ){
            $query->whereIn('city', $request['cities']);
        }
        $query->where('publish', 1);
       

        $pages =  $this->pageRepository->pageQuery($query);

        foreach ($pages as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
        }
        return $pages;
        
    }
    public function getPages() : ?array
    {
        $pages['pages'] =  $this->pageRepository->getPages();
        $pages['giros'] =  $this->pageRepository->getPagesIncludingTag('Giros');
        $pages['bbq'] =  $this->pageRepository->getPagesIncludingTag('BBQ');
        $pages['burgers'] =  $this->pageRepository->getPagesIncludingTag('Burgers');
        $pages['pizza'] =  $this->pageRepository->getPagesIncludingTag('Pizza');
        foreach ($pages['pages'] as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
        }
        foreach ($pages['giros'] as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
        }
        foreach ($pages['bbq'] as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
        }
        foreach ($pages['burgers'] as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
        }
        foreach ($pages['pizza'] as $page){
            $page['media'] = asset('storage/'.$page->hero->media->path);
            $workingHours = json_decode($page->working_hours);
            $page->workingHours = $workingHours;
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
    public function adminGetPages() : ?LengthAwarePaginator
    {
        return $this->pageRepository->adminGetPages();

    }
}