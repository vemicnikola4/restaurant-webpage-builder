<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MenuSectionService;
use App\Http\Requests\StoreMenuSectionRequest;


class MenuSectionController extends Controller
{
    public function __construct(MenuSectionService $menuSectionService)
    {
        $this->menuSectionService = $menuSectionService;
       
    }
    public function store(Request $request, StoreMenuSectionRequest $menuSectionRequest )
    {
        $this->menuSectionService->verifyMenuSections($request,  $menuSectionRequest);       
        
    }
}
