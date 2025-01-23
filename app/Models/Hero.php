<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'text_box_position',
        'page_id'
        
    ];
    public function media()
    {
        return $this->hasOne(HeroMedia::class);
    }
}
