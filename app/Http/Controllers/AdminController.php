<?php

namespace App\Http\Controllers;
use App\Models\Page;
use App\Models\User;
use App\Http\Requests\PageRequest;
use App\Http\Requests\StoreContactInfoRequest;
use App\Services\PageService;
use App\Services\HeroService;
use App\Services\ContactService;
use App\Services\AboutUsService;
use App\Services\MenuSectionService;
use App\Services\MenuNoImgsSectionService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class AdminController extends Controller
{
    public function __construct(PageService $pageService, HeroService $heroService, ContactService $contactService,AboutUsService $aboutUsService,MenuSectionService $menuSectionService, MenuNoImgsSectionService $menuNoImgsSectionService)
    {
        $this->pageService = $pageService;
        $this->heroService = $heroService;
        $this->contactService = $contactService;
        $this->aboutUsService = $aboutUsService;
        $this->menuSectionService = $menuSectionService;
        $this->menuNoImgsSectionService = $menuNoImgsSectionService;
       
    }
    public function index(){
        $pages = $this->pageService->adminGetPages();

        return Inertia::render('Admin/Index',[
            'pages'=>$pages,
        ]);

    }

    public function pageDashboard( $userId )
    {
        $pageExists = $this->pageService->pageExists($userId);

        if ( $pageExists ){

            $message = session('message');
            $page = $this->pageService->getUsersPage($userId );

            $heroExists = $this->heroService->heroExists($page->id);
            if ( $heroExists){
                $hero = $this->heroService->getHeroForPage($page->id);
                $page['hero'] =$hero;
            }else{
                $page['hero']=null;
            }

            $contatExists = $this->contactService->contactExists($page->id);
            if ($contatExists){

                $contactInfo = $this->contactService->getContactForPage($page->id);
                $page['contactInfo'] = $contactInfo;
                // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                // unset($page['contactInfo']['menu_position']);
                // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                // unset($page['contactInfo']['online_orders']);
                
            }else{
                $page['contactInfo'] = null;

            }

            $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
            if($aboutUsExists){
                $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                $page['aboutUs'] = $aboutUs;
                // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                // unset($page['aboutUs']['text_aligment']);
                
                
                
            }else{
                $page['aboutUs'] = null;

            }
                
            $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
            if ( $menusectionsExists ){
                $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                $page['menuSections']=$menuSections;
            }else{
                $page['menuSections'] = null;

            } 
            $noImgsSectionsExists = $this->menuNoImgsSectionService->menuSectionsExists($page->id); 
                if ( $noImgsSectionsExists ){
                    $noImgsSectionsExists = $this->menuNoImgsSectionService->getMenuSectionsForPage($page->id);
                    $page['noImgsMenuSections']=$noImgsSectionsExists;
                }else{
                    $page['noImgsMenuSections'] = null;
    
                } 
                return Inertia::render('WebPage/Index',[
                    'page'=>$page,
                    'message'=>$message,
                ]);
            
        }else{
            $user = User::find($userId);
            return Inertia::render('Admin/Page/Wellcome',[
                'user'=>$user,
            ]
        
        );  
        }
    }
    public function adminPageShow($pageId)
    {
        $user =Auth::user();

        if ( $user->is_admin ){

            $pageExists = $this->pageService->pageExistsWithId($pageId);

            if ( $pageExists ){
                $page = $this->pageService->getPage($pageExists->id);
                    $heroExists = $this->heroService->heroExists($page->id);
                    if ( $heroExists){
                        $hero = $this->heroService->getHeroForPage($page->id);
                        $page['hero'] =$hero;
                    }else{
                        $page['hero']=null;
                    }
        
                    $contatExists = $this->contactService->contactExists($page->id);
                    if ($contatExists){
        
                        $contactInfo = $this->contactService->getContactForPage($page->id);
                        $page['contactInfo'] = $contactInfo;
                        // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                        // unset($page['contactInfo']['menu_position']);
                        // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                        // unset($page['contactInfo']['online_orders']);
                        
                    }else{
                        $page['contactInfo'] = null;
        
                    }
        
                    $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
                    if($aboutUsExists){
                        $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                        $page['aboutUs'] = $aboutUs;
                        // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                        // unset($page['aboutUs']['text_aligment']);
                        
                        
                        
                    }else{
                        $page['aboutUs'] = null;
        
                    }
                        
                    $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
                    if ( $menusectionsExists ){
                        $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                        $page['menuSections']=$menuSections;
                    }else{
                        $page['menuSections'] = null;
        
                    } 
                    $noImgsSectionsExists = $this->menuNoImgsSectionService->menuSectionsExists($page->id); 
                    if ( $noImgsSectionsExists ){
                        $menuSections = $this->menuNoImgsSectionService->getMenuSectionsForPage($page->id);
                        $page['noImgsMenuSections']=$menuSections;
                    }else{
                        $page['noImgsMenuSections'] = null;
        
                    } 
                    
                        return Inertia::render('PublicUserWebPage/Index',[
                            'page'=>$page,
                        ]);
                    
            }

            
        }

    }
    public function adminPage($pageId)
    {
        $user =Auth::user();

        if ( $user->is_admin ){

            $pageExists = $this->pageService->pageExistsWithId($pageId);

            if ( $pageExists ){
                $page = $this->pageService->getPage($pageExists->id);
                    $heroExists = $this->heroService->heroExists($page->id);
                    if ( $heroExists){
                        $hero = $this->heroService->getHeroForPage($page->id);
                        $page['hero'] =$hero;
                    }else{
                        $page['hero']=null;
                    }
        
                    $contatExists = $this->contactService->contactExists($page->id);
                    if ($contatExists){
        
                        $contactInfo = $this->contactService->getContactForPage($page->id);
                        $page['contactInfo'] = $contactInfo;
                        // $page['contactInfo']['menuPosition'] = $page['contactInfo']['menu_position'];
                        // unset($page['contactInfo']['menu_position']);
                        // $page['contactInfo']['onlineOrders'] = $page['contactInfo']['online_orders'];
                        // unset($page['contactInfo']['online_orders']);
                        
                    }else{
                        $page['contactInfo'] = null;
        
                    }
        
                    $aboutUsExists = $this->aboutUsService->aboutUsExists($page->id);
                    if($aboutUsExists){
                        $aboutUs = $this->aboutUsService->getAboutUsForPage($page->id);
                        $page['aboutUs'] = $aboutUs;
                        // $page['aboutUs']['textAligment'] = $page['aboutUs']['text_aligment'];
                        // unset($page['aboutUs']['text_aligment']);
                        
                        
                        
                    }else{
                        $page['aboutUs'] = null;
        
                    }
                        
                    $menusectionsExists = $this->menuSectionService->menuSectionsExists($page->id);    
                    if ( $menusectionsExists ){
                        $menuSections = $this->menuSectionService->getMenuSectionsForPage($page->id);
                        $page['menuSections']=$menuSections;
                    }else{
                        $page['menuSections'] = null;
        
                    } 
                    $noImgsSectionsExists = $this->menuNoImgsSectionService->menuSectionsExists($page->id); 
                    if ( $noImgsSectionsExists ){
                        $menuSections = $this->menuNoImgsSectionService->getMenuSectionsForPage($page->id);
                        $page['noImgsMenuSections']=$menuSections;
                    }else{
                        $page['noImgsMenuSections'] = null;
        
                    } 
                    
                        return Inertia::render('WebPage/Index',[
                            'page'=>$page,
                        ]);
                    
            }

            
        }

    }
    public function userCreate()
    {
        return Inertia::render('Admin/Auth/Register');
    }
    public function userStore(Request $request )
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ],[
            'name.required' => 'Name field is required.',
            'name.string' => 'Name field must be a word.',
            'name.required' => 'Name field must contain max  255 characters.',
            'email.required' => 'Email field is required.',
            'email.string' => 'Email field must be a word.',
            'email.email' => 'Email field must bu in form of email.',
            'email.max' => 'Email field must contain max  255 characters.',
            'email.unique' => 'Email already exists.',
            'password.required' => 'Password field is required.',


            

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return Redirect::route('admin.page.dashboard',$user->id);



    }
    public function adminPageInitialStore(PageRequest $request)
    {
        $validated = $request->validated();
        
        $this->pageService->initialCreate($validated);

        return Redirect::route('admin.dashboard');
    }

}
