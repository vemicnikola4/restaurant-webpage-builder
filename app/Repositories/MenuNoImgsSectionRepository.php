<?php
namespace App\Repositories;

use App\Models\NoImgsMenuSection;
use App\Models\NoImgsMenuSectionItem;
use Illuminate\Support\Collection;


class MenuNoImgsSectionRepository 
{

    public function __construct(
        protected NoImgsMenuSection $model
    ){}

    public function create( array $data, int $index) : string
    {
        try {
            $menuSection = NoImgsMenuSection::create([
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
                
            }
            return 'Successfully created';
            
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    
    public function getMenuSectionsForPage( int $pageId) : Collection
    {
        try {
         return  NoImgsMenuSection::where('page_id',$pageId)->orderBy('index')->get();
       
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function menuSectionsExists( int $pageId) : ?NoImgsMenuSection
    {
        try {

            return   NoImgsMenuSection::where('page_id',$pageId)->first();
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function delete( string $sectionId) : void
    {
        try {
            $section = NoImgsMenuSection::find($sectionId); 
            $section->delete();
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function deleteMenu( int $pageId) : string
    {
        try {
            NoImgsMenuSection::where('page_id', $pageId)->delete(); 
            return 'Successfully deleted';
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function sectionExists( string $sectionId) : ?NoImgsMenuSection
    {
        try {

            return   NoImgsMenuSection::find($sectionId);
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getMenuSection( string $sectionId) : NoImgsMenuSection
    {
        try {

            $section =   NoImgsMenuSection::find($sectionId);
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

            return NoImgsMenuSectionItem::where('menu_section_id',$section->id)->orderBy('index')->get();
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    
    public function menuItemExists( string $itemId) : ?MenuSectionItem
    {
        try {
         return  NoImgsMenuSectionItem::where('id',$itemId)->first();
       
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getMenuItem( string $itemId) : ?MenuSectionItem
    {
        try {
        $item =  NoImgsMenuSectionItem::where('id',$itemId)->first();
       return $item;
       
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    
}