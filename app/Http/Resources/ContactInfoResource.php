<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactInfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'facebook' => $this->facebook,
            'instagram' => $this->instagram,
            'website' => $this->website,
            'pageId'=>$this->page_id,   
            'menuPosition'=>$this->menu_position,   
            'onlineOrders'=>$this->online_orders,   
            'location'=>$this->location,   
            'phone'=>$this->phone,   

        ];
    }
}
