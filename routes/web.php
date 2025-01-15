<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\HeroController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;



Route::get('/', function () {
    return redirect()->route('login'); 
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::post('/setLocale',function(Request $request){
    App::setlocale($request['locale']);
    
});
// function () {
//         return Inertia::render('Dashboard',[
//         'locale'=>App::getLocale(),
//     ]);   
// }
Route::get('/dashboard', [PageController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/page', function(){
        return Inertia::render('WebPage/Index');
    });
    Route::get('/page',[PageController::class,'index'])->name('page.index');

    Route::post('/page',[PageController::class,'store'])->name('page.store');
    Route::post('/hero',[HeroController::class,'store'])->name('hero.store');
});

require __DIR__.'/auth.php';
