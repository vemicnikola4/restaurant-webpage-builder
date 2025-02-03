import { useEffect, useState } from "react";
import theme from "tailwindcss/defaultTheme";

const Hero = ({  textBoxPosition, themes, hero, pageValues, translate, locale }) => {
    const [themeInUse, setThemeInUse] = useState(themes.heroSection[pageValues.theme]);
   
    return (
        <div className={" flex flex-col h-screen relative w-full justify-center " + textBoxPosition.heroSection[hero.textBoxPosition].parent} >
            <img src={hero.media} alt="" className="w-full h-full object-cover bg-center absolute bottom-0 opacity-90" />

            <div className="absolute top-16 mt-6 right-5 flex gap-2 ">
               
            </div>
            
           
            <div id="titleSubTitleDiv" className={"z-10  flex flex-col gap-8 py-8 p-4 md:w-2/3 rounded-lg " + themeInUse.titleSubTitleDiv.main + " " + textBoxPosition.heroSection[hero.textBoxPosition].titleSubTitleDiv } >
                <h1 className={"text-4xl md:text-8xl font-bold w-full opacity-100  " + textBoxPosition.heroSection[hero.textBoxPosition].title}>
                    {hero.title}
                </h1>
               
                <p className={" w-full text-xl md:text-4xl " + textBoxPosition.heroSection[hero.textBoxPosition].subtitle}  >
                    {hero.subtitle}
                    
                </p>
               
              
             
            </div>
           

        </div>
    )


}

export default Hero;