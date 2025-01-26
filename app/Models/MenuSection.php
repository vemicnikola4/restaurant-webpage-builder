<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuSection extends Model
{
    protected $table = 'menu_sections';
    public $incrementing = false;  // Disable auto-incrementing for UUID or string primary key
    protected $keyType = 'string';
    
    protected $fillable = [
        'title',
        'index',
        'page_id',
        'id',
       
    ];
    public function menuItems()
    {
        return $this->hasMany(MenuSectionItem::class,'menu_section_id');
    }

}
