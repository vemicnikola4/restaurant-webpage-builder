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

class AdminController extends Controller
{
    public function __construct(PageService $pageService, HeroService $heroService, ContactService $contactService,AboutUsService $aboutUsService,MenuSectionService $menuSectionService, MenuNoImgsSectionService $menuNoImgsSectionService)
    {
        $this->pageService = $pageService;
        $this->heroService = $heroService;
        $this->contactService = $contactService;
        $this->aboutUsService = $aboutUsService;
        $this->menuSectionService = $menuSectionService;
        $this->menuNoImgsSectionService = $menuNoImgsSectionService;
       
    }
    public function index(){
        $this->pageService = $pageService;

    }

}
