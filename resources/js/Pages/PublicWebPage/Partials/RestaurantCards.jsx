import Pagination from "@/Components/Pagination";
import RestaurantCard from "./RestaurantCard"


const RestaurantCards = ({ pages, locale, queryParams, translate }) => {
    let restaurants;
    if (pages['pages']) {
        restaurants = pages['pages'];
    } else {
        restaurants = [];
    }
    let bbqRestaurants;
    if (pages['bbq']) {
        bbqRestaurants = pages['bbq'];
    } else {
        bbqRestaurants = [];
    }
    let girosRestaurants;
    if (pages['giros']) {
        girosRestaurants = pages['giros'];
    } else {
        girosRestaurants = [];
    }
    let burgersRestaurants;
    if (pages['burgers']) {
        burgersRestaurants = pages['burgers'];
    } else {
        girosRestaurants = [];
    } 
    let pizzaRestaurants;
    if (pages['pizza']) {
        pizzaRestaurants = pages['pizza'];
    } else {
        pizzaRestaurants = [];
    }


    return (
        <div className="flex  p-4 justify-center items-center py-10 bg-gray-100 ">

            <div className="flex flex-col gap-4 md:basis-5/6 px-12">
                {/* {
                    queryParams.length > 0 ?
                        'Ima params'
                        :
                        <h1 className="ps-4 text-2xl font-bold">
                            {
                                locale == 'en' ?
                                    'Top restaurants' :
                                    'Popularno'
                            }
                        </h1>
                } */}
                <div className="py-4 text-xl md:text-2xl lg:text-4xl py-4">
                    { queryParams.filters ||queryParams.title || queryParams.cities ?
                        locale == 'en' ? 'Results for query' : 'Filtrirani rezultati'

                        :
                        locale == 'en' ? 'Most visited' : 'Najpregledaniji restorani'

                    }
                </div>
                <div className="flex max-w-[300px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] overflow-x-auto space-x-4 gap-2 p-2">
                    {
                        restaurants.length > 0 ?
                            restaurants.map((page, ind) => (
                                <RestaurantCard page={page} key={ind} translate={translate} locale={locale} />
                            ))
                            :
                            <div>
                                {


                                    locale == 'en' ? 'No results for query' : 'Nema rezultata'
                                }
                            </div>
                    }
                </div>
                <div className="py-4 text-xl md:text-2xl lg:text-4xl py-4">
                    { queryParams.filters ||queryParams.title || queryParams.cities ?
                        locale == 'en' ? 'Results for query' : 'Filtrirani rezultati'

                        :
                        locale == 'en' ? 'Most visited for BBQ' : 'Najpregledaniji restorani za Roštilj'

                    }
                </div>
                <div className="flex max-w-[300px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] overflow-x-auto space-x-4 gap-2 p-2">
                    {
                        bbqRestaurants.length > 0 ?
                            bbqRestaurants.map((page, ind) => (
                                <RestaurantCard page={page} key={ind} translate={translate} locale={locale} />
                            ))
                            :
                            <div>
                                {


                                    locale == 'en' ? 'No results for query' : 'Nema rezultata'
                                }
                            </div>
                    }
                </div>
                <div className="py-4 text-xl md:text-2xl lg:text-4xl py-4">
                    { queryParams.filters ||queryParams.title || queryParams.cities ?
                        locale == 'en' ? 'Results for query' : 'Filtrirani rezultati'

                        :
                        locale == 'en' ? 'Most visited for Giros' : 'Najpregledaniji restorani za Giros'

                    }
                </div>
                <div className="flex max-w-[300px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] overflow-x-auto space-x-4 gap-2 p-2">
                    {
                        girosRestaurants.length > 0 ?
                            girosRestaurants.map((page, ind) => (
                                <RestaurantCard page={page} key={ind} translate={translate} locale={locale} />
                            ))
                            :
                            <div>
                                {


                                    locale == 'en' ? 'No results for query' : 'Nema rezultata'
                                }
                            </div>
                    }
                </div>
                <div className="py-4 text-xl md:text-2xl lg:text-4xl py-4">
                    { queryParams.filters ||queryParams.title || queryParams.cities ?
                        locale == 'en' ? 'Results for query' : 'Filtrirani rezultati'

                        :
                        locale == 'en' ? 'Most visited for Burgers' : 'Najpregledaniji restorani za Burgere'

                    }
                </div>
                <div className="flex max-w-[300px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] overflow-x-auto space-x-4 gap-2 p-2">
                    {
                        burgersRestaurants.length > 0 ?
                            burgersRestaurants.map((page, ind) => (
                                <RestaurantCard page={page} key={ind} translate={translate} locale={locale} />
                            ))
                            :
                            <div>
                                {


                                    locale == 'en' ? 'No results for query' : 'Nema rezultata'
                                }
                            </div>
                    }
                </div>
                <div className="py-4 text-xl md:text-2xl lg:text-4xl py-4">
                    { queryParams.filters ||queryParams.title || queryParams.cities ?
                        locale == 'en' ? 'Results for query' : 'Filtrirani rezultati'

                        :
                        locale == 'en' ? 'Most visited for Pizza' : 'Najpregledaniji restorani za Picu'

                    }
                </div>
                <div className="flex max-w-[300px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1200px] overflow-x-auto space-x-4 gap-2 p-2">
                    {
                        pizzaRestaurants.length > 0 ?
                            pizzaRestaurants.map((page, ind) => (
                                <RestaurantCard page={page} key={ind} translate={translate} locale={locale} />
                            ))
                            :
                            <div>
                                {


                                    locale == 'en' ? 'No results for query' : 'Nema rezultata'
                                }
                            </div>
                    }
                </div>
                
            {/* <Pagination links={pages['pages'].links} /> */}

            </div>


        </div>
    )
}


export default RestaurantCards