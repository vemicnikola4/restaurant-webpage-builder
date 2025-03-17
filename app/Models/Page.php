<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'title',
        'font_family',
        'theme',
        'city',
        'tags',
        'user_id',
        'publish',
    ];
    public function hero()
    {
        return $this->hasOne(Hero::class);
    }
    public function aboutUs()
    {
        return $this->hasOne(AboutUs::class);
    }
    public function contactInfo()
    {
        return $this->hasOne(ContactInfo::class);
    }
    public function menuSections()
    {
        return $this->hasMany(MenuSection::class);
    }
    public function noImgsMenuSections()
    {
        return $this->hasMany(NoImgsMenuSection::class);
    }
}
