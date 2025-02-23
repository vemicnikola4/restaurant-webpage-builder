<?php
namespace App\Services;
use App\Repositories\MenuNoImgsSectionRepository;
use App\Models\NoImgsMenuSection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use App\Http\Requests\StoreMenuSectionRequest;



class MenuNoImgsSectionService
{
    public function __construct(MenuNoImgsSectionRepository $menuSectionRepository)
    {
        $this->menuSectionRepository = $menuSectionRepository;

    }

    public function menuSectionsExists(int  $pageId): ?NoImgsMenuSection
    {
        return $this->menuSectionRepository->menuSectionsExists($pageId);
    }
    
        
    public function getMenuSectionsForPage(int $pageId) : Collection
    {
        $menuSections =  $this->menuSectionRepository->getMenuSectionsForPage($pageId);

        foreach( $menuSections as $section ){
            $section['items'] = $this->menuSectionRepository->getItems($section);
            foreach($section['items'] as $sectionItem ){
                
                $sectionItem['itemTitle'] = $sectionItem->title;
                $sectionItem['itemDescription'] = $sectionItem->description;
                $sectionItem['itemPrice'] = (int)$sectionItem->price;
              
            }
        }
        return $menuSections;

    }
    // public function update(array $data) : MenuSection
    // {
       
    // }
    public function verifyMenuSections( $request ,$menuSectionRequest) :string
    {
        $menu = $request['menu'];
        $menuSectionsValidated = $menuSectionRequest->validated();
        // $menuSectionsFromDb = $this->getMenuSectionsForPage($menu[0]['pageId']);

        foreach( $menu as $key => $section){
            $menuSectionExists = $this->menuSectionRepository->sectionExists($section['id']);
            if ($menuSectionExists ){
                $this->menuSectionRepository-> delete($section['id']);
                return $this->menuSectionRepository->create($section,$key);
            }else{
                return $this->menuSectionRepository->create($section,$key);

            }
        }
        
        
      
        
    }
    public function deleteMenu(int $pageId) : string
    {
       return $this->menuSectionRepository->deleteMenu($pageId);
    }
    
}