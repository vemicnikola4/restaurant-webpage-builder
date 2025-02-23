<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Http\Requests\PageRequest;
use App\Http\Requests\StoreContactInfoRequest;
use App\Services\PageService;
use App\Services\HeroService;
use App\Services\ContactService;
use App\Services\AboutUsService;
use App\Services\MenuSectionService;
use App\Services\MenuNoImgsSectionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(PageService $pageService, HeroService $heroService, ContactService $contactService,AboutUsService $aboutUsService,MenuSectionService $menuSectionService, MenuNoImgsSectionService $menuNoImgsSectionService)
    {
        $this->pageService = $pageService;
        $this->heroService = $heroService;
        $this->contactService = $contactService;
        $this->aboutUsService = $aboutUsService;
        $this->menuSectionService = $menuSectionService;
        $this->menuNoImgsSectionService = $menuNoImgsSectionService;
       
    }
    public function index()
    {
        $user =Auth::user();
        $page = $this->pageService->getUsersPage($user->id);
    }
    public function dashboard()
    {
        $user =Auth::user();
        $pageExists = $this->pageService->pageExists($user->id);

        
        if ( $pageExists ){
            $message = session('message');
            $page = $this->pageService->getUsersPage($user->id);

            $heroExists = $this->heroService->heroExists($page->id);
            if ( $heroExists){
                $hero = $this->heroService->getHeroForPage($page->id);
                $page['hero'] =$hero;
            }else{
                $page['hero']=null;
            }

            $contatExists = $this->contactService->contactExists($page->id);
            if ($contatExists){

                $contactInfo = $this->contactService->getContactForPage($page->id);
                $page['contactInfo'] = $contactInfo;
                // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                // unset($page['contactInfo']['menu_position']);
                // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                // unset($page['contactInfo']['online_orders']);
                
            }else{
                $page['contactInfo'] = null;

            }

            $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
            if($aboutUsExists){
                $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                $page['aboutUs'] = $aboutUs;
                // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                // unset($page['aboutUs']['text_aligment']);
                
                
                
            }else{
                $page['aboutUs'] = null;

            }
                
            $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
            if ( $menusectionsExists ){
                $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                $page['menuSections']=$menuSections;
            }else{
                $page['menuSections'] = null;

            } 
            $noImgsSectionsExists = $this->menuNoImgsSectionService->menuSectionsExists($page->id); 
                if ( $noImgsSectionsExists ){
                    $noImgsSectionsExists = $this->menuNoImgsSectionService->getMenuSectionsForPage($page->id);
                    $page['noImgsMenuSections']=$noImgsSectionsExists;
                }else{
                    $page['noImgsMenuSections'] = null;
    
                } 
                return Inertia::render('WebPage/Index',[
                    'page'=>$page,
                    'message'=>$message,
                ]);
            
        }else{
            return Inertia::render('Dashboard');  
        }
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PageRequest $request, StoreContactInfoRequest $contactRequest)
    {
        $validated = $request->validated();
        
        $this->pageService->create($validated,$contactRequest);

        return Redirect::route('dashboard');
    }
    public function initialStore(PageRequest $request)
    {
        $validated = $request->validated();
        
        $this->pageService->initialCreate($validated);

        return Redirect::route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function userShow(Page $page)
    {
        $user =Auth::user();
        if ( $user ){
            $page = $this->pageService->getUsersPage($user->id);

            if ( $page ){
    
                $heroExists = $this->heroService->heroExists($page->id);
                if ( $heroExists){
                    $hero = $this->heroService->getHeroForPage($page->id);
                    $page['hero'] =$hero;
                }else{
                    $page['hero']=null;
                }
    
                $contatExists = $this->contactService->contactExists($page->id);
                if ($contatExists){
    
                    $contactInfo = $this->contactService->getContactForPage($page->id);
                    $page['contactInfo'] = $contactInfo;
                    // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                    // unset($page['contactInfo']['menu_position']);
                    // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                    // unset($page['contactInfo']['online_orders']);
                    
                }else{
                    $page['contactInfo'] = null;
    
                }
    
                $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
                if($aboutUsExists){
                    $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                    $page['aboutUs'] = $aboutUs;
                    // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                    // unset($page['aboutUs']['text_aligment']);
                    
                    
                    
                }else{
                    $page['aboutUs'] = null;
    
                }
                    
                $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
                if ( $menusectionsExists ){
                    $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                    $page['menuSections']=$menuSections;
                }else{
                    $page['menuSections'] = null;
    
                } 
                $noImgsSectionsExists = $this->menuNoImgsSectionService->menuSectionsExists($page->id); 
                if ( $noImgsSectionsExists ){
                    $menuSections = $this->menuNoImgsSectionService->getMenuSectionsForPage($page->id);
                    $page['noImgsMenuSections']=$menuSections;
                }else{
                    $page['noImgsMenuSections'] = null;
    
                } 
                
                    return Inertia::render('PublicUserWebPage/Index',[
                        'page'=>$page,
                    ]);
                
            }
        }

    }
    public function show($id)
    {       
       
            $page = $this->pageService->pageExistsWithId($id);

            if ( $page ){
    
                $heroExists = $this->heroService->heroExists($page->id);
                if ( $heroExists){
                    $hero = $this->heroService->getHeroForPage($page->id);
                    $page['hero'] =$hero;
                }else{
                    $page['hero']=null;
                }
    
                $contatExists = $this->contactService->contactExists($page->id);
                if ($contatExists){
    
                    $contactInfo = $this->contactService->getContactForPage($page->id);
                    $page['contactInfo'] = $contactInfo;
                    // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                    // unset($page['contactInfo']['menu_position']);
                    // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                    // unset($page['contactInfo']['online_orders']);
                    
                }else{
                    $page['contactInfo'] = null;
    
                }
    
                $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
                if($aboutUsExists){
                    $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                    $page['aboutUs'] = $aboutUs;
                    // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                    // unset($page['aboutUs']['text_aligment']);
                    
                    
                    
                }else{
                    $page['aboutUs'] = null;
    
                }
                    
                $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
                if ( $menusectionsExists ){
                    $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                    $page['menuSections']=$menuSections;
                }else{
                    $page['menuSections'] = null;
    
                } 
                
                    return Inertia::render('PublicWebPage/WebPage/Index',[
                        'page'=>$page,
                    ]);
                
            }else{
                return redirect()->route('/')->with('message', 'Restaurant dont exists.');
            }

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Page $page)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Page $page)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        //
    }
    public function postPage(Request $request)
    {
        $this->pageService->postPage($request['id']);

        
    }
}
