<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use App\Http\Requests\StoreHeroRequest;
use App\Http\Requests\StoreMediaRequest;
use App\Http\Requests\UpdateHeroRequest;
use Illuminate\Http\Request;
use App\Services\HeroService;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;




class HeroController extends Controller
{
    
    public function __construct(HeroService $heroService)
    {
        $this->heroService = $heroService;
       
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request,StoreHeroRequest $heroRequest)
    {
        $this->heroService->validateHero($request,$heroRequest);
        return redirect()->route('dashboard')->with('message','Successfully created');   


        
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Hero $hero)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Hero $hero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHeroRequest $request, Hero $hero)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Hero $hero)
    {
        //
    }
}
