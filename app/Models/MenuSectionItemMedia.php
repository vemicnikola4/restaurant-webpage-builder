<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuSectionItemMedia extends Model
{
    protected $table = 'menu_section_item_media';
    protected $fillable = [
        'path',
        'alt',
        'extention',
        
    ];
    public function menuItem()
    {
        return $this->belongsTo(MenuSectionItem::class);
    }
}