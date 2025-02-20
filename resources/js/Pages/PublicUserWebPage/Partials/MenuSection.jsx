import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuSectionItem from "./MenuSectionItem";

const MenuSection = ({ section,sectionIndex,translate,locale }) => {


    const [menuSectionModal, setMenuSectionModal] = useState(section);

   


    return (
        <div className="p-3 w-full mt-2 relative">
           
            <div className="w-64  self-center md:self-start mb-3">
                <h1 className="text-md md:text-2xl font-bold" >
                    {menuSectionModal.title}
                </h1>
              
             
            </div>
            {
                menuSectionModal.note && 
                <div className="flex w-full py-4 justify-center ps-0 md:justify-start md:ps-8 ">
               { menuSectionModal.note}
            </div>
            }
            
            <div className="flex overflow-x-auto space-x-4 p-4 ">

               

                <div className="flex justify-start gap-2 ">
                     {
                        menuSectionModal.items.map((item, ind) => (
                           <MenuSectionItem key={ind} item={item}/>
                        ))
                    }

                </div>
            </div>



        </div>




    )
}

export default MenuSection;