import HeaderMenu from "@/Components/HeaderMenu";
import Hero from "@/Components/Hero";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {  useEffect, useState } from "react";
import { router, usePage } from '@inertiajs/react';
import PageSetings from "@/Components/PageSetings";
import AboutUs from "@/Components/AboutUs";
import { v4 as uuidv4 } from "uuid";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Footer";
import MapProvider from "@/Components/MapProvider";


const Index = ({ page }) => {
    const [locale, setLocale] = useState();

    const bgErrors = usePage().props.errors;
    

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
        'Buffet': "Švecki sto",
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
        'The contact mapLink link field format is invalid.':'Polje map link nije u validnom formatu.',
        'Section must have at least one item.': 'Sekcija mora imati bar jedan proizvod',
        'set map link instruction': "Na google maps pronadjte svoju lokaciju. Kliknite na share dugme. Izaberite opciju embed a map. Onda kliknite na copy html opciju. I kopirajte u polje. Dostupno za uredjivanje samo na desktop varijanti.",
        'Something went wrong page not found': 'Nepostojeća stranica',
        "Paste maps location link":'Nalepite link ka va google mapama',
        'The embeded map field format is invalid, see instruction.':'Polje za embeded mapu nije u validnom formatu. Vidite uputstvo.',
        'All copyrights reserved':'Sva prava rezervisana',
        'POST PAGE ONLINE':'POSTAVITE STRANICU ONLINE',
        'SEE PAGE' :'VIDITE STRANICU',
        'Add menu section':'Dodajte sekciju',
        'Add section button':"Klikom na ovo dugme dodaćete sekciju vašem meniju. Na primer: predjela, glavno jelo itd.",
        'Add item button':"Klikom na ovo dugme dodaćete proizvod vašoj sekciji.",
        "Paste embeded map":"Nalepite embeded mapu",
        "SET PAGE OFFLINE":"POSTAVITE STRANICU OFFLINE"

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
                setBgDiv: {
                    main: '',
                    subDiv: 'items-center ',
                },
                titleInput: 'text-center',
                textArea: 'text-center',
            },
            left: {
                parent: "items-start",
                titleSubTitleDiv: 'items-start md:ms-12 ',
                setBgDiv: {
                    main: 'items-start md:ms-12 ',
                    subDiv: 'items-start ',
                },
                titleInput: 'text-start ps-4 ',
                textArea: 'text-start ps-4 ',
            },
            right: {
                parent: "items-end",
                titleSubTitleDiv: 'items-end md:me-12 ',
                setBgDiv: {
                    main: 'items-end md:me-12 ',
                    subDiv: 'items-end ',
                },
                titleInput: 'text-end pe-4 ',
                textArea: 'text-end pe-4 ',
            }
        }
    }
    const themes =
    {
        main: {

            light: 'bg-gray-100 text-gray-700',
            dark: 'bg-gray-900 text-white ',
            blue: 'bg-blue-200 text-black',
            red: 'bg-red-200 text-black ',
            purple: 'bg-purple-300 text-black ',
            yellow: 'bg-yellow-200  text-black ',
            green: 'bg-green-200 text-black ',

        },
        heroSection: {
            light: {
                menuDiv: 'bg-gray-300 bg-opacity-70 border-b-2 border-b-gray-100 text-gray-900  ',
                dropDownMenu: 'bg-gray-300 text-gray-700',
                selectThemeInput: 'bg-gray-300  opacity-80 text-gray-900 ',
                setBgDiv: {
                    main: "bg-gray-300 border-2 border-gray-300 bg-opacity-70 shadow-sm hover:shadow-lg",
                    input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-gray-700"
                },
                titleSubTitleDiv: {
                    main: ' bg-gray-300 border-2 border-gray-300 bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700 ',
                    textArea: 'bg-gray-100 bg-opacity-50 border-b-1 text-gray-700',

                }

            },
            dark: {
                menuDiv: 'bg-gray-900 bg-opacity-70 border-b-2 border-b-gray-100 text-white ',
                dropDownMenu: 'bg-gray-700 text-white',

                selectThemeInput: 'bg-gray-700 text-white ',
                setBgDiv: {
                    main: "bg-gray-900 border-2 border-gray-700  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-gray-400 bg-opacity-50 border-b-1 text-white ',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-white"
                },
                titleSubTitleDiv: {
                    main: 'bg-gray-900 border-2 border-gray-700 bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-gray-400 bg-opacity-50 border-b-1 text-gray-200 ',
                    textArea: 'bg-gray-400 bg-opacity-50 border-b-1 text-gray-200',

                }
            },
            blue: {
                menuDiv: 'bg-blue-200  bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                dropDownMenu: 'bg-blue-200 text-black',
                selectThemeInput: 'bg-blue-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-blue-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-blue-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-blue-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-blue-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-blue-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            red: {
                menuDiv: 'bg-red-200 bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                dropDownMenu: 'bg-red-200 text-black',
                selectThemeInput: 'bg-red-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-red-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-red-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-red-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-red-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-red-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-red-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            purple: {
                menuDiv: 'bg-purple-200  bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                dropDownMenu: 'bg-purple-200 text-black',

                selectThemeInput: 'bg-purple-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-purple-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-purple-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-purple-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-purple-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-purple-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            yellow: {
                menuDiv: 'bg-yellow-200  bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                dropDownMenu: 'bg-yellow-200 text-black',

                selectThemeInput: 'bg-yellow-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-yellow-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-yellow-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-yellow-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-yellow-100 bg-opacity-50 border-b-1 text-black',

                }
            },
            green: {
                menuDiv: 'bg-green-200  bg-opacity-70 border-b-2 border-b-gray-100 text-black ',
                dropDownMenu: 'bg-green-200 text-black',

                selectThemeInput: 'bg-green-200  bg-opacity-70 text-black ',
                setBgDiv: {
                    main: "bg-green-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg ",
                    input: 'bg-green-100 bg-opacity-50 border-b-1 text-black ',
                    button: "bg-green-200 bg-opacity-50 hover:bg-opacity-80 text-black"
                },
                titleSubTitleDiv: {
                    main: 'bg-green-200 border-2 border-gray-100  bg-opacity-70 shadow-sm hover:shadow-lg',
                    input: 'bg-green-100 bg-opacity-50 border-b-1 text-black',
                    textArea: 'bg-green-100 bg-opacity-50 border-b-1 text-black',

                }
            }
        },
        aboutUs: {
            light: {
                main: 'bg-gray-300  text-gray-900 ',
                textBox: 'bg-gray-300 ',
                input: 'bg-gray-300  opacity-80 text-gray-900 ',
            },
            dark: {
                main: 'bg-gray-700 text-white',
                textBox: 'bg-gray-700 text-white ',
                input: 'bg-gray-700  border-b-1 text-white',



            },
            blue: {
                main: 'bg-blue-200 text-black',
                textBox: 'bg-blue-200 text-black ',


            },
            red: {
                main: 'bg-red-200  text-black',
                textBox: 'bg-red-200 text-black ',


            },
            purple: {
                main: 'bg-purple-200  text-black ',
                textBox: 'bg-purple-200 text-black ',

            },
            yellow: {
                main: 'bg-yellow-200  text-black ',
                textBox: 'bg-yellow-200 text-black ',

            },
            green: {
                main: 'bg-green-200  0 text-black ',
                textBox: 'bg-green-200 text-black ',

            }
        },
        menu: {
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
                main: 'bg-purple-300   text-black ',
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

    const [pageValues, setPageValues] = useState(page);

    let heroInitial;
    if (page.hero) {
        // heroInitial = {
        //     title: page.hero.title,
        //     subTitle: page.hero.subtitle,
        //     textBoxPosition: page.hero.text_box_position,
        //     media: page.hero.image,
        //     pageId: Number(page.hero.page_id),
        // };
        heroInitial = page.hero.data;
    } else {
        heroInitial = {
            title: pageValues.title,
            subTitle: '',
            textBoxPosition: 'center',
            media: '',
            pageId: Number(page.id)
        };
    }
    const [hero, setHero] = useState(heroInitial);
    //contactInfo
    let contactInitial;
    if (page.contactInfo) {
        // contactInitial = {
        //     phone: page.contactInfo.phone,
        //     instagram: page.contactInfo.instagram,
        //     facebook: page.contactInfo.facebook,
        //     onlineOrders: page.contactInfo.onlineOrders,
        //     website: page.contactInfo.website,
        //     menuPosition: page.contactInfo.menuPosition,
        //     location: page.contactInfo.location,
        //     pageId: pageValues.id,

        // };
        contactInitial = page.contactInfo.data;
    } else {
        contactInitial = {

            phone: null,
            instagram: null,
            facebook: null,
            onlineOrders: null,
            website: null,
            menuPosition: 'center',
            mapLink: null,
            pageId: pageValues.id,
            location : `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929771.0984429284!2d18.270405976483328!3d44.18431185116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1736416153743!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,

        };
    }
    let location = contactInitial.location ||  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929771.0984429284!2d18.270405976483328!3d44.18431185116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1736416153743!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    const [contactInfo, setContactInfo] = useState(contactInitial);
    // if (  contactInitial.location !== null ){
    //     location=  contactInitial.location;
    // }else{
    //     location = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929771.0984429284!2d18.270405976483328!3d44.18431185116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2sSerbia!5e0!3m2!1sen!2srs!4v1736416153743!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    // }
    
    let aboutUsInitial;
    if (page.aboutUs) {
       aboutUsInitial = {
           title: page.aboutUs.data.title,
           description: page.aboutUs.data.description,
           textAligment: page.aboutUs.data.textAligment,
           media: page.aboutUs.data.imagePath,
           hasImage: page.aboutUs.data.hasImage,
           pageId: page.aboutUs.data.pageId,
       }
    } else {
        aboutUsInitial = {
            title: "Set About Us Title",
            description: "Set sectionn desription",
            textAligment: 'center',
            media: 'https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg',
            hasImage: true,
            pageId: pageValues.id,
        }
    }
    const [aboutUs, setAboutUs] = useState(aboutUsInitial);

    let menuSectionsInitial = [];
    if (page.menuSections) {
        page.menuSections.map((section) => (
            menuSectionsInitial.push({
                id: section.id,
                title: section.title,
                items: section.items,
                pageId: pageValues.id,

            })
        ))
    } else {
        menuSectionsInitial.push({
            id: uuidv4(),
            title: '',
            items: [
                {
                    id: uuidv4(),
                    media: '',
                    itemTitle: '',
                    itemDescription: '',
                    itemPrice: 0
                }
            ],
            pageId: pageValues.id,

        });
    }
    const [menuSections, setMenuSections] = useState(menuSectionsInitial);


    const setHeroTitle = (value) => {
        // setPageValues({ ...pageValues, title: value });
        setHero({ ...hero, title: value });

    }

    const handleSubmitHero = (e) => {
        e.preventDefault();
        router.post('/hero', hero);

    }
    const handlePageSetingsSubmit = (e) => {
        router.post('/page', pageValues);

        

    }
    const handleAboutUsSubmit = (e) => {

        console.log(aboutUs);
        router.post('/aboutUs', aboutUs);



    }
    const handleMenuSubmit = (e) => {
        e.preventDefault();
        router.post('/menu', { menu: menuSections });

    }
    const onPostPageClicked=(e)=>{
        e.preventDefault();
        router.post('/postPage',pageValues);
        window.location.reload();
    }
    const [pageSetingsShow, setPageSetingsShow] = useState('hidden');

    const togglePageSetingsShow = () => {
        if (pageSetingsShow == 'hidden') {
            setPageSetingsShow('');
        } else {
            setPageSetingsShow('hidden');
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
        <AuthenticatedLayout
            header={
                <div className='flex '>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {locale == 'en' ? 'Dashboard' : translate['Dashboard']}

                    </h2>

                </div>


            }
            locale={locale}
            setLocale={setLocale}
            translate={translate}
        >
            <div className={"flex justify-center w-full h-fit relative " + pageValues.font_family + " " + themes.main[pageValues.theme]}>

                <div className="z-30 absolute top-0 left-4 md:hidden pt-2 ">
                    {
                        pageValues.theme === 'dark' ?
                            <div className="bg-gray-900">
                                <img src="https://cdn4.iconfinder.com/data/icons/interface-essential-vol-1/24/navigation-menu-1--button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png" alt="" className={"w-10 h-10  bg-gray-100 opacity-100 rounded-md hover:bg-white hover:cursor-pointer"} onClick={e => togglePageSetingsShow()} />


                            </div>

                            :
                            <div className="bg-gray-900">

                                <img src="https://cdn4.iconfinder.com/data/icons/interface-essential-vol-1/24/navigation-menu-1--button-parallel-vertical-lines-menu-navigation-three-hamburger-512.png" alt="" className={"w-10 h-10 opacity-100   rounded-md hover:bg-white hover:cursor-pointer "} onClick={e => togglePageSetingsShow()} />

                            </div>

                    }
                </div>

                <div className={"z-10 h-fit pb-5 absolute top-0 bottom-0 left-0 right-5 md:flex  basis-1/4 md:relative z-40 pt-10  " + themes.main[pageValues.theme] + " " + pageSetingsShow}>
                    <PageSetings contactInitial={contactInitial} onPostPageClicked={onPostPageClicked} pageValues={pageValues} themes={themes} setPageValues={setPageValues} locale={locale} translate={translate} handlePageSetingsSubmit={handlePageSetingsSubmit} togglePageSetingsShow={togglePageSetingsShow} contactInfo={contactInfo} setContactInfo={setContactInfo} bgErrors={bgErrors} />
                </div>
                <div className="md:flex md:flex-col w-full md:basis-3/4 relative ">
                    <HeaderMenu themes={themes} textBoxPosition={textBoxPosition} contactInfo={contactInfo} setContactInfo={setContactInfo} pageValues={pageValues} setPageValues={setPageValues} translate={translate} locale={locale}/>
                    <Hero textAligment={textAligment} textBoxPosition={textBoxPosition} themes={themes} hero={hero} setHero={setHero} setHeroTitle={setHeroTitle} pageValues={pageValues} setPageValues={setPageValues} locale={locale} translate={translate} handleSubmitHero={handleSubmitHero} bgErrors={bgErrors} />
                    <AboutUs themes={themes} aboutUs={aboutUs} setAboutUs={setAboutUs} pageValues={pageValues} textAligment={textAligment} handleAboutUsSubmit={handleAboutUsSubmit} />
                    <Menu themes={themes} menuSections={menuSections} setMenuSections={setMenuSections} pageValues={pageValues} handleMenuSubmit={handleMenuSubmit} bgErrors={bgErrors} translate={translate} locale={locale} />
                    <MapProvider pageValues={pageValues} themes={themes} translate={translate} locale={locale} location={location}/>
                    <Footer themes={themes} contactInfo={contactInfo} pageValues={pageValues} translate={translate} locale={locale} location={location} />

                </div>

            </div>
        </AuthenticatedLayout>



    )

}


export default Index;