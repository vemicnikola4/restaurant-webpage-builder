<?php
namespace App\Repositories;
use App\Models\Hero;

class HeroRepository
{

    public function __construct(
        protected Hero $model
    ){}
    public function create( array $data) : Hero
    {
        try {
        return Hero::create([
            'title'=>$data['title'],
            'subtitle'=>$data['subTitle'],
            'text_box_position'=>$data['textBoxPosition'],
            'media_id'=>$data['media_id'],
            'page_id'=>$data['page_id'],
        ]);
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function update( array $data) : Hero
    {
        try {
           Hero::where('id',  $data['id'])->update(
                [ 
                'title'=>$data['title'],
                'subtitle'=>$data['subTitle'],
                'text_box_position'=>$data['textBoxPosition']]);
      
                return Hero::where('id', $data['id'])->first();
            
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
        return Hero::where('page_id',$pageId)->first();
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }

}
