<?php
namespace App\Repositories;
use App\Models\Hero;
use App\Models\HeroMedia;

class HeroRepository
{

    public function __construct(
        protected Hero $model
    ){}
    public function create( array $data) : void
    {
        
        try {
            $hero = Hero::create([
            'title'=>$data['title'],
            'subtitle'=>$data['subTitle'],
            'text_box_position'=>$data['textBoxPosition'],
            'page_id'=>$data['pageId'],
            ]);
            $hero->media()->create([
                'path'=>$data['media']['image_path'],
                'extention'=>$data['media']['extention'],
                'alt'=>$data['media']['alt'],
            ]);
            
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function update( object $model,array $newHero) : void
    {
        try {
            $hero = Hero::find($model->id);
                $hero->update(
                [
                    'title'=>$newHero['title'],
                    'subtitle'=>$newHero['subTitle'],
                    'text_box_position'=>$newHero['textBoxPosition'],
                    'page_id'=>$newHero['pageId'],
                ]);
                // HeroMedia::create([
                //     'path'=>$newHero['media']['image_path'],
                //     'extention'=>$newHero['media']['extention'],
                //     'alt'=>$newHero['media']['alt'],
                //     'hero_id'=>$model->id,
                // ]);
                $hero->media()->create([
                'path'=>$newHero['media']['image_path'],
                'extention'=>$newHero['media']['extention'],
                'alt'=>$newHero['media']['alt'],
                ]);
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function updateWithoutMedia( object $model,array $newHero) : void
    {
        try {

            $model->update(
                [
                    'title'=>$newHero['title'],
                    'subtitle'=>$newHero['subTitle'],
                    'text_box_position'=>$newHero['textBoxPosition'],
                    'page_id'=>$newHero['pageId'],
                ]);
                
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function heroExists( int $pageId) : ?Hero
    {
        try {
        return Hero::where('page_id',$pageId)->first();
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function getHeroForPage( int $pageId) : ?Hero
    {
        try {
            
            $hero = Hero::where('page_id',$pageId)->first();
            $hero['media'] = $hero->media;
            return $hero;
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function get( int $id) : Hero
    {
        try {
            $hero = Hero::find($id);
            $hero['media']= $hero->media;
            return $hero;
           
                
                
            } catch (\Exception $e) {
                // Handle any other exceptions
                throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
            } 

    }
    public function deleteImage(object $model) : void
    {
        try {
            $model->media->delete();
           
                
                
            } catch (\Exception $e) {
                // Handle any other exceptions
                throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
            } 
    }

}
