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
    public function getHeroForPage(int $pageId) : ?Hero
    {
        $hero =  $this->heroRepository->getHeroForPage($pageId);
        $media = $this->mediaService->getOne($hero->media_id);
        $hero['image'] = asset('storage/'.$media->path);
        return $hero;
    }
    
}