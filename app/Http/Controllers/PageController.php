<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Http\Requests\PageRequest;
use App\Http\Requests\StoreContactInfoRequest;
use App\Services\PageService;
use App\Services\HeroService;
use App\Services\ContactService;
use App\Services\AboutUsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(PageService $pageService, HeroService $heroService, ContactService $contactService,AboutUsService $aboutUsService)
    {
        $this->pageService = $pageService;
        $this->heroService = $heroService;
        $this->contactService = $contactService;
        $this->aboutUsService = $aboutUsService;
       
    }
    public function index()
    {
        $user =Auth::user();
        $page = $this->pageService->getUsersPage($user->id);
    }
    public function dashboard()
    {
        $user =Auth::user();
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
                $page['contactInfo'] = $contatExists;
                $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                unset($page['contactInfo']['menu_position']);
                $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                unset($page['contactInfo']['online_orders']);
                
            }else{
                $page['contactInfo'] = null;

            }

            $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
            if($aboutUsExists){
                $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                
                $page['aboutUs'] = $aboutUs;
                $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                unset($page['aboutUs']['text_aligment']);
                
                
                
            }else{
                $page['aboutUs'] = null;

            }
                
                
                
                return Inertia::render('WebPage/Index',[
                    'page'=>$page,
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

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Page $page)
    {
        //
    }
}
