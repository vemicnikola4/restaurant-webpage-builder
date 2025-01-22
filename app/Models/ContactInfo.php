<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInfo extends Model
{
    protected $fillable = [
        'website',
        'online_orders',
        'instagram',
        'facebook',
        'phone',
        'menu_position',
        'page_id',
        
    ];
}
