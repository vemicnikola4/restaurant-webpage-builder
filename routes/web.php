<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\MenuSectionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;



// Route::get('/', function () {
//     // return redirect()->route('login'); 
//     return Inertia::render('PublicWebPage/Index');
//     //  [
//     //     'canLogin' => Route::has('login'),
//     //     'canRegister' => Route::has('register'),
//     //     'laravelVersion' => Application::VERSION,
//     //     'phpVersion' => PHP_VERSION,
//     // ]);
// });
Route::get('/',[LandingPageController::class,'index']);
Route::get('/restaurants', [LandingPageController::class, 'getRestaurants'])->name('getRestaurants');
Route::get('/page/{id}',[PageController::class,'show'])->name('page');

Route::post('/setLocale',function(Request $request){
    App::setlocale($request['locale']);
    
});

Route::get('/dashboard', [PageController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/page', function(){
        return Inertia::render('WebPage/Index');
    });
    Route::get('/page',[PageController::class,'index'])->name('page.index');

    Route::post('/pageInitial',[PageController::class,'initialStore'])->name('page.initialStore');
    Route::post('/page',[PageController::class,'store'])->name('page.store');
    Route::get('/page/show/{id}',[PageController::class,'userShow'])->name('page.show');
    Route::post('/postPage',[PageController::class,'postPage'])->name('post.page');

    Route::post('/hero',[HeroController::class,'store'])->name('hero.store');
    Route::post('/contactInfo',[ContactInfoController::class,'store'])->name('contactInfo.store');
    Route::post('/aboutUs',[AboutUsController::class,'store'])->name('aboutUs.store');
    Route::post('/menu',[MenuSectionController::class,'store'])->name('menu.store');
});

require __DIR__.'/auth.php';
