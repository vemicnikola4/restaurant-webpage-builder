<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreAboutUsRequest;
use Illuminate\Http\Request;
use App\Services\AboutUsService;



class AboutUsController extends Controller
{
    public function __construct(AboutUsService $aboutUsService)
    {
        $this->aboutUsService = $aboutUsService;
       
    }
    public function store(Request $request,StoreAboutUsRequest $storeAboutUsRequest )
    {
        $this->aboutUsService->validateAboutUs($request,$storeAboutUsRequest);
        return redirect()->route('dashboard')->with('message', 'Successfully created');   
        
        
    }
}