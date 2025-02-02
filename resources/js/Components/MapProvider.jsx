import { useState, useEffect } from "react";


const MapProvider = ({ pageValues, themes, translate, locale, location }) => {
    const [embededUrl, setEmbededUrl] = useState(location);
   
    

   const start = location.indexOf('"') + 1; //position after '['
   const end = location.indexOf('"', start); // position of ']'
   let mapUrl;
   mapUrl = location.substring(start, end);
   

    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);
    const [mapUrlInput, setMapUrlInput] = useState('');

    useEffect(() => {
        setThemeInUse(themes.menu[pageValues.theme]);
    }, [pageValues]);
    
    // const setMapUrl = () => {
    //     setEmbededUrl(mapUrlInput);
    //     const start = embededUrl.indexOf('"') + 1; // position after '['
    //     const end = embededUrl.indexOf('"', start); // position of ']'
    //     mapUrl = embededUrl.substring(start, end);
    //     setLocation({ ...location, location: mapUrl });
    // }
    // useEffect(() => {
    //     const start = embededUrl.indexOf('"') + 1; // position after '['
    //     const end = embededUrl.indexOf('"', start); // position of ']'
    //     mapUrl = embededUrl.substring(start, end);
    //     setLocation({ ...location, location: mapUrl });
    // }, [embededUrl]);

    return (
        <div id="locationSection" className={"w-full h-fit md:h-screen  flex flex-col items-center pb-10 rounded-sm " + themeInUse.main}>
            <h1 className={"font-light text-4xl py-4 " + themeInUse.title} >
                { locale == 'en' ? 'Your location' : 'Vaša lokacija' }
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