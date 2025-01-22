<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsMedia extends Model
{
    protected $table = 'about_us_media';
    protected $fillable = [
        'path',
        'alt',
        'extention',
        
    ];
    public function aboutUs()
    {
        return $this->belongsTo(AboutUs::class);
    }
}
