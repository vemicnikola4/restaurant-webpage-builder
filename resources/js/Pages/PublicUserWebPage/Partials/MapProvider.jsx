import { useState, useEffect } from "react";


const MapProvider = ({ pageValues, themes, translate, locale, location }) => {
   
    

   const start = location.indexOf('"') + 1; //position after '['
   const end = location.indexOf('"', start); // position of ']'
   let mapUrl;
   mapUrl = location.substring(start, end);
   

    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);

    
    

    return (
        <div id="locationSection" className={"w-full h-96  md:h-screen  flex flex-col items-center pb-10 rounded-sm " + themeInUse.main}>
            <h1 className={"font-bold text-lg md:text-4xl py-4 " + themeInUse.title} >
                { locale == 'en' ? 'How to fin us' : 'Kako do nas' }
            </h1>
            <div className="p-4 md:flex gap-2 justify-center bg-transparent">
                
              

            </div>
            <div className="w-5/6 h-full rounded-md">
                    
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
           
        </div>
    );
};

export default MapProvider;