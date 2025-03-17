<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NoImgsMenuSection extends Model
{
    protected $table = 'no_imgs_menu_sections';
    public $incrementing = false;  // Disable auto-incrementing for UUID or string primary key
    protected $keyType = 'string';

    protected $fillable = [
        'title',
        'index',
        'page_id',
        'id',
        'note',
       
    ];
    public function menuItems()
    {
        return $this->hasMany(NoImgsMenuSectionItem::class,'menu_section_id');
    }
    public function page()
    {
        return $this->belongsTo(Page::class);
    }
}
