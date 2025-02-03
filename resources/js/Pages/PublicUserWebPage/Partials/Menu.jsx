import { useState, useContext, useEffect } from "react";
import MenuSection from "./MenuSection";


const Menu = ({themes,menuSections,pageValues,translate,locale}) => {


    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);




   
    

   

    return (
        <div id="menuSection" className={"flex flex-col items-center w-full h-fit py-6 " + themeInUse.main }>
           
            
            <div className="flex flex-col items-center w-5/6">
            <h1 className={"text-md sm:text-md md:text-4xl font-bold  text-center md:text-start " + themeInUse.title}>
                    {
                        locale == 'en' ? "Our Menu" : 'Naš meni'
                    }
                </h1>
            {
                    menuSections.map((section,ind) => (
                        <MenuSection section={section} sectionIndex={ind}translate={translate}locale={locale} />

                    ))
                } 
            </div>
            

        </div>
    )


}

export default Menu;