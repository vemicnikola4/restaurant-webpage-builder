import HeaderMenu from "@/Components/HeaderMenu";
import Hero from "@/Components/Hero";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Children, createContext, useEffect, useState } from "react";
import { router,usePage } from '@inertiajs/react'


const Index = ({ page }) => {
    const[locale,setLocale]=useState();
    
    const bgErrors = usePage().props.errors;
    ;
    // bgErrors.forEach(error => {
    //     let index = error.indexOf('|');
    //     if ( locale == 'en'){
    //         error= error.substr(substring(0, index));

    //     }else{
    //         error= error.substr(substring(index + 1));

    //     }

    
    // })
    console.log(bgErrors);
   
    
  
    const translate ={
        'Profile':'Profil',
        'Logout':'Izlogujte se',
        'Dashboard' : 'Komandna tabla',
        "Copy Img Url" : "Kopirajte Url Slike",
        "Set background" : "Podesite Pozadinu",
        "Enter Title" : "Unesite Naslov",
        "Enter Subtitle" : "Unesite Podaslov",
        "SAVE" :"SAČUVAJ",
        "Upload background image": "Učitajte pozadinsku sliku",
        "The title field is required." : "Naslov je obavezan!",
        "The title field must be a string.":"Naslov mora biti sastavljen od slova!",
        "The title field must be at least 2 characters.":"Naslov mora imati najmanje 2 slova!",
        "The subtitle field is required.": "Pod Naslov je obavezan!",
        "The subtitle field must be a string.": "Podnaslov mora biti sastavljen od slova!",
        "The subtitle field must be at least 2 characters.":"Podnaslov mora imati najmanje 2 slova!",
        "The media field is required.":"Molim učitajte sliku!",
        "The title field must be an image.":"Fajl mora biti slika!",
        "Extentions allowed:jpg,jpeg,png,gif.":"Dozvoljene ektenzije:jpg,jpeg,png,gif",
        "Field required. Values allowed:center,left,right.":"Obavezno polje. Dozvoljene vrednosti:centralno,levo,desno.",
        "Ups something went wrong. Try again.":"Ups greška, probajte ponovo!",
    }
    const textBoxPosition = {
        headerMenu: {
            center: 'justify-center',
            left: 'justify-start ps-10',
            right: 'justify-end pe-10 ',
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
                titleSubTitleDiv: 'items-start ms-12 ',
                setBgDiv: {
                    main: 'items-start ms-12 ',
                    subDiv: 'items-start ',
                },
                titleInput: 'text-start ps-4 ',
                textArea: 'text-start ps-4 ',
            },
            right: {
                parent: "items-end",
                titleSubTitleDiv: 'items-end me-12 ',
                setBgDiv: {
                    main: 'items-end me-12 ',
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
            purple:'bg-purple-200 text-black ' ,
            yellow: 'bg-yellow-200  text-black ',
            green:'bg-green-200 text-black ', 

        },
        heroSection: {
            light: {
                menuDiv: 'bg-gray-300 bg-opacity-70 border-b-2 border-b-gray-100  ',
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
                main: 'bg-gray-700 ',
                textBox: 'bg-gray-700 text-white '


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
                main: 'bg-purple-200   text-black ',
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
    if ( page.hero ){
        heroInitial = {
            title: page.hero.title,
            subTitle: page.hero.subtitle,
            textBoxPosition: page.hero.text_box_position,
            media:page.hero.image,
            page_id:page.hero.page_id,
        };
     }else{
        heroInitial = {
            title: pageValues.title,
            subTitle: '',
            textBoxPosition: 'center',
            media:'',
            page_id:page.id
        };
     }
    const [hero, setHero] = useState(heroInitial);
    
   
    
   
    const setHeroTitle = (value) => {
        // setPageValues({ ...pageValues, title: value });
        setHero({ ...hero, title: value });

    }

    const [contactInfo, setContactInfo] = useState({
        phone: 'Paste phone number',
        instagram: 'Paste instagram profile',
        facebook: 'Paste facebook profile',
        onlineOrder: 'Order online link',
        websiteLink: 'Restaurant website link',
    });
    const handleSubmitHero = (e)=>{
        e.preventDefault();
        router.post('/hero', hero);
        window.location.reload();
        
    }
    
     useEffect(() => { 
        if(localStorage.getItem('locale')){
            setLocale(localStorage.getItem('locale'));
        }else{
            setLocale('sr');

        }
     }, []);
    console.log(hero);
    

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
        <div className={"flex justify-center h-screen  " + pageValues.font_family + " " + themes.main[pageValues.theme]}>
            {/* <HeaderMenu themes={themes} currentTheme={currentTheme} textBoxPosition={textBoxPosition} contactInfo={contactInfo} setContactInfo={setContactInfo} /> */}
            <Hero textAligment={textAligment} textBoxPosition={textBoxPosition} themes={themes} hero={hero} setHero={setHero} setHeroTitle={setHeroTitle} pageValues={pageValues} setPageValues={setPageValues} locale={locale} translate={translate} handleSubmitHero={handleSubmitHero} bgErrors={bgErrors}/>
        </div>
        </AuthenticatedLayout>
        


    )

}


export default Index;