<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\LocationService;

class LocationController extends Controller
{
    public function __construct(LocationService $locationService)
    {
        $this->locationService = $locationService;
       
    }
    public function store(Request $request)
    {
        $this->locationService->create($request);       
        
    }
}
