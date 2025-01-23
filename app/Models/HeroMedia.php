<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroMedia extends Model
{
    protected $table = 'hero_media';
    protected $fillable = [
        'path',
        'alt',
        'extention',
        
    ];
    public function hero()
    {
        return $this->belongsTo(Hero::class);
    }
}
