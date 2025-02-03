
import { useEffect, useState } from "react";
import Tag from "./Tag";
const PageSetings = ({ themes, pageValues, setPageValues, locale, translate, handlePageSetingsSubmit, togglePageSetingsShow, contactInfo, setContactInfo, bgErrors, onPostPageClicked }) => {
    const [themeInUse, setThemeInUse] = useState(themes.pageSetings[pageValues.theme]);
    const tagsEn = [
        'Food truck', 'Pub', 'Bakery', 'Pizza', 'Deli', 'Fine Dining', 'Buffet', 'Bar', 'Bar and Brewery', 'Fast food', 'Cafeteria', 'BBQ', 'Giros', 'BreakFast', 'Lunch', 'Dinner', 'Dine in', 'Drive through', 'Drinks', 'Kebab', 'Indian', 'Fish', 'Pasta', 'Italian', 'International', 'Mexican', 'Tai', 'Chinese', 'Japanese', 'French', 'French Fries', 'Burgers', 'Chicken', 'Traditional cousine', 'Snack Bar'
    ];
    const tagsSr = [
        'Kombi restoran', 'Pab', 'Pekara', 'Pica', 'Fine Dining', 'Švedski sto', 'Bar', 'Bar  i proizvodnja pića', 'Brza hrana', 'Kafeterija', 'Roštilj', 'Giros', 'Doručak', 'Ručak', 'Večera', 'Sedenje', 'Auto-restoran', 'Piće', 'Kebab', 'Indijski', 'Riba', 'Pasta', 'Italijanski', 'Internacionalni', 'Meksički', 'Tajlandski', 'Kineski', 'Japanski', 'Francuski', 'Pomfrit', 'Burgeri', 'Piletina', 'Tradicionalna kuhinja'
    ];
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
    const [selectedTags, setSelectedTags] = useState(pageValues.tags);
    const [seeTags, setSeeTags] = useState(false);
    const toggleSeeTags = () => {
        setSeeTags(!seeTags);
    }
    const addTag = (value) => {
        let newTags = pageValues.tags;
        console.log(newTags);

        newTags.push(value);
        setPageValues({ ...pageValues, tags: newTags });

    }
    const removeTag = (value) => {
        let newTags = pageValues.tags;
        let filteredTags = newTags.filter((element) => element !== value);
        setPageValues({ ...pageValues, tags: filteredTags });

    }
    const onTagClicked = (value) => {
        let s = selectedTags;
        if (s.includes(value)) {
            removeTag(value);
        } else {
            addTag(value);
        }
    }

    const setTheme = (value) => {
        if (value) {
            setThemeInUse(themes.pageSetings[value]);
            setPageValues({ ...pageValues, theme: value });
        }


    }
    const [fealdDisabled, setFealdDisabled] = useState({
        onlineOrder: false,
        facebook: false,
        instagram: false,
        website: false,
    })
    useEffect(() => {
        if (fealdDisabled.onlineOrder == true) {
            setContactInfo({ ...contactInfo, onlineOrder: null });
        }
        if (fealdDisabled.website == true) {
            setContactInfo({ ...contactInfo, website: null });
        }
        if (fealdDisabled.instagram == true) {
            setContactInfo({ ...contactInfo, instagram: null });
        }
        if (fealdDisabled.facebook == true) {
            setContactInfo({ ...contactInfo, facebook: null });
        }
        if (fealdDisabled.phone == true) {
            setContactInfo({ ...contactInfo, phone: null });
        }
    }, [fealdDisabled]);



    return (
        <div className={"flex w-full  h-full relative" + themes.main[pageValues.theme]}>
            <div className="md:hidden py-2 px-3 flex justify-center items-center absolute left-4 top-2 text-2xl bg-gray-200 rounded-md hover:bg-red-600 hover:cursor-pointer font-extrabold text-black" onClick={e => togglePageSetingsShow()}>
                x
            </div>
            <div className="w-full flex flex-col gap-4 px-2 pt-3">
                <div className="pt-4 text-md md:text-2xl">
                    <h1>{locale == 'en' ? 'Page Settings' : translate['Page Settings']}</h1>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <label className="w-full" htmlFor="">{locale == 'en' ? 'Page Title' : translate['Page Title']}</label>
                    <input type="text" value={pageValues.title} onChange={e => setPageValues({ ...pageValues, title: e.target.value })} className={"w-full px-2  rounded-md " + themeInUse.input} />
                </div>
                <div className="w-full flex gap-1">
                    {
                        locale == 'en' ?
                            <select id="selectThemeInput" className={"w-full p-2 rounded-md " + themeInUse.input}
                                name="chooseTheme" onChange={e => setTheme(e.target.value)}>


                                <option value="">choose theme</option>
                                <option value="light">light</option>
                                <option value="dark">dark</option>
                                <option value="blue">blue</option>
                                <option value="red">red</option>
                                <option value="purple">purple</option>
                                <option value="yellow">yellow</option>
                                <option value="green">green</option>
                            </select>

                            :
                            <select id="selectThemeInput" className={"w-full p-2 rounded-md " + themeInUse.input}
                                name="chooseTheme" onChange={e => setTheme(e.target.value)}>

                                <option value="">izaberite temu</option>
                                <option value="light">svetla</option>
                                <option value="dark">tamna</option>
                                <option value="blue">plava</option>
                                <option value="red">crvena</option>
                                <option value="purple">ljubičasta</option>
                                <option value="yellow">žuta</option>
                                <option value="green">zelena</option>

                            </select>

                    }

                    {
                        locale == 'en' ?
                            <select id="selectFontInput" className={'w-full p-2 rounded-md ' + themeInUse.input}
                                name="chooseTheme" onChange={e => setPageValues({ ...pageValues, font_family: e.target.value })} >


                                <option value="">choose font</option>
                                <option value="font-sans">sans</option>
                                <option value="font-serif">serif</option>
                                <option value="font-mono">mono</option>
                            </select>

                            :
                            <select id="selectFontInput" className={'w-full p-2 rounded-md ' + themeInUse.input}
                                name="chooseTheme" onChange={e => setPageValues({ ...pageValues, font_family: e.target.value })} >


                                <option value="">izaberite font</option>
                                <option value="font-sans">sans</option>
                                <option value="font-serif">serif</option>
                                <option value="font-mono">mono</option>
                            </select>


                    }


                </div>
                <div className=" w-full flex flex-col gap-4">
                    <label className='w-full' htmlFor="vity">{locale == 'en' ? 'Choose city' : translate['Choose city']}</label>
                    <select className={"rounded-md w-full " + themeInUse.input} value={pageValues.city} name="city" id="" onChange={e => setPageValues({ ...pageValues, city: e.target.value })}>
                        {cities.map((city, ind) => (
                            <option className={themeInUse.input} key={ind} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full flex flex-col gap-4 group">
                    <label className="w-full" htmlFor="">{locale == 'en' ? 'Contact Info' : translate['Contact Info']}</label>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.onlineOrder ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, onlineOrder: e.target.value })} className={"w-full   rounded-md " + themeInUse.input} placeholder={locale == 'en' ? "Paste online order link" : translate["Paste online order link"]} disabled={fealdDisabled.onlineOrder} />
                        {
                            fealdDisabled.onlineOrder ?
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, onlineOrder: !fealdDisabled.onlineOrder })} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, onlineOrder: !fealdDisabled.onlineOrder })} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        locale == 'en' ?
                            <div className="hidden group-hover:flex w-full bg-gray-200 p-4 rounded-md text-black">

                                Go to google maps. Find your location. Click on share button, then choose option embed a map. Click copy html and paste it in the feald. Easy peasy !</div>
                            :
                            <div className="hidden group-hover:flex w-full bg-gray-200 p-4 rounded-md text-black">
                                {translate['set map link instruction']}
                            </div>
                    }
                    {
                        bgErrors['contactInfo.onlineOrder'] &&
                        bgErrors['contactInfo.onlineOrder'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.onlineOrder'] : translate[bgErrors['contactInfo.onlineOrder']]
                        }</div>
                    }
                    <div className={"flex w-full h-10 px-2   " + (fealdDisabled.location ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4  relative group ">
                            <img className="flex  rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png" alt="" />

                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, location: e.target.value })} className={"w-full   rounded-md block  " + themeInUse.input} placeholder={locale == 'en' ? "Paste embeded map" : translate["Paste embeded map"]} disabled={fealdDisabled.location} />
                        {
                            fealdDisabled.location ?
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, location: !fealdDisabled.location })} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, location: !fealdDisabled.location })} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }


                    </div>
                    {
                        bgErrors['contactInfo.onlineOrder'] &&
                        bgErrors['contactInfo.onlineOrder'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.onlineOrder'] : translate[bgErrors['contactInfo.onlineOrder']]
                        }</div>
                    }
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.website ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, website: e.target.value })} className={"w-full  rounded-md relative " + themeInUse.input} placeholder={locale == 'en' ? "Paste website link" : translate["Paste website link"]} disabled={fealdDisabled.website} />
                        {
                            fealdDisabled.website ?
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, website: !fealdDisabled.website })} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, website: !fealdDisabled.website })} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        bgErrors['contactInfo.website'] &&
                        bgErrors['contactInfo.website'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.website'] : translate[bgErrors['contactInfo.website']]
                        }</div>
                    }
                    <div className="flex w-full  h-10 px-2 ">
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                        </div>

                        <input type="text" value={contactInfo.phone} onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })} className={"w-full   rounded-md " + themeInUse.input} placeholder={locale == 'en' ? "Paste phone number" : translate["Paste phone number"]} />
                        <div className="px-2 bg-gray-400 flex justify-center items-center rounded-md ms-1 ">
                            x
                        </div>


                    </div>
                    {
                        bgErrors['contactInfo.phone'] &&
                        bgErrors['contactInfo.phone'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.phone'] : translate[bgErrors['contactInfo.phone']]
                        }</div>
                    }
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.instagram ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, instagram: e.target.value })} className={"w-full  rounded-md " + themeInUse.input} placeholder={locale == 'en' ? "Paste instagram link" : translate["Paste instagram link"]} disabled={fealdDisabled.instagram} />
                        {
                            fealdDisabled.instagram ?
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, instagram: !fealdDisabled.instagram })} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, instagram: !fealdDisabled.instagram })} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        bgErrors['contactInfo.instagram'] &&
                        bgErrors['contactInfo.instagram'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.instagram'] : translate[bgErrors['contactInfo.instagram']]
                        }</div>
                    }
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.facebook ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4">
                            <img className="flex rounded-md" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                        </div>

                        <input type="text" value={pageValues.facebook} onChange={e => setContactInfo({ ...contactInfo, facebook: e.target.value })} className={"w-full   rounded-md " + themeInUse.input} placeholder={locale == 'en' ? "Paste facebook link" : translate["Paste facebook link"]} disabled={fealdDisabled.facebook} />
                        {
                            fealdDisabled.facebook ?
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, facebook: !fealdDisabled.facebook })} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => setFealdDisabled({ ...fealdDisabled, facebook: !fealdDisabled.facebook })} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }
                        {/* {
                            

                            bgErrors.contactInfo.facebook &&
                            <div className="text-red-500">
                                {bgErrors.contactInfo.facebook}
                            </div>
                        } */}
                    </div>
                    {
                        bgErrors['contactInfo.facebook'] &&
                        bgErrors['contactInfo.facebook'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.facebook'] : translate[bgErrors['contactInfo.facebook']]
                        }</div>
                    }

                </div>
                <div className="w-full p-2">
                    <div className="py-4 px-4 w-full bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e => toggleSeeTags()}>
                        {locale == 'en' ? "See restaurant tags" : translate["See restaurant tags"]}
                    </div>
                    <div className={"w-full " + (seeTags ? "flex flex-col gap-4 " : "hidden")}>
                        <div className="py-4 grid grid-cols-3  gap-1 md:gap-4 w-full">
                            {locale == 'en' ?

                                tagsEn.map((restaurant, ind) => (
                                    pageValues.tags.includes(restaurant) ?
                                        <Tag key={ind} value={restaurant} title={restaurant} onTagClicked={onTagClicked} isClicked={true} />
                                        :
                                        <Tag key={ind} value={restaurant} title={restaurant} onTagClicked={onTagClicked} isClicked={false} />

                                ))
                                :
                                tagsEn.map((restaurant, ind) => (pageValues.tags.includes(restaurant) ?
                                    <Tag key={ind} value={restaurant} title={translate[restaurant]} onTagClicked={onTagClicked} isClicked={true} />
                                    :
                                    <Tag key={ind} value={restaurant} title={translate[restaurant]} onTagClicked={onTagClicked} isClicked={false} />
                                ))
                            }
                        </div>
                    </div>


                </div>
                <div className="md:flex gap-2">
                    <div className="py-4 md:basis-1/2 px-4 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e => handlePageSetingsSubmit(e)}>

                        {locale == 'en' ? 'UPDATE SETINGS' : translate['UPDATE SETINGS']}
                    </div>
                    <a href={`page/show/${pageValues.id}`}>
                    <div className="py-4 px-4 md:basis-1/2 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100">
                            
                        {locale == 'en' ? 'SEE PAGE' : translate['SEE PAGE']}
                    </div>
                    </a>
                    
                </div>
                {
                    pageValues.publish == 0 ?

                        <div className="py-4 px-4 w-2/3 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e => onPostPageClicked(e)}>

                            {locale == 'en' ? 'POST PAGE ONLINE' : translate['POST PAGE ONLINE']}
                        </div>

                        :
                        <div className="py-4 px-4 w-2/3 bg-yellow-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e => onPostPageClicked(e)}>

                            {locale == 'en' ? 'SET PAGE OFFLINE' : translate['SET PAGE OFFLINE']}
                        </div>
                }
            </div>

        </div>
    )
}

export default PageSetings;