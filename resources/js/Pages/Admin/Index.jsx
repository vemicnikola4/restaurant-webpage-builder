import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, useEffect } from "react";

const Index = ({ pages }) => {
    const [locale, setLocale] = useState();
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
        "Paste google maps link": "Nalepite link ka google mapama",
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
        'Drive through': "Auto-restoran", 'Drinks': "Piće", 'Kebab': "Kebab", 'Indian': "Indijski", 'Fish': "Riba", 'Pasta': "Pasta", 'Italian': "Intalijanski", 'International': "Internacionalni", 'Mexican': "Meksički", 'Tai': "Tajlandski", 'Chinese': "Kineski", 'Japanese': "Japanski", 'French': "Francuski", 'French Fries': "Pomfrit", 'Burgers': "Burgeri", 'Chicken': "Piletina", 'Traditional cousine': "Tradicionalni", 'Snack Bar': "Snek bar",
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
        'The contact mapLink link field format is invalid.': 'Polje map link nije u validnom formatu.',
        'Section must have at least one item.': 'Sekcija mora imati bar jedan proizvod',
        'The section note must be text.': 'Napomena u vezi meni sekcije mora biti u tekstualnom formatu',
        'set map link instruction': "Na google maps pronadjte svoju lokaciju. Kliknite na share dugme. Izaberite opciju embed a map. Onda kliknite na copy html opciju. I kopirajte u polje. Dostupno za uredjivanje samo na desktop varijanti.",
        'Something went wrong page not found': 'Nepostojeća stranica',
        "Paste maps location link": 'Nalepite link ka va google mapama',
        'The embeded map field format is invalid, see instruction.': 'Polje za embeded mapu nije u validnom formatu. Vidite uputstvo.',
        'All copyrights reserved': 'Sva prava rezervisana',
        'POST PAGE ONLINE': 'POSTAVITE STRANICU ONLINE',
        'SEE PAGE': 'VIDITE STRANICU',
        'Add menu section': 'Dodajte sekciju',
        'Add section button': "Klikom na ovo dugme dodaćete sekciju vašem meniju. Na primer: predjela, glavno jelo itd.",
        'Add item button': "Klikom na ovo dugme dodaćete proizvod vašoj sekciji.",
        "Paste embeded map": "Nalepite embeded mapu",
        "SET PAGE OFFLINE": "POSTAVITE STRANICU OFFLINE"

    }
    useEffect(() => {
        if (localStorage.getItem('locale')) {
            setLocale(localStorage.getItem('locale'));
        } else {
            setLocale('sr');

        }
    }, []);

    return (
        <div className="flex ">
<AuthenticatedLayout
            header={
                <div className='flex '>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {locale == 'en' ? 'Dashboard' : 'Komandna Tabla'}

                    </h2>

                </div>


            }
            locale={locale}
            setLocale={setLocale}
            translate={translate}
        >
            <div className="">
                <table className="gap-2 bg-gray-900 text-white" >
                    <thead>
                        <tr >
                            <th>Id</th>
                            <th>User id</th>
                            <th>Title</th>
                            <th>City</th>
                            <th>Tags</th>
                            <th>Theme</th>
                            <th>Font</th>
                            <th>Published</th>
                            <th>Visisted</th>
                        </tr>
                        <tr >
                            <th className="py-2">
                                <a href="/admin/user/create"> 
                                <div className="p-4 bg-blue-500 ruonded-sm hover:cursor-pointer">
                                    {locale == 'en' ? 'Add new' : 'Dodaj'}
                                </div>
                                </a>
                                
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            pages.data.map((page, ind) => (
                                <tr key={ind} >
                                    <td className=" text-center border border-white p-4 ">{page.id}</td>
                                    <td className=" text-center border border-white p-4 ">{page.user_id}</td>
                                    <td className=" text-center border border-white p-4 ">{page.title}</td>
                                    <td className=" text-center border border-white p-4 ">{page.city}</td>
                                    <td className=" text-center border border-white p-4 ">{page.tags}</td>
                                    <td className=" text-center border border-white p-4 ">{page.theme}</td>
                                    <td className=" text-center border border-white p-4 ">{page.font_family}</td>
                                    <td className=" text-center border border-white p-4 ">{page.publish}</td>
                                    <td className=" text-center border border-white p-4 ">{page.visited}</td>
                                    <td className=" text-center border border-white p-4 text-green-500 font-bold "><a href={`/admin/page/dashboard/${page.user_id}`}>Edit</a></td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </AuthenticatedLayout>
        </div>
        

    )
}
export default Index;