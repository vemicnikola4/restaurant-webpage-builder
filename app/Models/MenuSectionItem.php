<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuSectionItem extends Model
{
    protected $table = 'menu_section_items';
    public $incrementing = false;  // Disable auto-incrementing for UUID or string primary key
    protected $keyType = 'string';
    
    protected $fillable = [
        'title',
        'description',
        'price',
        'discounted',
        'discount',
        'index',
        'id',
        'menu_section_id',

       
    ];
    public function section()
    {
        return $this->belongsTo(MenuSection::class);
    }
    public function media()
    {
        return $this->hasOne(MenuSectionItemMedia::class);
    }

}
