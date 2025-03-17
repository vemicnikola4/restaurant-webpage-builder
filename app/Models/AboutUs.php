<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    protected $fillable = [
        'title',
        'description',
        'text_aligment',
        'media_id',
        'page_id',
        
    ];
    public function media()
    {
        return $this->hasOne(AboutUsMedia::class);
    }
    public function page()
    {
        return $this->belongsTo(Page::class);
    }

}
