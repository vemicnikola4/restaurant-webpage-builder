<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AboutUsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if($this->media){
            return [
                'id' => $this->id,
                'title' => $this->title,
                'description' => $this->description,
                'textAligment' => $this->text_aligment,
                'pageId'=>$this->page_id,   
                'imagePath'=> asset('storage/'.$this->media->path),
                'hasImage'=>true,

            ];
        }else{
            return [
                'id' => $this->id,
                'title' => $this->title,
                'description' => $this->description,
                'textAligment' => $this->text_aligment,
                'pageId'=>$this->page_id,   
                'imagePath'=>null,
                'hasImage'=>false,

            ];
        }
        
    }
}
