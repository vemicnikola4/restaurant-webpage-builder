<?php
namespace App\Repositories;

use App\Models\MenuSection;
use App\Models\MenuSectionItem;
use App\Models\MenuSectionItemMedia;
use Illuminate\Support\Collection;


class MenuSectionRepository 
{

    public function __construct(
        protected MenuSection $model
    ){}

    public function create( array $data, int $index) : void
    {
        try {
            $menuSection = MenuSection::create([
            'id'=>$data['id'],
            'title'=>$data['title'],
            'index'=>$index,
            'page_id'=>$data['pageId'],
            'note'=>$data['note'],
            ]);
            $items = $data['items'];
            foreach($items as $key => $item){
                $menuItemDb = $menuSection->menuItems()->create([
                    'title'=>$item['itemTitle'],
                    'description'=>$item['itemDescription'],
                    'price'=>$item['itemPrice'],
                    'id'=>$item['id'],
                    'index'=>$key,
                ]);
                $menuItemDb->media()->create([
                    'path'=>$item['mediaPath'],
                    'extention'=>$item['mediaExtention'],
                    'alt'=>$item['mediaAlt'],
                ]);
            }
            
            
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    
    public function getMenuSectionsForPage( int $pageId) : Collection
    {
        try {
         return  MenuSection::where('page_id',$pageId)->orderBy('index')->get();
       
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function menuSectionsExists( int $pageId) : ?MenuSection
    {
        try {

            return   MenuSection::where('page_id',$pageId)->first();
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function delete( string $sectionId) : void
    {
        try {
            $section = MenuSection::find($sectionId); 
            $section->delete();
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function sectionExists( string $sectionId) : ?MenuSection
    {
        try {

            return   MenuSection::find($sectionId);
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getMenuSection( string $sectionId) : MenuSection
    {
        try {

            $section =   MenuSection::find($sectionId);
            $section['items']= $this->getItems($section);
            foreach( $section['items'] as $item ){
                $item['media'] = $this->getItemMedia($item);
            }

            return $section;
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getItems( object $section)  
    {
        try {

            return MenuSectionItem::where('menu_section_id',$section->id)->orderBy('index')->get();
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getItemMedia( object $item) 
    {
        try {
            return $item->media;
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function menuItemExists( string $itemId) : ?MenuSectionItem
    {
        try {
         return  MenuSectionItem::where('id',$itemId)->first();
       
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getMenuItem( string $itemId) : ?MenuSectionItem
    {
        try {
        $item =  MenuSectionItem::where('id',$itemId)->first();
       $item['media']= $item->media;
       return $item;
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function updateMenuItemWithoutMedia(object $model, $newItem ) : void
    {
        try {
            $menuSectionItem = MenuSectionItem::find( $model->id);
            $menuSectionItem->update(
                [
                    'title'=>$newItem['itemTitle'],
                    'description'=>$newItem['itemDescription'],
                    'price'=>$newItem['itemPrice'],
                   
            
                ]);
               
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
}