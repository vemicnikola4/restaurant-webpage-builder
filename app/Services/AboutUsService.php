<?php
namespace App\Services;
use App\Repositories\AboutUsRepository;
use App\Models\AboutUs;
use App\Services\MediaService;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\AboutUsResource;



class AboutUsService
{
    public function __construct(AboutUsRepository $aboutUsRepository,MediaService $mediaService)
    {
        $this->aboutUsRepository = $aboutUsRepository;
        $this->mediaService = $mediaService;

    }

    public function aboutUsExists(int  $pageId): ?AboutUs
    {
        return $this->aboutUsRepository->aboutUsExists($pageId);
    }
    public function validateAboutUs( $request,$storeAboutUsRequest ){
      if ( $request->hasFile('media')){
        $mediaValidated = $request->validate([
            'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
        ],[
            'media.required' => 'The media field is required.',
            'media.image'=> 'The title field must be an image.',
            'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
            
            // 'email.required' => 'The email address is required.',
         
        ]);
        $aboutUsValidated = $storeAboutUsRequest->validated();
        //chck if about us exists
        $aboutUsExists = $this->aboutUsExists($aboutUsValidated['pageId']);
        if ( $aboutUsExists ){
            $mediaExistsInDb = $aboutUsExists['media'];
            if( $mediaExistsInDb ){
                //if image exists delete it
                $this->aboutUsRepository->deleteImage($aboutUsExists);
                //if image exists in storage delite it
                if ( Storage::disk('public')->exists( $mediaExistsInDb->path)){
                    Storage::disk('public')->delete($mediaExistsInDb->path);
    
                    
                }

            }
            $image = $request->file('media');
    
            $imagePath = $image->store('images', 'public');
            $mediaReady['image_path'] = $imagePath;
            $mediaReady['extention'] = substr($imagePath,strpos($imagePath,'.')+1 );
            $mediaReady['alt']='image';
            
            $aboutUsValidated['media'] = $mediaReady;
            $this->aboutUsRepository->update($aboutUsExists,$aboutUsValidated );

        }else{
            $image = $request->file('media');
    
            $imagePath = $image->store('images', 'public');
            $mediaReady['image_path'] = $imagePath;
            $mediaReady['extention'] = substr($imagePath,strpos($imagePath,'.')+1 );
            $mediaReady['alt']='image';
            
            $aboutUsValidated['media'] = $mediaReady;
            $this->aboutUsRepository->create($aboutUsValidated );
        }
      }else{
        $aboutUsValidated = $storeAboutUsRequest->validated();

        //chck if about us exists
        $aboutUsExists = $this->aboutUsExists($aboutUsValidated['pageId']);
        //check if request media is null if it is need to check if aboutUs have media in db and delite it. And from the storage as well
        if ( $request['media'] == null ){
            if ( $aboutUsExists ){
                // $aboutUsDb = $this->aboutUsRepoitory->get($aboutUsExists->id);
                $mediaExistsInDb = $aboutUsExists['media'];
                if ( $mediaExistsInDb ){
                    if ( Storage::disk('public')->exists( $mediaExistsInDb->path)){
                        Storage::disk('public')->delete($mediaExistsInDb->path);
                    }
                    $this->aboutUsRepository->deleteImage($aboutUsExists);
                }
                
                $this->aboutUsRepository->updateWithoutMedia($aboutUsExists,$aboutUsValidated );
    
            }else{
                
                $this->aboutUsRepository->createWithoutMedia($aboutUsValidated);
            }

        }else{
            if ( $aboutUsExists ){
                $mediaPath = asset('storage/'.$aboutUsExists['media']->path);
                if ( $mediaPath == $request['media']){
                    $mediaValidated = $request->validate([
                        'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                    ],[
                        'media.required' => 'The media field is required.',
                        'media.image'=> 'The title field must be an image.',
                        'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                        
                        // 'email.required' => 'The email address is required.',
                     
                    ]); 
                }
                

                $this->aboutUsRepository->updateWithoutMedia($aboutUsValidated,$aboutUsValidated );
    
            }else{
                $this->aboutUsRepository->createWithoutMedia($aboutUsValidated );
            }
        }
       
      }
    }
        
    public function getAboutUsForPage(int $pageId) : AboutUsResource
    {
        $aboutUs =  $this->aboutUsRepository->getAboutUsForPage($pageId);
        if ( $aboutUs->media ){
            return new AboutUsResource($aboutUs);
            // $image = $aboutUs->media->path;
            // $resource['imagePath'] = asset('storage/'.$image);
            // $resource['hasImage']=true;
            //  $resource;


        }else{
            return new AboutUsResource($aboutUs);


            // $resource['imagePath']=null;
            // $resource['hasImage']=false;
            
            // return $resource;
        }

    }
    public function update(array $data) : AboutUs
    {
        $aboutUsExists = $this->aboutUsRepository->aboutUsExists($data['pageId']);
        if ( $aboutUsExists ){
            $data['id'] = $aboutUsExists->id;

            return $this->aboutUsRepository->update($data);

        }
    }
    
}