<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MenuNoImgsSectionService;
use App\Services\MenuSectionService;
use App\Http\Requests\StoreNoImgsMenuSectionRequest;


class NoImgsMenuSectionController extends Controller
{
    public function __construct(MenuNoImgsSectionService $noImgsMenuSectionService,MenuSectionService $menuSectionService)
    {
        $this->noImgsMenuSectionService = $noImgsMenuSectionService;
        $this->menuSectionService = $menuSectionService;
       
    }
    public function store(Request $request, StoreNoImgsMenuSectionRequest $noImgsMenuSectionRequest )
    {
        $this->noImgsMenuSectionService->verifyMenuSections($request,  $noImgsMenuSectionRequest);  
        $this->menuSectionService->deleteMenu($request['menu'][0]['pageId']);

        return redirect()->route('dashboard')->with('message', 'Successfully created');   
        
    }
    public function destroy($pageId)
    {
        $this->noImgsMenuSectionService->deleteMenu($pageId);    
        return redirect()->route('dashboard')->with('message','Successfully deleted');   
        
    }
}
