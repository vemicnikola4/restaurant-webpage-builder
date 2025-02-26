<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MenuSectionService;
use App\Services\MenuNoImgsSectionService;
use App\Http\Requests\StoreMenuSectionRequest;


class MenuSectionController extends Controller
{
    public function __construct(MenuSectionService $menuSectionService, MenuNoImgsSectionService $noImgsMenuSectionService)
    {
        $this->menuSectionService = $menuSectionService;
        $this->noImgsMenuSectionService = $noImgsMenuSectionService;
       
    }
    public function store(Request $request, StoreMenuSectionRequest $menuSectionRequest )
    {
        $msg = $this->menuSectionService->verifyMenuSections($request,  $menuSectionRequest);     
        $this->noImgsMenuSectionService->deleteMenu($request['menu'][0]['pageId']);
        return redirect()->route('dashboard')->with('message', 'Successfully created');   
        
    }
    public function destroy($pageId)
    {
        $this->menuSectionService->deleteMenu($pageId);    

        return redirect()->route('dashboard')->with('message','Successfully deleted');   
        
    }
}
