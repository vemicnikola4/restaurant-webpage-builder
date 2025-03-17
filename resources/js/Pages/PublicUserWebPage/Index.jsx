import { useState, useEffect } from "react";
import Hero from "./Partials/Hero";
import HeaderMenu from "./Partials/HeaderMenu";
import AboutUs from "./Partials/AboutUs";
import MapProvider from "./Partials/MapProvider";
import Footer from "./Partials/Footer";
import Menu from "./Partials/Menu";
import NoImgsMenu from "./Partials/NoImgsMenu";

const Index = ({ page }) => {
    const [locale, setLocale] = useState();
    const [pageValues, setPageValues] = useState(page);
    let heroInitial;
    if (page.hero) {
        heroInitial = page.hero.data;
    } else {
        heroInitial = null;

    }
    const [hero, setHero] = useState(heroInitial);
    let contactInfoInitial;
    if (page.contactInfo) {
        contactInfoInitial = page.contactInfo.data;
    } else {
        contactInfoInitial = null;

    }
    const [contactInfo, setContactInfo] = useState(contactInfoInitial);

    let aboutUsInitial;
    if (page.aboutUs) {
        aboutUsInitial = page.aboutUs.data;
    } else {
        aboutUsInitial = null;

    }
    const [aboutUs, setAboutUs] = useState(aboutUsInitial);

    let menuSectionsInitial;
    if (page.menuSections) {
        menuSectionsInitial = page.menuSections;
    } else {
        menuSectionsInitial = null;

    }
    const [menuSections, setMenuSections] = useState(menuSectionsInitial);

    let noImgsMenuSectionsInitial;
    if (page.noImgsMenuSections) {
        noImgsMenuSectionsInitial = page.noImgsMenuSections;
    } else {
        noImgsMenuSectionsInitial = null;

    }
    const [noImgsMenuSections, setNoImgsMenuSections] = useState(noImgsMenuSectionsInitial);

    const translate = {
        "Page Settings": "Podešavanje stranice",
        "Page Title": "Naslov stranice",
        "Contact Info": "Kontakt podatci",
        "UPDATE SETINGS": "IZMENITE",
        "Profile": "Profil",
        "Logout": "Izlogujte se",
        "Dashboard": "Komandna tabla",
        "Copy Img Url": "Kopirajte Url Slike",
        "Set background": "Podesite Pozadinu",
        "Enter Title": "Unesite Naslov",
        "Enter Subtitle": "Unesite Podaslov",
        "Paste online order link": "Nalepite link za online kupovinu",
        "Paste phone number": "Nalepite broj telefona",
        "Paste facebook link": "Nalepite facebook link",
        "Paste instagram link": "Nalepite instagram link",
        "Paste website link": "Nalepite link ka vasem sajtu",
        "SAVE": "SAČUVAJ",
        "Upload background image": "Učitajte pozadinsku sliku",
        "The title field is required.": "Naslov je obavezan!",
        "The title field must be a string.": "Naslov mora biti sastavljen od slova!",
        "The title field must be at least 2 characters.": "Naslov mora imati najmanje 2 slova!",
        "The subtitle field is required.": "Podnaslov je obavezan!",
        "The subtitle field must be a string.": "Podnaslov mora biti sastavljen od slova!",
        "The subtitle field must be at least 2 characters.": "Podnaslov mora imati najmanje 2 slova!",
        "The media field is required.": "Molim učitajte sliku!",
        "The title field must be an image.": "Fajl mora biti slika!",
        "Extentions allowed:jpg,jpeg,png,gif.": "Dozvoljene ektenzije:jpg,jpeg,png,gif",
        "Field required. Values allowed:center,left,right.": "Obavezno polje. Dozvoljene vrednosti:centralno,levo,desno.",
        "Ups something went wrong. Try again.": "Ups greška, probajte ponovo!",
        "Choose city": "Izaberite grad",
        "See restaurant tags": "Vidite izabrane tagove",
        'Food truck': "Kombi restoran",
        'Pub': "Pab",
        'Bakery': "Pekara",
        'Pizza': "Pica",
        'Deli': "Deli",
        'Fine Dining': "Luksizni",
        'Buffet': "Švedski sto",
        'Bar': "Bar",
        'Bar and Brewery': "Bar i proizvodjna",
        'Fast food': "Brza hrana",
        'Cafeteria': "Kafeterija",
        'BBQ': "Roštilj",
        'Giros': "Giros",
        'BreakFast': "Doručak",
        'Lunch': "Ručak", 'Dinner': "Večera", 'Dine in': "Sedenje",
        'Drive through': "Auto-restoran", 'Drinks': "Piće", 'Kebab': "Kebab", 'Indian': "Indijski", 'Fish': "Riba", 'Pasta': "Pasta", 'Italian': "Intalijanski", 'International': "Internacionalni", 'Mexican': "Meksički", 'Tai': "Tajlandski", 'Chinese': "Kineski", 'Japanese': "Japanski", 'French': "Francuski", 'French Fries': "Pomfrit", 'Burgers': "Burgeri", 'Chicken': "Piletina", 'Traditional cousine': "Tradicionalna", 'Snack Bar': "Snek bar",
        'The contact phone field format is invalid.': "Kontakt telefon nije u validnom formatu",
        'The contact phone field format is required.': "Kontakt telefon polje je obavezno.",
        'The contact instagram link field format is invalid.': "Instagram link nije u validnom formatu",
        'The contact facebook link field format is invalid.': "Facebook link nije u validnom formatu",
        'The contact online order link field format is invalid.': "Link za online poručivanje nije u validnom formatu",
        'The contact website link field format is invalid': "Website link nije u validnom formatu",
        'The description field is required.': "Polje opis je obavezno!",
        'The description feald must be a string.': "Polje opis mora biti sastavljen od slova!",
        'The description feald must be at least 2 characters.': "Polje opis mora imati najmanje 2 karaktera",
        'The price feald is required.': 'Polje cena je obavezno',
        'The price feald must be a number.': "Polje cena mora biti broj",
        'The price feald must be a number minimum 1.': 'Vrednost polja cena mora biti najmanje 1',
        'Section must have at least one item.': 'Sekcija mora imati bar jedan proizvod',
        'set map link instruction': "Na google maps pronadjte svoju lokaciju. Kliknite na share dugme. Izaberite opciju embed a map. Onda kliknite na copy html opciju. I kopirajte u polje.",
        'Something went wrong page not found': 'Nepostojeća stranica',
        "Paste maps location link": 'Nalepite link ka va google mapama',
        'All copyrights reserved': 'Sva prava rezervisana',
        'POST PAGE ONLINE': 'POSTAVITE STRANICU ONLINE',
        'SEE PAGE': 'VIDITE STRANICU',
        'Add menu section': 'Dodajte sekciju',
        'Add section button': "Klikom na ovo dugme dodaćete sekciju vašem meniju. Na primer: predjela, glavno jelo itd.",
        'Add item button': "Klikom na ovo dugme dodaćete proizvod vašoj sekciji.",
        "Paste embeded map": "Nalepite embeded mapu",
        "SET PAGE OFFLINE": "POSTAVITE STRANICU OFFLINE",
        'monday':'ponedeljak',
        'tuesday':'utorak',
        'wednesday':'sreda',
        'thursday':'četvrtak',
        'friday':'petak',
        'saturday':'subota',
        'sunday':'nedelja',


    }
    const textBoxPosition = {
        headerMenu: {
            center: 'justify-center',
            left: 'justify-start ps-10',
            right: 'justify-end md:pe-10 ',
        },
        heroSection: {
            center: {
                parent: "items-center ",
                titleSubTitleDiv: 'items-center ',

                title: 'text-center',
                subtitle: 'text-center',
            },
            left: {
                parent: "items-start",
                titleSubTitleDiv: 'items-start md:ms-12 ',

                title: 'text-start ps-4 ',
                subtitle: 'text-start ps-4 ',
            },
            right: {
                parent: "items-end",
                titleSubTitleDiv: 'items-end md:me-12 ',

                title: 'text-end pe-4 ',
                subtitle: 'text-end pe-4 ',
            }
        }
    }
    const themes =
    {
        main: {

            light: 'bg-gray-100 text-gray-900 ',
            dark: 'bg-gray-700 text-white ',
            blue: 'bg-blue-200 text-gray-700 ',
            red: 'bg-red-200 text-gray-700  ',
            purple: 'bg-purple-200 text-gray-700  ',
            yellow: 'bg-yellow-200  text-gray-700  ',
            green: 'bg-green-200 text-gray-700  ',

        },
        heroSection: {
            light: {
                menuDiv: 'bg-gray-300 bg-opacity-50  text-gray-900  ',
                dropDownMenu: 'bg-gray-300 text-gray-700',

                titleSubTitleDiv: {
                    main: ' text-gray-900 bg-gray-300 bg-opacity-50 ',


                }

            },
            dark: {
                menuDiv: 'bg-gray-700 bg-opacity-50  text-white ',
                dropDownMenu: 'bg-gray-700 text-white',
                titleSubTitleDiv: {
                    main: ' text-white bg-gray-700 bg-opacity-50 ',

                }
            },
            blue: {
                menuDiv: 'bg-blue-200  bg-opacity-50  text-gray-900 ',
                dropDownMenu: 'bg-blue-200 text-gray-900 ',

                titleSubTitleDiv: {
                    main: ' text-gray-900 bg-blue-200 bg-opacity-50 shadow-sm hover:shadow-lg',


                }
            },
            red: {
                menuDiv: 'bg-red-200  bg-opacity-50  text-gray-900 ',
                dropDownMenu: 'bg-red-200 text-gray-900 ',

                titleSubTitleDiv: {
                    main: ' text-gray-900 bg-red-200 bg-opacity-50 shadow-sm hover:shadow-lg',


                }
            },
            purple: {
                menuDiv: 'bg-purple-200  bg-opacity-50  text-gray-900 ',
                dropDownMenu: 'bg-purple-200 text-gray-900',


                titleSubTitleDiv: {
                    main: 'text-gray-900 bg-purple-200   bg-opacity-50 shadow-sm hover:shadow-lg',


                }
            },
            yellow: {
                menuDiv: 'bg-yellow-200  bg-opacity-50  text-black ',
                dropDownMenu: 'bg-yellow-200 text-black',

                setBgDiv: {
                    main: "bg-yellow-200 border-2   bg-opacity-50 shadow-sm hover:shadow-lg ",

                },
                titleSubTitleDiv: {
                    main: 'bg-yellow-200 border-2 border-gray-100  bg-opacity-50 shadow-sm hover:shadow-lg',


                }
            },
            green: {
                menuDiv: 'bg-green-200  bg-opacity-50  text-black ',
                dropDownMenu: 'bg-green-200 text-black',


                titleSubTitleDiv: {
                    main: 'bg-green-200 border-2 border-gray-100  bg-opacity-50 shadow-sm hover:shadow-lg',

                }
            }
        },
        aboutUs: {
            light: {
                main: 'bg-gray-100  text-gray-900 ',

            },
            dark: {
                main: 'bg-gray-700 text-white',




            },
            blue: {
                main: 'bg-blue-200 text-black',


            },
            red: {
                main: 'bg-red-200  text-black',


            },
            purple: {
                main: 'bg-purple-200   text-black ',

            },
            yellow: {
                main: 'bg-yellow-200  text-black ',

            },
            green: {
                main: 'bg-green-200  0 text-black ',

            }
        },
        menu: {
            light: {
                main: 'bg-gray-100 text-gray-900 ',
                title: 'text-gray-900',
                input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',
            },
            dark: {
                main: 'bg-gray-700 ',
                title: 'text-white',
                input: 'bg-gray-100 bg-opacity-50 border-b-1 text-white ',

            },
            blue: {
                main: 'bg-blue-200 text-black',
                title: 'text-black',
                input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black ',


            },
            red: {
                main: 'bg-red-200  text-black',
                title: 'text-black',
                input: 'bg-red-100 bg-opacity-50 border-b-1 text-black ',



            },
            purple: {
                main: 'bg-purple-200   text-black ',
                title: 'text-black',
                input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black ',


            },
            yellow: {
                main: 'bg-yellow-200  text-black ',
                title: 'text-black',
                input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black ',


            },
            green: {
                main: 'bg-green-200   text-black ',
                title: 'text-black',
                input: 'bg-green-100 bg-opacity-50 border-b-1 text-black ',


            }
        },
        footer: {
            light: {
                main: 'bg-gray-400  text-gray-900 ',
                title: 'text-gray-900',
                input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',
            },
            dark: {
                main: 'bg-gray-900 ',
                title: 'text-white',
                input: 'bg-gray-300 bg-opacity-50 border-b-1 text-white ',

            },
            blue: {
                main: 'bg-blue-300 text-black',
                title: 'text-black',
                input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black ',


            },
            red: {
                main: 'bg-red-300  text-black',
                title: 'text-black',
                input: 'bg-red-100 bg-opacity-50 border-b-1 text-black ',



            },
            purple: {
                main: 'bg-purple-300   text-black ',
                title: 'text-black',
                input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black ',


            },
            yellow: {
                main: 'bg-yellow-300  text-black ',
                title: 'text-black',
                input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black ',


            },
            green: {
                main: 'bg-green-300   text-black ',
                title: 'text-black',
                input: 'bg-green-100 bg-opacity-50 border-b-1 text-black ',


            }
        },
        tagsSection: {
            light: {
                main: 'bg-gray-300  text-gray-900 ',
                title: 'text-gray-900',
                input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',
            },
            dark: {
                main: 'bg-gray-700 ',
                title: 'text-white',
                input: 'bg-gray-100 bg-opacity-50 border-b-1 text-white ',

            },
            blue: {
                main: 'bg-blue-200 text-black',
                title: 'text-black',
                input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black ',


            },
            red: {
                main: 'bg-red-200  text-black',
                title: 'text-black',
                input: 'bg-red-100 bg-opacity-50 border-b-1 text-black ',



            },
            purple: {
                main: 'bg-purple-200   text-black ',
                title: 'text-black',
                input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black ',


            },
            yellow: {
                main: 'bg-yellow-200  text-black ',
                title: 'text-black',
                input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black ',


            },
            green: {
                main: 'bg-green-200   text-black ',
                title: 'text-black',
                input: 'bg-green-100 bg-opacity-50 border-b-1 text-black ',


            }
        },
        pageSetings: {
            light: {
                input: 'bg-gray-300  border-b-1 text-gray-700 ',

            },
            dark: {
                input: 'bg-gray-900  border-b-1 text-white ',


            },
            blue: {
                input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black',


            },
            red: {
                input: 'bg-red-100 bg-opacity-50 border-b-1 text-black',


            },
            purple: {
                input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black',


            },
            yellow: {
                input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black',



            },
            green: {
                input: 'bg-green-100 bg-opacity-50 border-b-1 text-black',

            }
        }

    };
    const textAligment = {
        aboutUs: {
            center: 'text-center',
            left: 'text-start',
            right: 'text-end',
        }

    }
    useEffect(() => {
        if (localStorage.getItem('locale')) {
            setLocale(localStorage.getItem('locale'));
        } else {
            setLocale('sr');

        }

    }, []);
    return (

        pageValues.publish == 1
            ?
            hero !== null && aboutUs !== null && contactInfo !== null  ?
                noImgsMenuSections !== null || menuSections !== null ?
                    <div className={"flex-col justify-center " + pageValues.font_family + " " + themes.main[pageValues.theme]}>

                        <HeaderMenu themes={themes} textBoxPosition={textBoxPosition} pageValues={pageValues} contactInfo={contactInfo} translate={translate} locale={locale} />
                        <Hero textBoxPosition={textBoxPosition} themes={themes} hero={hero} pageValues={pageValues} translate={translate} locale={locale} />
                        <AboutUs aboutUs={aboutUs} pageValues={pageValues} themes={themes} textAligment={textAligment} />
                        <div className={"flex w-full justify-center items-center " + themes.main[pageValues.theme]}>
                            <h1 className={"text-md sm:text-md md:text-4xl font-bold  text-center md:text-start py-4  "}>
                                {
                                    locale == 'en' ? "Our Menu" : 'Naš meni'
                                }
                            </h1>
                        </div>
                        {
                            menuSections ?
                                <Menu themes={themes} menuSections={menuSections} pageValues={pageValues} translate={translate} locale={locale} />
                                :

                                <NoImgsMenu themes={themes} menuSections={noImgsMenuSections} pageValues={pageValues} translate={translate} locale={locale} />

                        }
                        {
                            contactInfo.location ?
                                <MapProvider pageValues={pageValues} themes={themes} translate={translate} locale={locale} location={contactInfo.location} />

                                :
                                <div className={"flex flex-col  w-full justify-center-items-center text-center h-fit py-4 md:py-8 bg-gray-300 text-black "}>
                                    <h1 className={"font-bold text-lg md:text-4xl mb-4 "} >
                                        {locale == 'en' ? 'Map view' : 'Prikaz mape'}
                                    </h1>
                                    <div>
                                        {locale == 'en' ?
                                            'For displaing this section. Edit embeded map feald in Page setings.Embeded map feald editing available only in desktop view.'
                                            :
                                            'Za prikaz ove sekcije uredite embeded mapa polje u Podešavanjima stranice. Podešavanje polja embeded mapa dostupno samo u desktop varijanti aplikacije.'

                                        }
                                    </div>

                                </div>
                        }
                        <Footer themes={themes} contactInfo={contactInfo} pageValues={pageValues} translate={translate} locale={locale} />

                    </div>
                    :
                    <div className={"flex justify-center items-center  h-screen w-screen text-6xl text-center " + pageValues.font_family + " " + themes.main[pageValues.theme]}>
                        {locale == 'en' ?
                            'Finish editing your page' : "Završite uredjivanje svoje stranice"
                        }
                    </div>
                :
                <div className={"flex justify-center items-center  h-screen w-screen text-6xl text-center " + pageValues.font_family + " " + themes.main[pageValues.theme]}>
                    {locale == 'en' ?
                        'Finish editing your page' : "Završite uredjivanje svoje stranice"
                    }
                </div>
            :
            <div className={"flex justify-center items-center  h-screen w-screen text-6xl text-center " + pageValues.font_family + " " + themes.main[pageValues.theme]}>
                {locale == 'en' ?
                    'Page ofline' : "Stranica je offline"
                }
            </div>

    )
}

export default Index;