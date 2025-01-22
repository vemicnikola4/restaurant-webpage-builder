<?php



namespace App\Services;
use App\Repositories\HeroRepository;
use App\Models\Hero;
use App\Services\MediaService;
use Illuminate\Support\Facades\Storage;


class HeroService
{
    public function __construct(HeroRepository $heroRepository,MediaService $mediaService)
        {
            $this->heroRepository = $heroRepository;
            $this->mediaService = $mediaService;
        }

    public function create(array $data) : void
    {
        $heroExists = $this->heroRepository->heroExists($data['page_id']);
        if ( $heroExists ){
            $media = $this->mediaService->getOne($heroExists->media_id);

            if (Storage::disk('public')->exists($media->path)) {
                // Delete the image file
                Storage::disk('public')->delete($media->path);
                
            }
            $this->mediaService->deleteOne($media->id);

        }
        $this->heroRepository->create($data);
    }
    public function update(array $data) 
    {
        $heroExists = $this->heroRepository->heroExists($data['page_id']);
        if ( $heroExists ){
            $data['id'] = $heroExists->id;

             $this->heroRepository->update($data);

        }
    }
    public function getHeroForPage(int $pageId) : Hero
    {
        $hero =  $this->heroRepository->getHeroForPage($pageId);
        $media = $this->mediaService->getOne($hero->media_id);
        $hero['image'] = asset('storage/'.$media->path);
        return $hero;
    }
    public function heroExists(int $pageId) : ?Hero
    {
        $heroExists =  $this->heroRepository->heroExists($pageId);
        if ( $heroExists ){
            return $this->getHeroForPage($pageId);
        }else{
            return null;
        }
    }
    public function validateHero( $request ){
        if ( !$request->hasFile('media')){
            //if its not gile check if the pat exists in storage if not do the validation
            $ind = strpos($request['media'],'images');
            $path = substr($request['media'],$ind);
            if (!Storage::disk('public')->exists($path)){
                $mediaValidated = $request->validate([
                    'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                ],[
                    'media.required' => 'The media field is required.',
                    'media.image'=> 'The title field must be an image.',
                    'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                    
                    // 'email.required' => 'The email address is required.',
                 
                ]);
    
            }else{
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
    
            $this->update($heroValidated);
    
            

            }
        }else{
            $mediaValidated = $request->validate([
                'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
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
            $this->create($heroValidated);
    
           

        }
    }
}