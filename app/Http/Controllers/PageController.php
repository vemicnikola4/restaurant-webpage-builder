<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Http\Requests\PageRequest;
use App\Services\PageService;
use App\Services\HeroService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct(PageService $pageService, HeroService $heroService)
    {
        $this->pageService = $pageService;
        $this->heroService = $heroService;
       
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
        if ($page ){
            $heroExists = $this->heroService->heroExists($page->id);

            if ( $heroExists ){
                $hero = $this->heroService->getHeroForPage($page->id);

                $page['hero'] =$hero;
                return Inertia::render('WebPage/Index',[
                    'page'=>$page,
                ]);
            }else{
                return Inertia::render('WebPage/Index',[
                    'page'=>$page,
                ]);
            }
            
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
    public function store(PageRequest $request)
    {
        $validated = $request->validated();
        $this->pageService->create($validated);

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
