<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\NoImgsMenuSectionController;
use App\Http\Controllers\MenuSectionController;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;



Route::middleware(['auth',AdminMiddleware::class])->group(function () {
        
    Route::prefix('admin')->name('admin.')->group(function () {

   
        Route::get('/dashboard',[AdminController::class,'index'])->name('dashboard');
        Route::get('/page/dashboard/{userId}',[AdminController::class,'pageDashboard'])->name('page.dashboard');
        Route::post('/page/store',[AdminController::class,'adminPageInitialStore'])->name('page.store');
        Route::get('/page/show/{id}',[AdminController::class,'adminPageShow'])->name('pageShow.dashboard');
        Route::get('/page/{id}',[AdminController::class,'adminPage'])->name('pageShow');
        Route::get('/user/create',[AdminController::class,'userCreate'])->name('user.create');
        Route::post('/user/store',[AdminController::class,'userStore'])->name('user.store');

        Route::post('/hero',[AdminController::class,'adminStoreHero'])->name('hero.store');
        Route::post('/aboutUs',[AdminController::class,'adminStoreAboutUs'])->name('aboutUs.store');
      
        Route::post('/menu',[AdminController::class,'adminStoreMenu'])->name('menu.store');
        Route::delete('/menu/{id}', [AdminController::class, 'adminDestroyMenu'])->name('menu.delete');
        
        Route::post('/menuNoImgs',[AdminController::class,'adminStoreMenuNoImgs'])->name('menuNoImgs.store');
        Route::delete('/menuNoImgs/{id}', [AdminController::class, 'adminDestroyMenuNoImgs'])->name('menuNoImgs.delete');
        
    });
});
Route::get('/',[LandingPageController::class,'index']);
Route::get('/restaurants', [LandingPageController::class, 'getRestaurants'])->name('getRestaurants');
Route::get('/page/{id}',[PageController::class,'show'])->name('page');

// Route::post('/setLocale',function(Request $request){
//     App::setlocale($request['locale']);
    
// });

Route::get('/dashboard', [PageController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
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
    Route::post('/postPage/{id}',[PageController::class,'postPage'])->name('page.post');
    Route::post('/updateMenuPosition',[PageController::class,'updateMenuPosition'])->name('post.updateMenuPosition');

    Route::post('/hero',[HeroController::class,'store'])->name('hero.store');
    Route::post('/contactInfo',[ContactInfoController::class,'store'])->name('contactInfo.store');
    Route::post('/aboutUs',[AboutUsController::class,'store'])->name('aboutUs.store');
    Route::post('/menu',[MenuSectionController::class,'store'])->name('menu.store');
    Route::post('/menuNoImgs',[NoImgsMenuSectionController::class,'store'])->name('menuNoImgs.store');
    Route::delete('/menu/{id}', [MenuSectionController::class, 'destroy'])->name('menu.delete');
    Route::delete('/menuNoImgs/{id}', [NoImgsMenuSectionController::class, 'destroy'])->name('menuNoImgs.delete');
});

require __DIR__.'/auth.php';
