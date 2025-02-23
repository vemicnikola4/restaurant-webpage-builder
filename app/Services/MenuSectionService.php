<?php
namespace App\Services;
use App\Repositories\MenuSectionRepository;
use App\Models\MenuSection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Collection;
use App\Http\Requests\StoreMenuSectionRequest;



class MenuSectionService
{
    public function __construct(MenuSectionRepository $menuSectionRepository)
    {
        $this->menuSectionRepository = $menuSectionRepository;

    }

    public function menuSectionsExists(int  $pageId): ?MenuSection
    {
        return $this->menuSectionRepository->menuSectionsExists($pageId);
    }
    
        
    public function getMenuSectionsForPage(int $pageId) : Collection
    {
        $menuSections =  $this->menuSectionRepository->getMenuSectionsForPage($pageId);

        foreach( $menuSections as $section ){
            $section['items'] = $this->menuSectionRepository->getItems($section);
            foreach($section['items'] as $sectionItem ){
                $media = $this->menuSectionRepository->getItemMedia($sectionItem);
                $sectionItem['mediaPath'] = asset('storage/'.$media->path);
                $sectionItem['mediaAlt'] = $media->alt;
                $sectionItem['itemTitle'] = $sectionItem->title;
                $sectionItem['itemDescription'] = $sectionItem->description;
                $sectionItem['itemPrice'] = (int)$sectionItem->price;
              
            }
        }
        return $menuSections;

    }
    public function update(array $data) : MenuSection
    {
       
    }
    public function verifyMenuSections( $request ,$menuSectionRequest) :string
    {
        $menu = $request['menu'];
        $menuSectionsValidated = $menuSectionRequest->validated();
        $menuSectionsFromDb = $this->getMenuSectionsForPage($menu[0]['pageId']);

        $sectionIds = array_column($menu, 'id');

        //ako smo izbrisali sekciju sa frontenda izbrisemo sve slike iz storidza koji pripadaju toj sekciji pa obrisemo i samu sekciju. Cascade ce se pobrinuti za menu_items u db i menu_item_media.
        foreach($menuSectionsFromDb as $menuSectionFromDb){
            if ( !in_array($menuSectionFromDb->id,$sectionIds) ){
                $dbMenuItems = $this->menuSectionRepository->getItems($menuSectionFromDb);
                foreach( $dbMenuItems as $menuItem ){
                        if (Storage::disk('public')->exists($menuItem->media->path)) {
                            Storage::disk('public')->delete($menuItem->media->path);
                        }
                }
                $this->menuSectionRepository->delete($menuSectionFromDb->id);
            }
        }

        //get media for every item
        //iteriramo kroz niz poslat requestom. Niz sadrzi sekcije menija
        foreach( $menu as $key => $section ){
            //da li sekcija postoji u DB
            $menuSectionExists =  $this->menuSectionRepository->sectionExists($section['id']);
            if ( $menuSectionExists ){
                //Akopostoji diohvati je sa sve itemima i item slikama
                $menuSection = $this->menuSectionRepository->getMenuSection($section['id']);


                //isbrisati slike is skladista svih proizvoda koji nisu u novom zahtevu(obrisanisu);
                $dbMenuItems = $this->menuSectionRepository->getItems($menuSection);
                $sectionItemsids = array_column($section['items'], 'id');
                foreach( $dbMenuItems as $menuItem ){
                    if (!in_array($menuItem->id, $sectionItemsids)){
                        if (Storage::disk('public')->exists($menuItem->media->path)) {
                            Storage::disk('public')->delete($menuItem->media->path);
                        }
                    }
                }
                
                foreach($section['items'] as $inc => $item ){
                    $menuItemExists = $this->menuSectionRepository->menuItemExists($item['id']);
                    if ( $menuItemExists ){
                        $menuItemModel = $this->menuSectionRepository->getMenuItem($item['id']);

                        //ako ne postoji medija path ili nije isti kao ova iz db treba mi da validiram pa da obrisem iz storiga staru sliku pa da napravim putanju za novu
                        if ( is_array( $item['media']) && $item['media']['path'] == $menuItemModel['media']->path ){
                               $section['items'][$inc]['mediaPath'] = $menuItemModel['media']->path;
                               $section['items'][$inc]['mediaExtention'] = $menuItemModel['media']->extention;
                               $section['items'][$inc]['mediaAlt']=$menuItemModel['media']->alt;

                            
                        }else{
                            $mediaValidated = $request->validate([
                                'menu.'.$key.'.items.'.$inc.'.media' =>'required|image|mimes:jpg,jpeg,png,gif,webp',
                                // 'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                            ],[
                                // 'media.required' => 'The media field is required.',
                                // 'media.image'=> 'The title field must be an image.',
                                // 'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                                
                                'menu.'.$key.'.items.'.$inc.'.media.required' => 'The media field is required.',
                                'menu.'.$key.'.items.'.$inc.'.media.image'=> 'The title field must be an image.',
                                'menu.'.$key.'.items.'.$inc.'.media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                            ]);
                            if (Storage::disk('public')->exists($menuItemModel['media']->path)) {
                                Storage::disk('public')->delete($menuItemModel['media']->path);
                            }
                                $image = $item['media'];
                
                               $imagePath = $image->store('images', 'public');
                               $section['items'][$inc]['mediaPath'] = $imagePath;
                               $section['items'][$inc]['mediaExtention'] = substr($imagePath,strpos($imagePath,'.')+1 );
                               $section['items'][$inc]['mediaAlt']=$item['itemTitle']."image";


                        }
                        
                        


                        //******************************************************* */
                        //******************************************************* */
                        
                        
    
                    }else{
                        $mediaValidated = $request->validate([
                            'menu.'.$key.'.items.'.$inc.'.media' =>'required|image|mimes:jpg,jpeg,png,gif,webp',
                            // 'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                        ],[
                            // 'media.required' => 'The media field is required.',
                            // 'media.image'=> 'The title field must be an image.',
                            // 'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                            
                            'menu.'.$key.'.items.'.$inc.'.media.required' => 'The media field is required.',
                            'menu.'.$key.'.items.'.$inc.'.media.image'=> 'The title field must be an image.',
                            'menu.'.$key.'.items.'.$inc.'.media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                            ]);

                            $image = $item['media'];
                
                            $imagePath = $image->store('images', 'public');
                            $section['items'][$inc]['mediaPath'] = $imagePath;
                            $section['items'][$inc]['mediaExtention'] = substr($imagePath,strpos($imagePath,'.')+1 );
                            $section['items'][$inc]['mediaAlt']=$item['itemTitle']."image";

                    }

                    
    
                }
                    $this->menuSectionRepository-> delete($menuSection->id);
                    $this->menuSectionRepository->create($section,$key);
            }else{
                foreach($section['items'] as $inc => $item ){
                    $mediaValidated = $request->validate([
                        'menu.'.$key.'.items.'.$inc.'.media' =>'required|image|mimes:jpg,jpeg,png,gif,webp',
                        // 'media' => 'required|image|mimes:jpg,jpeg,png,gif,webp',
                    ],[
                        // 'media.required' => 'The media field is required.',
                        // 'media.image'=> 'The title field must be an image.',
                        // 'media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                        
                        'menu.'.$key.'.items.'.$inc.'.media.required' => 'The media field is required.',
                        'menu.'.$key.'.items.'.$inc.'.media.image'=> 'The title field must be an image.',
                        'menu.'.$key.'.items.'.$inc.'.media.mimes'=> 'Extentions allowed:jpg,jpeg,png,gif.',
                               ]);
                    
                               $image = $item['media'];
                
                               $imagePath = $image->store('images', 'public');
                               $section['items'][$inc]['mediaPath'] = $imagePath;
                               $section['items'][$inc]['mediaExtention'] = substr($imagePath,strpos($imagePath,'.')+1 );
                               $section['items'][$inc]['mediaAlt']=$item['itemTitle']."image";
                }
                $this->menuSectionRepository->create($section,$key);

            }
            

        }
      
        return 'Successfully created';
    }
    public function deleteMenu(int $pageId) : string
    {
       return $this->menuSectionRepository->deleteMenu($pageId);
    }
    
}