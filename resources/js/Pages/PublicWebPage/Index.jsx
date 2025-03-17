import { useEffect, useState } from "react";
import Hero from "./Partials/Hero";
import { router } from "@inertiajs/react";
import RestaurantCards from "./Partials/RestaurantCards";
import Footer from "./Partials/Footer";
import FilteredRestaurantCards from "./Partials/FilteredRestorantCards";

const Index = ({ queryParams, pages }) => {
    const [locale, setLocale] = useState();
    queryParams = queryParams || {};

    const translate = {
        'Post Restaurant': 'Postavite restoran',
        "All municipality": "Sve Opštine",
        "Choose municipality": "Izaberite opštinu",
        'Filter by tags': 'Filtrirajte po tagovima',
        'Search by name': 'Pretražite po imenu',
        'heroMesage': 'Ovaj sajt je predvidjen da olakša restoranima prezentaciju svojih proizvoda sa jedne strane, a sa druge da ljudima olakša odabir mesta gde će jesti','Food truck':"Kombi restoran",
        'Pub': "Pab",
        'Bakery':"Pekara",
        'Pizza':"Pica",
        'Deli':"Deli",
        'Fine Dining':"Luksizni",
        'Buffet':"Švedski sto",
        'Bar':"Bar",
        'Bar and Brewery':"Bar i proizvodjna",
        'Fast food':"Brza hrana",
        'Cafeteria':"Kafeterija",
        'BBQ':"Roštilj",
        'Giros':"Giros",
        'Breakfast':"Doručak",
        'Lunch':"Ručak",'Dinner':"Večera", 'Dine in':"Sedenje", 
        'Drive through':"Auto-restoran",'Drinks':"Piće",'Kebab':"Kebab",'Indian':"Indijski",'Fish':"Riba",'Pasta':"Pasta",'Italian':"Intalijanski",'International':"Internacionalni",'Mexican':"Meksički",'Tai':"Tajlandski",'Chinese':"Kineski",'Japanese':"Japanski",'French':"Francuski",'French Fries':"Pomfrit",'Burgers':"Burgeri",'Chicken':"Piletina",'Traditional cousine':"Tradicionalni",'Snack Bar':"Snek bar","Burek":'Burek','Crepes':'Palačinke','Deserts':'Dezerti','Mediteranian':'Mediteranska','Salads':'Salate','Seafood':'Morski plodovi','Vegan':'Veganski','Sendwiches':'Sendviči','Vegetarian':'Vegetarijanski','All copyrights reserved':'Sva prava rezervisana'
    
    }
    function isEmpty(obj) {
        for (const prop in obj) {
          if (Object.hasOwn(obj, prop)) {
            return false;
          }
        }
      
        return true;
      }
    const onSearchRestaurantClicked = () => {
        if ( !isEmpty(queryParams) ){
            router.get(route('getRestaurants', queryParams));

        }else{
            router.get('/');
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
        <div className="" >
            <Hero translate={translate} locale={locale} setLocale={setLocale} queryParams={queryParams} onSearchRestaurantClicked={onSearchRestaurantClicked} />
            {isEmpty(queryParams) ? 
            <RestaurantCards pages={pages} locale={locale} queryParams={queryParams} translate={translate}/>
            :
            <FilteredRestaurantCards pages={pages} locale={locale} queryParams={queryParams} translate={translate}/>

            }
            <Footer locale={locale} translate={translate}/>
        </div>
    )
}

export default Index;