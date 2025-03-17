import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NoImgsMenuSectionItem from "./NoImgsMenuSectionItem";

const NoImgsMenuSection = ({ section, sectionIndex, translate, locale , pageValues }) => {


    const [menuSectionModal, setMenuSectionModal] = useState(section);
    const [showItems, setShowItems] = useState(true);



    return (
        <div className="p-3 w-full mt-2 relative">

            <div className="flex justify-center mb-3 hover:cursor-pointer hover:underline " onClick={e => setShowItems(!showItems)} >
                <h1 className="text-md md:text-2xl font-bold uppercase" >
                    {menuSectionModal.title}
                </h1>


            </div>
            {
                    menuSectionModal.note &&
                    <div className={(showItems ? "flex w-full py-4 justify-center p-2 text-center  font-bold text-md md:text-xl " : 'hidden')}>
                        {menuSectionModal.note}
                    </div>
                }

            <div className={(showItems ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4   p-2 md:p-4 ' : 'hidden')}>

                

                {
                    
                    menuSectionModal.items.map((item, ind) => (
                        <NoImgsMenuSectionItem key={ind} item={item} pageValues={pageValues}/>
                    ))
                }

            </div>



        </div>




    )
}

export default NoImgsMenuSection;