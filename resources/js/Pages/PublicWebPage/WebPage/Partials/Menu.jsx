import { useState, useContext, useEffect } from "react";
import MenuSection from "./MenuSection";


const Menu = ({themes,menuSections,pageValues,translate,locale}) => {


    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);


   

   
    

   

    return (
        
        <div id="menuSection" className={"flex flex-col items-center w-full h-fit py-6 " + themeInUse.main }>
           
            
            <div className="flex flex-col items-center w-5/6">
            <h1 className={"text-xl md:text-4xl font-bold  text-center md:text-start py-4 " + themeInUse.title}>
                    {
                        locale == 'en' ? "Our Menu" : 'Naš meni'
                    }
                </h1>
            {
                menuSections ?
                    menuSections.map((section,ind) => (
                        <MenuSection key={ind}section={section} sectionIndex={ind}translate={translate}locale={locale} pageValues={pageValues}/>

                    ))
                
                :
                <div className="py-10 px-5 border-gray-300 border-2">
                   { locale == 'en' ? "Menu not created" : 'Kreirajte svoj meni'}

                </div>
                
            }
            </div>
            

        </div>
    )


}

export default Menu;