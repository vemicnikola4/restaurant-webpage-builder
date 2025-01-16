<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use App\Http\Requests\StoreHeroRequest;
use App\Http\Requests\StoreMediaRequest;
use App\Http\Requests\UpdateHeroRequest;
use Illuminate\Http\Request;
use App\Services\MediaService;
use App\Services\HeroService;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;




class HeroController extends Controller
{
    
    public function __construct(MediaService $mediaService,HeroService $heroService)
    {
        $this->mediaService = $mediaService;
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
    public function store(Request $request)
    {
        
        if ( !$request->hasFile('media')){
            //if its not gile check if the pat exists in storage if not do the validation
            $ind = strpos($request['media'],'images');
            $path = substr($request['media'],$ind);
            if (!Storage::disk('public')->exists($path)){
                $mediaValidated = $request->validate([
                    'media' => 'required|image|mimes:jpg,jpeg,png,gif',
                ],[
                    'media.required' => 'The media field is required.',
                    'media.image'=> 'The title field must be an image.',
                    'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                    
                    // 'email.required' => 'The email address is required.',
                 
                ]);
    
            }else{
            $media = $this->mediaService->getOneWithPath($path);
            $heroValidated = $request->validate([
                'title'=>'string|required|min:2',
                'subTitle'=>'string|required|min:2',
                'textBoxPosition'=>'string|required|in:center,left,right',
                'page_id'=>'required|exists:pages,id',
            ],
            [
                'title.required' => 'The title field is required.',
                'title.string'=> 'The title field must be a string.',
                'title.min'=> 'The title field must be at least 2 characters.',
                'subTitle.required' => 'The subtitle field is required.',
                'subTitle.string'=> 'The subtitle field must be a string.',
                'subTitle.min'=> 'The subtitle field must be at least 2 characters.',
                'textBoxPosition.string'=>'Field required. Values allowed:center,left,right.',
                'textBoxPosition.required'=>'Field required. Values allowed:center,left,right.',
                'textBoxPosition.in'=>'Field required. Values allowed:center,left,right.',
                'page_id|required'=>'Ups something went wrong. Try again.',
                'page_id|exists'=>'Ups something went wrong. Try again.',
    
               
            ]);
            $heroValidated['media_id'] = $media->id;
    
            $this->heroService->update($heroValidated);
    
            return Redirect::route('dashboard');

            }
        }else{
            $mediaValidated = $request->validate([
                'media' => 'required|image|mimes:jpg,jpeg,png,gif',
            ],[
                'media.required' => 'The media field is required.',
                'media.image'=> 'The title field must be an image.',
                'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                
                // 'email.required' => 'The email address is required.',
             
            ]);
            $media = $this->mediaService->create($request);
            $heroValidated = $request->validate([
                'title'=>'string|required|min:2',
                'subTitle'=>'string|required|min:2',
                'textBoxPosition'=>'string|required|in:center,left,right',
                'page_id'=>'required|exists:pages,id',
            ],
            [
                'title.required' => 'The title field is required.',
                'title.string'=> 'The title field must be a string.',
                'title.min'=> 'The title field must be at least 2 characters.',
                'subTitle.required' => 'The subtitle field is required.',
                'subTitle.string'=> 'The subtitle field must be a string.',
                'subTitle.min'=> 'The subtitle field must be at least 2 characters.',
                'textBoxPosition.string'=>'Field required. Values allowed:center,left,right.',
                'textBoxPosition.required'=>'Field required. Values allowed:center,left,right.',
                'textBoxPosition.in'=>'Field required. Values allowed:center,left,right.',
                'page_id|required'=>'Ups something went wrong. Try again.',
                'page_id|exists'=>'Ups something went wrong. Try again.',
    
               
            ]);
            $heroValidated['media_id'] = $media->id;
    
            $this->heroService->create($heroValidated);
    
            return Redirect::route('dashboard');

        }
        
        

        

        

        

        
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
