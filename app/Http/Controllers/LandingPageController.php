<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PageService;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function __construct (PageService $pageService )
    {
        $this->pageService = $pageService;
       
       
    }
    public function index(){
        $pages = $this->pageService->getPages();
        return Inertia::render('PublicWebPage/Index',[
            'pages' => $pages
        ]);
    }
    public function getRestaurants(Request $request){
        
        $pages = $this->pageService->getRestaurantsForGuest($request);
        return Inertia::render('PublicWebPage/Index',[
            'pages' => $pages,
            'queryParams'=>request()->query() ?: null,
        ]);
       
       
    
    }
}
