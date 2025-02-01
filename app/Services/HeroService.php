<?php



namespace App\Services;
use App\Repositories\HeroRepository;
use App\Models\Hero;
use App\Http\Resources\HeroResource;
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
    public function getHeroForPage(int $pageId) : HeroResource
    {
        $hero =  $this->heroRepository->getHeroForPage($pageId);
        // $media = $hero['media'];
        // $hero['image'] = asset('storage/'.$media->path);
        return new HeroResource($hero);
    }
    public function heroExists(int $pageId) : ?Hero
    {
        return  $this->heroRepository->heroExists($pageId);
      
    }
    public function validateHero( $request,$heroRequest ){
        
        if ( $request->hasFile('media')){
            $mediaValidated = $request->validate([
                'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
            ],[
                'media.required' => 'The media field is required.',
                'media.image'=> 'The title field must be an image.',
                'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                
                // 'email.required' => 'The email address is required.',
             
            ]);
            $heroValidated = $heroRequest->validated();
            $heroExists = $this->heroRepository->heroExists($heroValidated['pageId']);
            if ( $heroExists ){
                $heroDb = $this->heroRepository->get($heroExists->id);
                $mediaExistsInDb = $heroDb['media'];
                $this->heroRepository->deleteImage($heroDb);

                if ( Storage::disk('public')->exists( $mediaExistsInDb->path)){
                    Storage::disk('public')->delete($mediaExistsInDb->path);
    
                    
                }
                $image = $request->file('media');

                $imagePath = $image->store('images', 'public');
                $mediaReady['image_path'] = $imagePath;
                $mediaReady['extention'] = substr($imagePath,strpos($imagePath,'.')+1 );
                $mediaReady['alt']='image';

                $heroValidated['media'] = $mediaReady;
                $this->heroRepository->update( $heroDb,$heroValidated );

            }else{
                $image = $request->file('media');
    
                $imagePath = $image->store('images', 'public');
                $mediaReady['image_path'] = $imagePath;
                $mediaReady['extention'] = substr($imagePath,strpos($imagePath,'.')+1 );
                $mediaReady['alt']='image';

                $heroValidated['media'] = $mediaReady;

                $this->heroRepository->create($heroValidated );
            }
        }else{
            $heroValidated = $heroRequest->validated();
            $heroExists = $this->heroRepository->heroExists($heroValidated['pageId']);
            if ( $heroExists){
                $heroDb = $this->heroRepository->get($heroExists->id);
                $mediaExistsInDb = $heroDb->media;
                if ( $mediaExistsInDb ){
                    $mediaPath = asset('storage/'.$mediaExistsInDb->path);
                    if( $mediaPath !==  $request['media']){
                        $mediaValidated = $request->validate([
                            'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                        ],[
                            'media.required' => 'The media field is required.',
                            'media.image'=> 'The title field must be an image.',
                            'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                            
                            // 'email.required' => 'The email address is required.',
                         
                        ]);
                    }else{
                    }
                }

                $this->heroRepository->updateWithoutMedia($heroExists,$heroValidated);
            }else{
                $mediaValidated = $request->validate([
                    'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                ],[
                    'media.required' => 'The media field is required.',
                    'media.image'=> 'The title field must be an image.',
                    'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                    
                    // 'email.required' => 'The email address is required.',
                 
                ]);
                $heroValidated = $heroRequest->validated();
            }
            
            
        }


    }
}