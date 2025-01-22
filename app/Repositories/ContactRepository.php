<?php
namespace App\Repositories;
use App\Models\ContactInfo;

class ContactRepository
{

    public function __construct(
        protected ContactInfo $model
    ){}
    public function create( array $data) : void
    {
        try {

        ContactInfo::create([
            'website'=>$data['website'],
            'instagram'=>$data['instagram'],
            'facebook'=>$data['facebook'],
            'online_orders'=>$data['onlineOrders'],
            'phone'=>$data['phone'],
            'menu_position'=>$data['menuPosition'],
            'page_id'=>$data['pageId'],
        ]);
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function update( array $data) : void
    {
        try {
            ContactInfo::where('page_id',  $data['pageId'])->update(
            [
                'website'=>$data['website'],
            'instagram'=>$data['instagram'],
            'facebook'=>$data['facebook'],
            'online_orders'=>$data['onlineOrders'],
            'phone'=>$data['phone'],
            'menu_position'=>$data['menuPosition'],
            'page_id'=>$data['pageId'],
            ]);
      
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    public function contactExists( int $pageId) : ?ContactInfo
    {
        try {

            return ContactInfo::where('page_id',$pageId)->first();
       
            
            
        } catch (\Exception $e) {
            // Handle any other exceptions
            throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
        } 

    }
    // public function getOne(int $id) : Media 
    // {
        
    //     try {
    //         return Media::find($id);
            
    //     } catch (\Exception $e) {
    //         // Handle any other exceptions
    //         throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
    //     } 
    // }
    // public function deleteOne(int $id) : void 
    // {
        
    //     try {
    //         Media::destroy($id);

            
    //     } catch (\Exception $e) {
    //         // Handle any other exceptions
    //         throw new \Exception('An unexpected error occurred: ' . $e->getMessage());
    //     } 
    // }

}




