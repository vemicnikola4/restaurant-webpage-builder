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
}
