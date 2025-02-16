
import { useEffect, useState } from "react";
import Tag from "./Tag";
const PageSetings = ({ themes, pageValues, setPageValues, locale, translate, handlePageSetingsSubmit, togglePageSetingsShow, contactInfo, setContactInfo, bgErrors, onPostPageClicked, contactInitial }) => {
    console.log(contactInfo);
    const [themeInUse, setThemeInUse] = useState(themes.pageSetings[pageValues.theme]);
    const [frontErrors, setFrontErrors] = useState({
        facebook: '',
        instagram: '',
        onlineOrders: '',
        website: '',
        phone: '',
        location: '',
        mapLink: '',
    });
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
    const [showEmbededInstruction, setShowEmbededInstruction] = useState(false);
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
        onlineOrders: (localStorage.getItem('onlineOrders') && localStorage.getItem('onlineOrders') == '2' && contactInfo.onlineOrders == null ? true : false),
        facebook: (localStorage.getItem('facebook') && localStorage.getItem('facebook') == '2' && contactInfo.facebook == null ? true : false),
        instagram: (localStorage.getItem('instagram') && localStorage.getItem('instagram') == '2' && contactInfo.instagram == null ? true : false),
        website: (localStorage.getItem('website') && localStorage.getItem('website') == '2' && contactInfo.website == null ? true : false),
        location: (localStorage.getItem('location') && localStorage.getItem('location') == '2' && contactInfo.location == null ? true : false),
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        let fError = '';
        let wError = '';
        let iError = '';
        let orError = '';
        let pError = '';
        let lError = '';
        let mError = '';
        if (!fealdDisabled.onlineOrders) {
            if (!isUrl(contactInfo.onlineOrders) || contactInfo.onlineOrders == '') {
                console.log(isUrl(contactInfo.onlineOrders));
                orError = 'The contact online order link field format is invalid.';
                setFrontErrors({ ...frontErrors, onlineOrders: 'The contact online order link field format is invalid.' });
            } else {
                setFrontErrors({ ...frontErrors, onlineOrders: '' });

            }
        }
        if (!fealdDisabled.website) {
            if (!isUrl(contactInfo.website || contactInfo.website == '')) {
                console.log(isUrl(contactInfo.website));
                wError = 'The contact website link field format is invalid';


            } else {
                setFrontErrors({ ...frontErrors, website: '' });

            }
        }
        if (!fealdDisabled.facebook) {
            if (!isUrl(contactInfo.facebook) || contactInfo.onlineOrders == '') {
                console.log(isUrl(contactInfo.facebook));
                fError = 'The contact facebook link field format is invalid.';

            } else {
                setFrontErrors({ ...frontErrors, facebook: '' });

            }
        }
        if (!fealdDisabled.instagram) {
            if (!isUrl(contactInfo.instagram) || contactInfo.instagram == '') {
                console.log(isUrl(contactInfo.instagram));
                iError = 'The contact instagram link field format is invalid.';

            } else {
                setFrontErrors({ ...frontErrors, instagram: '' });

            }
        }
        if (!fealdDisabled.location) {
            if (!isIframe(contactInfo.location)) {
                lError = 'The embeded map field format is invalid, see instruction.';

            } else {
                setFrontErrors({ ...frontErrors, location: '' });

            }
        }

        if (!isUrl(contactInfo.mapLink) || contactInfo.mapLink == '') {
            console.log(isUrl(contactInfo.mapLink));
            mError = 'The contact mapLink link field format is invalid.';

        } else {
            setFrontErrors({ ...frontErrors, mapLink: '' });

        }
        if (contactInfo.phone == '' || !isValidPhoneNumber(contactInfo.phone)) {
            pError = 'The contact phone field format is invalid.';


        } else{
            pError = '';
            setFrontErrors({ ...frontErrors, phone: '' });

        }


        setFrontErrors({
            instagram: iError,
            facebook: fError,
            website: wError,
            onlineOrders: orError,
            phone: pError,
            location:lError,
            mapLink:mError,
        })
        if (iError == '' && orError == '' && wError == '' && fError == '' && pError == '' && lError == '' && mError == '') {

            handlePageSetingsSubmit(e);
        } else {
            console.log(frontErrors);
        }
    }
    const isUrl = (string) => {
        try {
            new URL(string); // Attempt to create a URL object
            return true;      // If no error, it's a valid URL
        } catch (e) {
            return false;     // If an error occurs, it's not a valid URL
        }
    }
    function isValidPhoneNumber(phone) {
        const phoneRegex = /^(?:\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?)\d{1,4}[-.\s]?\d{1,4}$/;
        return phoneRegex.test(phone);
    }
    function isIframe(str) {
        const iframeRegex = /<iframe.*?<\/iframe>/i;
        return iframeRegex.test(str);
      }
    // disable feaalds
    const onOnlineOrdersDisabled = () => {
        setFealdDisabled({ ...fealdDisabled, onlineOrders: true });
        setContactInfo({ ...contactInfo, onlineOrders: null });
        setFrontErrors({...frontErrors,onlineOrders:''});
    }
    const onFacebookDisabled = () => {
        setFealdDisabled({ ...fealdDisabled, facebook: true });
        setContactInfo({ ...contactInfo, facebook: null });
        setFrontErrors({...frontErrors,facebook:''});

    }
    const onInstagramDisabled = () => {
        setFealdDisabled({ ...fealdDisabled, instagram: true });
        setContactInfo({ ...contactInfo, instagram: null });
        setFrontErrors({...frontErrors,instagram:''});

    }
    const onWebsiteDisabled = () => {
        setFealdDisabled({ ...fealdDisabled, website: true });
        setContactInfo({ ...contactInfo, website: null });
        setFrontErrors({...frontErrors,website:''});

    }
    const onLocationDisabled = () => {
        setFealdDisabled({ ...fealdDisabled, location: true });
        setContactInfo({ ...contactInfo, location: null });
        setFrontErrors({...frontErrors,location:''});

    }
    // //enable fealds
    const onOnlineOrdersEnabled = () => {
        setFealdDisabled({ ...fealdDisabled, onlineOrders: false });
        setContactInfo({ ...contactInfo, onlineOrders: contactInitial.onlineOrders });
    }
    const onFacebookEnabled = () => {
        setFealdDisabled({ ...fealdDisabled, facebook: false });
        setContactInfo({ ...contactInfo, facebook: contactInitial.facebook });
    }
    const onInstagramEnabled = () => {
        setFealdDisabled({ ...fealdDisabled, instagram: false });
        setContactInfo({ ...contactInfo, instagram: contactInitial.instagram });
    }
    const onWebsiteEnabled = () => {
        setFealdDisabled({ ...fealdDisabled, website: false });
        setContactInfo({ ...contactInfo, website: contactInitial.website });
    }
    const onLocationEnabled = () => {
        setFealdDisabled({ ...fealdDisabled, location: false });
        setContactInfo({ ...contactInfo, location: contactInitial.location });
    }




    useEffect(() => {
        if (fealdDisabled.onlineOrders == true) {
            localStorage.setItem('onlineOrders', '2');

            setContactInfo({ ...contactInfo, onlineOrders: null });
            // setPageValues(prevState => ({
            //     ...prevState, 
            //     contactInfo: {
            //         ...prevState.contactInfo, 
            //         onlineOrders: null, 
            //     }
            // }));
        } else {
            localStorage.setItem('onlineOrders', '1');

        }
        if (fealdDisabled.website == true) {
            localStorage.setItem('website', '2');

            setContactInfo({ ...contactInfo, website: null });
        } else {
            localStorage.setItem('website', '1');

        }
        if (fealdDisabled.instagram == true) {
            localStorage.setItem('instagram', '2');

            setContactInfo({ ...contactInfo, instagram: null });
        } else {
            localStorage.setItem('instagram', '1');

        }
        if (fealdDisabled.facebook == true) {
            localStorage.setItem('facebook', '2');

            setContactInfo({ ...contactInfo, facebook: null });
        } else {
            localStorage.setItem('facebook', '1');

        }
        if (fealdDisabled.phone == true) {
            setContactInfo({ ...contactInfo, phone: null });
        }

    }, [fealdDisabled]);

    useEffect(() => {
        setPageValues({ ...pageValues, contactInfo: contactInfo });

    }, [contactInfo]);

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
                    {/* phone feald */}
                    <div className="text-sm  flex w-full px-2 flex  " >
                        {locale == 'en' ? 'Phone number feald' : 'Polje za broj telefona'}

                    </div>
                    <div className="flex w-full  h-10 px-2 ">
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                        </div>
                        <span className="px-1">*</span>
                        <input type="text" value={contactInfo.phone} onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })} className={"w-full   rounded-md " + themeInUse.input + (frontErrors.phone  || bgErrors['contactInfo.phone'] ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste phone number" : translate["Paste phone number"]} />
                        <div className="px-2 bg-gray-400 flex justify-center items-center rounded-md ms-1 ">
                            x
                        </div>


                    </div>
                    {
                        bgErrors['contactInfo.phone'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.phone'] : translate[bgErrors['contactInfo.phone']]
                        }</div>
                    }
                    {

                        frontErrors.phone &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.phone : translate[frontErrors.phone]
                        }</div>
                    }
                    {/* link for googlemaps */}
                    <div className="text-sm  flex w-full px-2">
                        {locale == 'en' ? 'Google maps link' : 'Polje za link za google mapu'}
                    </div>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.mapLink ? " opacity-20 " : "")}>

                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />
                        </div>
                        <span className="px-1">*</span>
                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, mapLink: e.target.value })} className={"w-full   rounded-md " + themeInUse.input + (frontErrors.mapLink ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste online order link" : translate["Paste online order link"]} disabled={fealdDisabled.mapLink} value={contactInfo.mapLink} onInvalid={e => setContactInfo({ ...contactInfo, mapLink: null })} />
                        {
                                
                                <div  className="px-2 bg-gray-400 flex justify-center items-center rounded-md ms-1 ">
                                    x
                                </div>
                        }

                    </div>

                    {
                        bgErrors['contactInfo.mapLink'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.mapLink'] : translate[bgErrors['contactInfo.mapLink']]
                        }</div>
                    }
                    {
                        frontErrors.mapLink &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.mapLink : translate[frontErrors.mapLink]
                        }</div>

                    }
                    {/* link for online orders */}

                    <div className="text-sm  flex w-full px-2">
                        {locale == 'en' ? 'Link to online orders feald(wolt,glovo,custom app etc.)' : 'Polje za link za online naručivanje(wolt,glovo,vaša prodavnica itd.)'}
                    </div>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.onlineOrders ? " opacity-20 " : "")}>

                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, onlineOrders: e.target.value })} className={"w-full   rounded-md " + themeInUse.input + (frontErrors.onlineOrders ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste online order link" : translate["Paste online order link"]} disabled={fealdDisabled.onlineOrders} value={contactInfo.onlineOrders} onInvalid={e => setContactInfo({ ...contactInfo, onlineOrders: null })} />
                        {
                            fealdDisabled.onlineOrders ?
                                <div onClick={e => onOnlineOrdersEnabled()} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => onOnlineOrdersDisabled()} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>

                    {
                        bgErrors['contactInfo.onlineOrders'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.onlineOrders'] : translate[bgErrors['contactInfo.onlineOrders']]
                        }</div>
                    }
                    {
                        frontErrors.onlineOrders &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.onlineOrders : translate[frontErrors.onlineOrders]
                        }</div>

                    }
                    
                    {/* Embeded map  */}
                    <div className="text-sm  flex w-full px-2 hidden md:flex  " >
                        {locale == 'en' ? 'Embeded google map feald' : 'Polje za embeded google mapu'}

                    </div>
                    <p className="text-sm  flex w-full px-2 hidden md:flex hover:text-blue-500 hover:cursor-pointer" onClick={e => setShowEmbededInstruction(!showEmbededInstruction)}>{locale == 'en' ? 'Click for instuction' : 'Kliknite za instrukcije'} </p>
                    {
                        locale == 'en' ?
                            <div className={"w-full bg-gray-200 p-4 rounded-md text-black " + (showEmbededInstruction ? 'flex' : 'hidden')}>

                                Go to google maps. Find your location. Click on share button, then choose option embed a map. Click copy html and paste it in the feald. Available only on desktop. Easy peasy !</div>
                            :
                            <div className={"w-full bg-gray-200 p-4 rounded-md text-black " + (showEmbededInstruction ? 'flex' : 'hidden')}>
                                {translate['set map link instruction']}
                            </div>
                    }
                    <div className={"hidden md:flex w-full h-10 px-2   " + (fealdDisabled.location ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4  ">
                            <img className="flex  rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png" alt="" />

                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, location: e.target.value })} className={"w-full   rounded-md block  " + themeInUse.input + (frontErrors.location ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste embeded map" : translate["Paste embeded map"]} disabled={fealdDisabled.location} value={contactInfo.location} />


                        {
                            fealdDisabled.location ?
                                <div onClick={e => onLocationEnabled()} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => onLocationDisabled()} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }


                    </div>
                    {
                        bgErrors['contactInfo.location'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.location'] : translate[bgErrors['contactInfo.location']]
                        }</div>
                    }
                    {
                        frontErrors.location &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.location : translate[frontErrors.location]
                        }</div>

                    }
                    {/* website link */}
                    <div className="text-sm  flex w-full px-2 flex  " >
                        {locale == 'en' ? 'Link to your website feald' : 'Polje za link ka vašem websajtu'}

                    </div>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.website ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, website: e.target.value })} className={"w-full  rounded-md relative " + themeInUse.input + (frontErrors.website !== '' ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste website link" : translate["Paste website link"]} disabled={fealdDisabled.website} value={contactInfo.website} />
                        {
                            fealdDisabled.website ?
                                <div onClick={e => onWebsiteEnabled()} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => onWebsiteDisabled()} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        bgErrors['contactInfo.website'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.website'] : translate[bgErrors['contactInfo.website']]
                        }</div>
                    }
                    {

                        frontErrors.website &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.website : translate[frontErrors.website]
                        }</div>
                    }
                    
                    {/* instagram link */}
                    <div className="text-sm  flex w-full px-2 flex  " >
                        {locale == 'en' ? 'Link to your instagram feald' : 'Polje za link ka vašem instagram profilu'}

                    </div>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.instagram ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4 ">
                            <img className="flex  rounded-md" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                        </div>

                        <input type="text" onChange={e => setContactInfo({ ...contactInfo, instagram: e.target.value })} className={"w-full  rounded-md " + themeInUse.input + (frontErrors.instagram ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste instagram link" : translate["Paste instagram link"]} disabled={fealdDisabled.instagram} value={contactInfo.instagram} />
                        {
                            fealdDisabled.instagram ?
                                <div onClick={e => onInstagramEnabled()} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => onInstagramDisabled()} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        bgErrors['contactInfo.instagram'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.instagram'] : translate[bgErrors['contactInfo.instagram']]
                        }</div>
                    }
                    {
                        frontErrors.instagram &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.instagram : translate[frontErrors.instagram]
                        }</div>
                    }
                    <div className="text-sm  flex w-full px-2 flex  " >
                        {locale == 'en' ? 'Link to your facebook feald' : 'Polje za link ka vašem facebook profilu'}

                    </div>
                    <div className={"flex w-full h-10 px-2 " + (fealdDisabled.facebook ? " opacity-20 " : "")}>
                        <div className="flex basis-1/4">
                            <img className="flex rounded-md" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                        </div>


                        <input type="text" value={pageValues.facebook} onChange={e => setContactInfo({ ...contactInfo, facebook: e.target.value })} className={"w-full   rounded-md " + themeInUse.input + (frontErrors.facebook ? 'border-red-500 ' : null)} placeholder={locale == 'en' ? "Paste facebook link" : translate["Paste facebook link"]} disabled={fealdDisabled.facebook} />
                        {
                            fealdDisabled.facebook ?
                                <div onClick={e => onFacebookEnabled()} className="px-2 bg-green-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-green-600 z-10 opacity-100">
                                    +
                                </div>
                                :
                                <div onClick={e => onFacebookDisabled()} className="px-2 bg-red-500 flex justify-center items-center rounded-md ms-1 hover:cursor-pointer hover:bg-red-600">
                                    x
                                </div>
                        }

                    </div>
                    {
                        bgErrors['contactInfo.facebook'] &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? bgErrors['contactInfo.facebook'] : translate[bgErrors['contactInfo.facebook']]
                        }</div>
                    }
                    {
                        frontErrors.facebook &&
                        <div className="text-red-500 ps-2">{
                            locale == 'en' ? frontErrors.facebook : translate[frontErrors.facebook]
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
                <div className="flex flex-col gap-2 ps-2 ">
                    <div className="py-4 w-1/2 basis-1/2 px-4 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100" onClick={e => handleSubmit(e)}>

                        {locale == 'en' ? 'UPDATE SETINGS' : translate['UPDATE SETINGS']}
                    </div>
                    <a href={`page/show/${pageValues.id}`}>
                        <div className="py-4 px-4 w-1/2 basis-1/2 bg-blue-500 text-center bg-opacity-80 rounded-md hover:cursor-pointer hover:bg-opacity-100">

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