

const RestaurantCard = ({ page, translate, locale }) => {

    let date = new Date();
    let day = date.getDay();

    let h = date.getHours();
    let m = date.getMinutes();
   
    let isOpen = false;
    page.workingHours.forEach(element => {
        if (element.value == day) {
            if (h > element.openHours && h < element.closingHours) {

                isOpen = true;
            } else if (h == element.openHours) {
                if (m >= element.openMinutes) {
                    isOpen = true;
                } else {
                    isOpen = false;
                }
            } else if (h == element.closingHours) {
                if (m < element.closingHours) {
                    isOpen = true;
                } else {
                    isOpen = false;
                }
            }

        }
    })
    let tags = page.tags.split(',');
    return (
        <div className="min-w-[300px] max-w-[300px] flex flex-col bg-white shadow-md    rounded-md  pb-6 relative">
            <div className="w-full h-48 relative">
                <img src={page.media} alt="" className="w-full object-cover  rounded-t-md h-full " />
                <div className={"absolute top-0 left-0 p-2 font-black z-10  " }>
                <span className={isOpen ? "text-green-600 font-black underline " : "text-red-600 font-black underline "}>
               
                    {
                            
                        isOpen ?
                        locale == 'en' ? "Open" : "Otvoreno"
                        :
                        locale == 'en' ? "Closed" : "Zatvoreno"

                    }
                        </span>

                </div>
               
                <a href={`page/${page.id}`}><div className="flex font-bold w-full  absolute bottom-0 left-0 hover:cursor-pointer hover:underline">
                    <div className="p-4 bg-cyan-300 bg-opacity-60 hover bg-opacity-90 w-1/2 text-center rounded-r-sm hover:cursor-pointer hover:bg-opacity-100">
                        {locale == 'en' ? 'See more' : 'Detaljnije'}
                    </div>
                </div>
                </a>

            </div>

            <div className="flex flex-col py-4">
                <div className="flex justify-center items-center hover:underline font-bold text-2xl  py-2">
                    <a href={`page/${page.id}`}> <h1 className="text-xl font bold text-center">
                        {page.title}

                    </h1></a>

                </div>
                <div className="flex justify-center items-center py-2 font-bold text-md ">
                    {page.hero.subtitle}
                </div>
                <div className="grid grid-cols-3 gap-2 p-4 max-h-[150px] overflow-y-auto ">
                    {tags.map((tag, ind) => (
                        <div key={ind} className="  border-b-2 border-b-red-300 text-sm text-center flex items-center justify-center rounded-sm  ">
                            {locale == 'en' ? tag : translate[tag]}
                        </div>
                    ))}
                </div>

            </div>





        </div>
    )
}

export default RestaurantCard;