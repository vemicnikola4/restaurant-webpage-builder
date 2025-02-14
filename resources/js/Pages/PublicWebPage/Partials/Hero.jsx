import Checkbox from "@/Components/Checkbox";
import { useState, useEffect } from "react";
import Tag from "./Tag";
const Hero = ({ translate, locale, setLocale, queryParams, onSearchRestaurantClicked }) => {
    const [title, setTitle] = useState('');
    const [mdFiltersDiv, setMdFiltersDiv] = useState('hidden');
    const [smFiltersDiv, setSmFiltersDiv] = useState('hidden');
    const [smMunicipalitiesDiv, setSmMunicipalitiesDiv] = useState('hidden');
    const [mdMunicipalitiesDiv, setMdMunicipalitiesDiv] = useState('hidden');
    const [filters, setFilters] = useState([]);
    const [filtersMunicipalities, setFiltersMunicipalities] = useState([]);

    const cities = ["Ada", "Aleksandrovac", "Aleksinac", "Alibunar", "Apatin", "Aranđelovac", "Arilje", "Babušnica", "Bajina Bašta", "Barajevo",
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
        'Food truck', 'Pub', 'Bakery', 'Pizza', 'Deli', 'Fine Dining', 'Buffet', 'Bar', 'Bar and Brewery', 'Fast food', 'Cafeteria', 'BBQ', 'Giros', 'Breakfast', 'Lunch', 'Dinner', 'Dine in', 'Drive through', 'Drinks', 'Kebab', 'Indian', 'Fish', 'Pasta', 'Italian', 'International', 'Mexican', 'Tai', 'Chinese', 'Japanese', 'French', 'French Fries', 'Burgers', 'Chicken', 'Traditional cousine', 'Snack Bar', 'Burek', 'Mediteranian', 'Seafood', 'Crepes', 'Salads', 'Deserts', 'Vegan', 'Vegetarian'
    ];
    const tagsSr = [
        'Kombi restoran', 'Pab', 'Pekara', 'Pica','Deli', 'Fine Dining', 'Švedski sto', 'Bar', 'Bar  i proizvodnja pića', 'Brza hrana', 'Kafeterija', 'Roštilj', 'Giros', 'Doručak', 'Ručak', 'Večera', 'Sedenje', 'Auto-restoran', 'Piće', 'Kebab', 'Indijski', 'Riba', 'Pasta', 'Italijanski', 'Internacionalni', 'Meksički', 'Tajlandski', 'Kineski', 'Japanski', 'Francuski', 'Pomfrit', 'Burgeri', 'Piletina', 'Tradicionalna kuhinja','Zakuska', 'Burek', 'Mediteranska', 'Morski plodovi', 'Palačinke', 'Salate', 'Deserti', 'Veganska', 'Vegetarijanska',
    ];


    const setLanguage = (value) => {
        setLocale(value);
        localStorage.setItem('locale', value);
    }
    const showFiltersMd = () => {
        if (mdFiltersDiv == 'hidden') {
            setMdFiltersDiv('absolute right-0 bottom-0 ')
        } else {
            setMdFiltersDiv('hidden');
        }
    }
    const showFiltersSm = () => {
        if (smFiltersDiv == 'hidden') {
            setSmFiltersDiv(' absolute top-14 right-0 bottom-0 h-fit ')
        } else {
            setSmFiltersDiv('hidden');
        }
    }
    const removeFilter = (value) => {
        setFilters((prevValues) => {
            return prevValues.filter((element) => element !== value);
        });
    }
    const addFilter = (value) => {
        setFilters([...filters, value]);
    }
    const onFilterClicked = (value) => {
        let s = filters;
        if (s.includes(value)) {
            removeFilter(value);
        } else {
            addFilter(value);
        }
    }
    const showMunicipalities = () => {
        if (smMunicipalitiesDiv == 'hidden') {
            setSmMunicipalitiesDiv(' absolute top-14 right-0 bottom-0 h-fit ')
        } else {
            setSmMunicipalitiesDiv('hidden');
        }
    }
    const showMdMunicipalities = () => {
        if (mdMunicipalitiesDiv == 'hidden') {
            setMdMunicipalitiesDiv('absolute top-10 left-50 ')
        } else {
            setMdMunicipalitiesDiv('hidden');
        }
    }
    const onMunicipalityClicked = (municipality) => {
        if (filtersMunicipalities.includes(municipality)) {
            removeMunicipality(municipality);
        } else {
            addMunicipality(municipality)
        }
    }
    const addMunicipality = (municipality) => {
        setFiltersMunicipalities([...filtersMunicipalities, municipality]);
    }
    const removeMunicipality = (municipality) => {
        setFiltersMunicipalities((prevValues) => {
            return prevValues.filter((element) => element !== municipality)
        })
    }

    useEffect(() => {
        queryParams['title'] = title;
    }, [title]);
    useEffect(() => {
        queryParams['filters'] = filters;
    }, [filters]);
    useEffect(() => {
        queryParams['cities'] = filtersMunicipalities;
    }, [filtersMunicipalities]);
    
    console.log(queryParams);
    return (
        <div className={" flex flex-col h-screen relative w-full justify-center "} >
            <img src='https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg' alt="" className="w-full h-full object-cover bg-center absolute bottom-0" />

            <div className="flex z-10 gap-2 bg-gray-900 items-center bg-opacity-50 absolute right-0 top-0 h-12 w-full ">
                <div className="basis-2/3 flex gap-10 text-md md:text-xl text-white font-bold justify-start ps-2">
                    <h1>
                        Mojrestoran.rs
                    </h1>
                    <div className="flex">
                        <div className={"hover:underline hover:text-blue-500 hover:cursor-pointer " + (locale == 'sr' ? ' text-red-500 ' : null)} onClick={e => setLanguage('sr')}>
                            Srpski
                        </div>
                        <span>/</span>
                        <div className={"hover:underline hover:text-blue-500 hover:cursor-pointer " + (locale == 'en' ? ' text-red-500 ' : null)} onClick={e => setLanguage('en')}>
                            English
                        </div>
                    </div>
                </div>
                <div className="basis-1/3  text-white text-md md:text-xl font-bold flex justify-center md:justify-end  md:pe-4 hover:cursor-pointer hover:text-blue-500 hover:underline" >
                <a href="/register" >
                    <div>
                        {
                            locale == 'en' ? 'Post Restaurant' : translate['Post Restaurant']
                        }

                    </div>
                    </a>
                </div>


            </div>
            {/* <div className="flex z-10 justify-center px-4 text-center md:justify-start md:ps-4 text-white font-bold mb-4 text-xl md:text-2xl shadow-sm shadow-white">
                {
                    locale =='en' ? 'This page is for restoranrts to present their business on one side and for custumers to find their fagorite place to eat on the other' : translate['heroMesage']
                }
            </div> */}
            {/* md screen */}
            <div className="z-10 mx-2 px-2 py-3 md:relative bg-gray-700 bg-opacity-50 text-white  hidden md:flex flex-col">
                <div className="flex ">
                    <div className="flex flex-col py-2 ">
                        <p className="text-md md:text-xl font-bold ">
                            {
                                locale == 'en' ? 'Search by name' : translate['Search by name']
                            }
                        </p>
                        <div className=" flex w-full gap-4 items-center  ">
                            <input type="text
                            " className="bg-gray-300 md:h-12 md:w-96 rounded-sm flex basis-2/3 ps-4 text-black " name="restaurantName" placeholder={locale=='en' ? 'Restaurant name' : 'Naziv restorana'} onChange={e=>setTitle(e.target.value)}/>
                            <div className="bg-gray-300 flex basis-2/3 h-12 text-black ps-4 border border-1 border-gray-700 rounded-sm justify-between items-center">
                                {
                                    locale == 'en' ?
                                
                                    filtersMunicipalities.length > 0 ?
                                        'Municipalities chossen'
                                        :
                                        'All municipalities'

                                :
                                
                                    filtersMunicipalities.length > 0 ?
                                        'Odabrane opštine'
                                        :
                                        'Sve opštine'

                                
                            }
                                <div className="flex justify-end w-8 h-8 pe-2 font-light " onClick={e => showMdMunicipalities()}>
                                    <img src='https://cdn-icons-png.flaticon.com/128/8567/8567254.png' alt="" />

                                </div>
                            </div>
                            <div >
                                <img src="https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg" alt="" className="w-10 h-10 md:w-10 md:h-10 rounded-sm hover:cursor-pointer" onClick={e => showFiltersMd()} />
                            </div>
                            <div className={'bg-white h-fit rounded-sm z-10 py-4 ' + mdMunicipalitiesDiv}>
                                <div className="z-10 text-gray-500 text-2xl h-fit hover:cursor-pointer flex w-full justify-start ps-6 py-2  " onClick={e => showMdMunicipalities()}>
                                    X
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-gray-900 p-2 max-h-[1000px] overflow-y-auto" >
                                    {
                                        cities.map((element,ind) => (
                                            <div key={ind} className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filtersMunicipalities.includes(element) ? "bg-red-200" : null)} onClick={e => onMunicipalityClicked(element)}>
                                                {element}
                                            </div>


                                        ))
                                    }


                                </div>
                            </div>
                            <div className={'bg-white h-fit rounded-sm z-10 ' + mdFiltersDiv}>
                                <div className="z-10 text-gray-500 text-2xl h-fit hover:cursor-pointer flex w-full justify-center " onClick={e => showFiltersMd()}>
                                    X
                                </div>
                                <div className="grid grid-cols-10 gap-2 text-gray-900 p-2 " >
                                    {locale == 'en' ?
                                        tagsEn.map((element,ind) => (
                                            <div key={ind} className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filters.includes(element) ? 'bg-red-200' : null)} onClick={e => onFilterClicked(element)}>
                                                {element}
                                            </div>


                                        ))
                                        :
                                        tagsSr.map((element,ind )=> (
                                            <div key={ind} className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filters.includes(tagsEn[ind]) ? 'bg-red-200' : null)} onClick={e => onFilterClicked(tagsEn[ind])}>
                                                {element}
                                            </div>


                                        ))
                                    }


                                </div>
                            </div>


                        </div>
                        <div className="flex basis-2/3 py-4">
                            {
                                filters.length > 0 ?
                                    <div className="basis-1/2 grid grid-cols-3 gap-2 overflow-y-auto  max-h[100px]" >
                                        {filters.map((filter) => (
                                            <div className=" bg-red-200 border border-red-300 bg-opacity-50 text-center flex items-center justify-center rounded-sm text-ellipsis overflow-hidden ... text-clip relative " >
                                                {locale == 'en' ? filter : translate[filter]}
                                                <div className=" absolute flex items-center justify-center rounded-sm text-center right-0 top-0 w-4 p-1 h-4 bg-red-500 hover:cursor-pointer hover:bg-red-600" onClick={e => removeFilter(filter)}>
                                                    x
                                                </div>
                                            </div>


                                        ))}
                                    </div>
                                    : null
                            }
                            {filtersMunicipalities.length > 0 ?
                                <div className="grid grid-cols-3 gap-2 max-h[100px] overflow-y-auto w-full px-2">
                                    {filtersMunicipalities.map((municipality) => (
                                        <div className=" bg-red-200 border border-red-300 bg-opacity-50 text-center flex items-center justify-center rounded-sm relative  " >
                                            {municipality}
                                            <div className=" absolute flex items-center justify-center rounded-sm text-center right-0 top-0 w-4 p-1 h-4 bg-red-500 hover:cursor-pointer hover:bg-red-600" onClick={e => removeMunicipality(municipality)}>
                                                    x
                                                </div>
                                        </div>
                                    ))}
                                </div>
                                :
                                null

                            }
                        </div>


                    </div>

                </div>
                <div className="flex">
                    <div className="border border-1 border-red-600 bg-red-500 bg-opacity-70 hover:bg-opacity-90 p-4 rounded-sm basis-1/2 md:basis-1-4 text-center hover:cursor-pointer" onClick={e => onSearchRestaurantClicked()}>
                    {locale == 'en' ? "Searh" : 'Pretraži'}
                    </div>
                </div>

            </div>
            {/* small screen */}
            <div className="flex flex-col gap-4 md:hidden z-10 text-white font-bold justify-center items-center px-4">
                <div className="flex w-full justify-center ">
                    <input type="text
                    " className="bg-gray-300 flex w-full rounded-sm  h-14  text-black text-2xl ps-4 " name="restaurantName" placeholder={
                            locale == 'en' ? 'Search by name' : translate['Search by name']
                        } onChange={e => (setTitle(e.target.value))} />
                    {/* <p className="text-2xl font-bold ">
                            {
                                locale == 'en' ? 'Search by name' : translate['Search by name']
                            }
                        </p>  */}
                </div>
                <div className="flex w-full jusutify-center items-center gap-6">
                    <div className="bg-gray-300 flex basis-4/5 h-14 text-black ps-4 border border-1 border-gray-700 rounded-sm justify-between items-center">

                        {
                            filtersMunicipalities.length > 0 ?
                                'Municipalities chossen'
                                :
                                ' All municipalities'

                        }

                        <div className="flex justify-end w-8 h-8 pe-2 font-light " onClick={e => showMunicipalities()}>
                            <img src='https://cdn-icons-png.flaticon.com/128/8567/8567254.png' alt="" />

                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <img src="https://t3.ftcdn.net/jpg/03/20/78/84/360_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg" alt="" className="w-14 h-14 rounded-sm hover:cursor-pointer" onClick={e => showFiltersSm()} />
                    </div>
                    <div className={'bg-white h-fit rounded-sm z-10 py-4 ' + smFiltersDiv}>
                        <div className="z-10 text-gray-500 text-2xl h-fit hover:cursor-pointer flex w-full justify-start ps-6 py-2  " onClick={e => showFiltersSm()}>
                            X
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-gray-900 p-2 " >
                            {locale == 'en' ?
                                tagsEn.map((element,ind )=> (
                                    <div key={ind} className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filters.includes(element) ? 'bg-red-200' : null)} onClick={e => onFilterClicked(element)}>
                                        {element}
                                    </div>


                                ))
                                :
                                tagsSr.map((element,ind )=> (
                                    <div key={ind} className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filters.includes(element) ? 'bg-red-200' : null)} onClick={e => onFilterClicked(element)}>
                                        {element}
                                    </div>


                                ))
                            }


                        </div>
                    </div>
                    <div className={'bg-white h-fit rounded-sm z-10 py-4 ' + smMunicipalitiesDiv}>
                        <div className="z-10 text-gray-500 text-2xl h-fit hover:cursor-pointer flex w-full justify-start ps-6 py-2  " onClick={e => showMunicipalities()}>
                            X
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-gray-900 p-2 " >
                            {
                                cities.map(element => (
                                    <div className={" hover:cursor-pointer hover:bg-opacity-70 p-2 flex justify-center items-center text-center 1 rounded-md text-gray-900 bg-blue-100 bg-opacity-50 " + (filtersMunicipalities.includes(element) ? "bg-red-200" : null)} onClick={e => onMunicipalityClicked(element)}>
                                        {element}
                                    </div>


                                ))
                            }


                        </div>
                    </div>
                </div>
                {filtersMunicipalities.length > 0 ?
                    <div className="grid grid-cols-3 gap-2 max-h[100px] overflow-y-auto w-full px-2">
                        {filtersMunicipalities.map((municipality) => (
                            <div className=" bg-red-200 border border-red-300 bg-opacity-50 text-center flex items-center justify-center ruonded-sm  " onClick={e => removeMunicipality(municipality)}>
                                {municipality}
                            </div>
                        ))}
                    </div>
                    :
                    null

                }
                {filters.length > 0 ?
                    <div className="w-full ">
                        <p className="ps-4 py-2 font-bold ">{locale == 'en' ? 'Filters Choosen' : 'Izabrani filteri'}</p>
                        <div className="grid grid-cols-3 gap-2 max-h[100px] overflow-y-auto w-full px-2">

                            {filters.map((filter) => (
                                <div className=" bg-red-200 border border-red-300 bg-opacity-50 text-center flex items-center justify-center ruonded-sm  " onClick={e => removeFilter(filter)}>
                                    {filter}
                                </div>
                            ))}
                        </div>
                    </div>

                    :
                    null

                }

                <div className="flex w-full">
                    <div className="border border-1 border-red-600 bg-red-600 bg-opacity-80 p-4 rounded-sm   text-center hover:cursor-pointer w-full text-xl font-bold" onClick={e => onSearchRestaurantClicked()}>
                        {locale == 'en' ? "Searh" : 'Pretraži'}
                    </div>
                </div>

            </div>



        </div>
    );
}

export default Hero;