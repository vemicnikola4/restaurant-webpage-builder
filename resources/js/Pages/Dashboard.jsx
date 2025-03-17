import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { router,usePage } from '@inertiajs/react'

import Tag from '@/Components/Tag';
export default function Dashboard() {
    const user = usePage().props.auth.user;
    const errors = usePage().props.errors;

    const[locale,setLocale]=useState('sr');
    const translate = {
        "Profile":"Profil",
        "Logout":"Izlogujte se",
        "Dashboard" : "Komandna tabla",
        "Create Your Web Page":"Kreirajte Vašu Stranicu",
        "You logged in!":"Ulogovani ste!",
        "CREATE":"ZAPOČNI",
        "Dashboard":"Komandna Tabla",
        "Type Restaurant Title":"Unesite naziv svog Restorana",
        "Choose city":"Odaberite opštinu",
        "Restaurant title":"Naziv restorana",
        'Food truck':"Kombi restoran",
        'Pub': "Pab",
        'Bakery':"Pekara",
        'Pizza':"Pica",
        'Deli':"Deli",
        'Fine Dining':"Luksizni",
        'Buffet':"Švecki sto",
        'Bar':"Bar",
        'Bar and Brewery':"Bar i proizvodjna",
        'Fast food':"Brza hrana",
        'Cafeteria':"Kafeterija",
        'BBQ':"Roštilj",
        'Giros':"Giros",
        'Breakfast':"Doručak",
        'Lunch':"Ručak",'Dinner':"Večera", 'Dine in':"Sedenje", 
        'Drive through':"Auto-restoran",'Drinks':"Piće",'Kebab':"Kebab",'Indian':"Indijski",'Fish':"Riba",'Pasta':"Pasta",'Italian':"Intalijanski",'International':"Internacionalni",'Mexican':"Meksički",'Tai':"Tajlandski",'Chinese':"Kineski",'Japanese':"Japanski",'French':"Francuski",'French Fries':"Pomfrit",'Burgers':"Burgeri",'Chicken':"Piletina",'Traditional cousine':"Tradicionalni",'Snack Bar':"Snek bar","Burek":'Burek','Crepes':'Palačinke','Deserts':'Dezerti','Mediteranian':'Mediteranska','Salads':'Salate','Seafood':'Morski plodovi','Vegan':'Veganski','Sandwiches':'Sendviči','Vegetarian':'Vegetarijanski',"The selected tags is invalid.":'Izabrani tagovi nisu dozvoljeni',
    }
    const cities= ["Ada", "Aleksandrovac", "Aleksinac", "Alibunar", "Apatin", "Aranđelovac", "Arilje", "Babušnica", "Bajina Bašta", "Barajevo", 
"Batočina", "Bač", "Bačka Palanka", "Bačka Topola", "Bački Petrovac", "Bela Palanka", "Bela Crkva", "Beočin", "Bečej", 
"Blace", "Bogatić", "Bojnik", "Boljevac", "Bor", "Bosilegrad", "Brus", "Bujanovac", "Valjevo", "Varvarin", 
"Velika Plana", "Veliko Gradište", "Vitina", "Vladimirci", "Vladičin Han", "Vlasotince", "Voždovac", "Vranje", "Vračar", 
"Vrbas", "Vrnjačka Banja", "Vršac", "Vučitrn", "Gadžin Han", "Glogovac", "Gnjilane", "Golubac", "Gora", 
"Gornji Milanovac", "Grocka", "Despotovac", "Dečani", "Dimitrovgrad", "Doljevac", "Đakovica", "Žabalj", "Žabari", 
"Žagubica", "Žitište", "Žitorađa", "Zaječar", "Zvezdara", "Zvečan", "Zemun", "Zrenjanin", "Zubin Potok", 
"Ivanjica", "Inđija", "Irig", "Istok", "Jagodina", "Kanjiža", "Kačanik", "Kikinda", "Kladovo", "Klina", 
"Knić", "Knjaževac", "Kovačica", "Kovin", "Kosjerić", "Kosovo Polje", "Kosovska Kamenica", "Kosovska Mitrovica", "Koceljeva", 
"Kragujevac", "Kraljevo", "Krupanj", "Kruševac", "Kula", "Kuršumlija", "Kučevo", "Lazarevac", "Lajkovac", 
"Lapovo", "Lebane", "Leposavić", "Leskovac", "Lipljan", "Loznica", "Lučani", "Ljig", "Ljubovija", "Majdanpek", 
"Majdanpek", "Mali Zvornik", "Mali Iđoš", "Malo Crniće", "Medveđa", "Mediana", "Merošina", "Mionica", "Mladenovac", 
"Negotin", "Niška Banja", "Nova Varoš", "Nova Crnja", "Novi Beograd", "Novi Bečej", "Novi Kneževac", "Novi Pazar", "Novi Sad", 
"Novo Brdo", "Obilić", "Obrenovac", "Opovo", "Orahovac", "Osečina", "Odžaci", "Palilula", "Palilula (Niš)", 
"Pantelej", "Pančevo", "Paraćin", "Petrovaradin", "Petrovac na Mlavi", "Peć", "Pećinci", "Pirot", "Plandište", 
"Podujevo", "Požarevac", "Požega", "Preševo", "Priboj na Limu", "Prizren", "Prijepolje", "Priština", "Prokuplje", 
"Ražanj", "Rakovica", "Rača", "Raška", "Rekovac", "Ruma", "Savski venac", "Svilajnac", "Svrljig", "Senta", 
"Sečanj", "Sjenica", "Smederevo", "Smederevska Palanka", "Sokobanja", "Sombor", "Sopot", "Srbica", "Srbobran", 
"Sremska Mitrovica", "Sremski Karlovci", "Stara Pazova", "Stari grad", "Stragari", "Subotica", "Suva Reka", "Surdulica", 
"Surčin", "Temerin", "Titel", "Topola", "Trgovište", "Trstenik", "Tutin", "Ćićevac", "Ćuprija", "Ub", 
"Užice", "Uroševac", "Crveni krst", "Crna Trava", "Čajetina", "Čačak", "Čoka", "Čukarica", "Šabac", 
"Šid", "Štimlje", "Štrpce"
    ];
    const tagsEn = [
        'Sandwiches','Food truck', 'Pub', 'Bakery', 'Pizza', 'Deli', 'Fine Dining', 'Buffet', 'Bar', 'Bar and Brewery', 'Fast food', 'Cafeteria', 'BBQ', 'Giros', 'Breakfast', 'Lunch', 'Dinner', 'Dine in', 'Drive through', 'Drinks', 'Kebab', 'Indian', 'Fish', 'Pasta', 'Italian', 'International', 'Mexican', 'Tai', 'Chinese', 'Japanese', 'French', 'French Fries', 'Burgers', 'Chicken', 'Traditional cousine', 'Snack Bar', 'Burek', 'Mediteranian', 'Seafood', 'Crepes', 'Salads', 'Deserts', 'Vegan', 'Vegetarian'
    ];
    const tagsSr = [
        'Sendviči','Kombi restoran', 'Pab', 'Pekara', 'Pica', 'Fine Dining', 'Švedski sto', 'Bar', 'Bar  i proizvodnja pića', 'Brza hrana', 'Kafeterija', 'Roštilj', 'Giros', 'Doručak', 'Ručak', 'Večera', 'Sedenje', 'Auto-restoran', 'Piće', 'Kebab', 'Indijski', 'Riba', 'Pasta', 'Italijanski', 'Internacionalni', 'Meksički', 'Tajlandski', 'Kineski', 'Japanski', 'Francuski', 'Pomfrit', 'Burgeri', 'Piletina', 'Tradicionalna kuhinja', 'Burek', 'Mediteranska', 'Morski plodovi', 'Palačinke', 'Salate', 'Deserti', 'Veganska', 'Vegetarijanska',
    ];
    const [values,setValues]=useState({
        title:'',
        city:'Ada',
        theme:'dark',
        font_family:'font-sans',
        tags:[],
        user_id:user.id,

    })
    tagsEn.sort();
    tagsSr.sort();

    const[selectedTags,setSelectedTags]=useState([]);
    
    
    const addTag = (value)=>{
        
        setSelectedTags([...selectedTags,value]);
        
    }
    const removeTag = (value)=>{
       
        setSelectedTags((prevTags)=>{
            return prevTags.filter((element)=>element !== value);
        });
    }
    const onTagClicked = (value)=>{
        let s = selectedTags;
        if (s.includes(value)){
            removeTag(value);
        }else{
            addTag(value);
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if ( values.title && values.city && values.tags.selectedTags ){
            router.post('/pageInitial', values);

        }else{
            router.post('/pageInitial', values);

        }
    }
    useEffect(()=>{
        setValues({...values,tags:selectedTags});
    },[selectedTags]);

    
   
    return (
        
        <AuthenticatedLayout
            header={
                <div className='flex '>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {locale == 'en' ? 'Dashboard' : translate['Dashboard']}
                    
                    </h2>
                    
                </div>
                

            }
            locale={locale}
            translate={translate}
            setLocale={setLocale}
        >
            
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <h1>{locale == 'en' ? 'You logged in!' : translate['You logged in!']}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex text-gray-700 justify-center items-center h-fit px-6">
                <div className=" py-8 w-full md:w-2/3 shadow-lg bg-white rounded-md w-2/4  flex flex-col justify-center items-center  px-2 md:px-4">
                    <div className="py-4">
                        <h1 className="text-xl md:text-4xl  text-center">
                        {locale == 'en' ? 'Create Your Web Page' : translate['Create Your Web Page']}
                        
                         
                        </h1>
                    </div>
                    
                    <form className="flex flex-col w-full gap-2 items-center" action="" onSubmit={e=>handleSubmit(e)}>
                        <div className="py-4 w-full flex flex-col gap-4">
                            <label htmlFor="vity" className='text-md md:text-xl'>{locale == 'en' ? 'Restaurant title' : translate['Restaurant title']}</label>
                            <input type="text" name="" id="" className="p-4 text-gray-700  text-center focus:outline-none text-lg md:text-4xl focus:border-gray-500 focus:ring-1 focus:ring-gray-700 rounded-md focus:rounded-md w-full" placeholder={locale == 'en' ? 'Type Restaurant Title' : translate['Type Restaurant Title']} onChange={e=>setValues({...values,title:e.target.value})}/>
                        </div>
                        {
                        errors['title'] &&
                        <div className="text-red-500 ps-2 py-4">{
                            locale == 'en' ? errors['title'] : translate[errors['title']]
                        }</div>
                        }
                        <div className=" w-full flex flex-col gap-4">
                            <label className='text-md md:text-xl' htmlFor="vity">{locale == 'en' ? 'Choose city' : translate['Choose city']}</label>
                            <select className="rounded-md w-full" name="city" id="" onChange={e=>setValues({...values,city:e.target.value})}>
                                {cities.map((city,ind)=>(
                                    <option key={ind} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        {
                        errors['city'] &&
                        <div className="text-red-500 ps-2 py-4">{
                            locale == 'en' ? errors['city'] : translate[errors['city']]
                        }</div>
                        }
                        
                        <div className="py-4 grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2 w-full">
                        {locale == 'en' ? 
                          tagsEn.map((restaurant,ind)=>(<Tag key={ind} value={restaurant} title={restaurant} onTagClicked={onTagClicked}/>))
                        : 
                         tagsEn.map((restaurant,ind)=>(<Tag key={ind} value={restaurant} title={translate[restaurant]} onTagClicked={onTagClicked}/>))
                        }
                       
                        </div>
                        {
                        errors['tags'] &&
                        <div className="text-red-500 ps-2 py-4">{
                            locale == 'en' ? errors['tags'] : translate[errors['tags']]
                        }</div>
                    }
                        <div className="py-4 px-2 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e=>handleSubmit(e)}>
                            
                        {locale == 'en' ? 'CREATE' : translate['CREATE']}
                        </div>
                       
                    </form>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
