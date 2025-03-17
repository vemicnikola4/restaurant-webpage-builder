import { use, useContext, useEffect, useState } from "react";



const AboutUs = ({ aboutUs, pageValues, themes, textAligment }) => {

    // const [aboutUsTitle, setAboutUsTitle] = useState('Set title. About us eg.');
    // const [aboutUsTextarea, setAboutUsTextarea] = useState('Set Description');
    // const [bgUrl, setBgUrl] = useState('https://cdn.pixabay.com/photo/2014/05/18/11/49/olive-oil-346997_960_720.jpg');
    // const [imageUrlInput, setImageUrlInput] = useState('Copy img url');



    const [hasImage, setHasImage] = useState(aboutUs.hasImage);

    const [themeInUse, setThemeInUse] = useState(themes.aboutUs[pageValues.theme]);




    return (
        hasImage ?
            <div id="aboutUsSection" className={"flex flex-col items-center py-12 " + themeInUse.main}>

                <div className={"h-screen py-12 w-5/6  px-4  md:flex md:flex-row gap-2 justify-center items-center relative " + themeInUse.main}>
                    <div className="h-1/2 md:h-5/6 md:basis-1/2 w-full  md:flex flex-col ">
                        <div className="w-full flex justify-center md:justify-start py-4 md:ps-2 text-center md:text-start ">
                            <h1 className={"w-full md:pe-6 text-xl  md:text-4xl md:text-md font-bold "}>
                                {aboutUs.title}
                            </h1>
                        </div>
                        <div className="w-full   flex justify-center items-center md:justify-start text-center md:text-start md:pe-6 text-xl md:text-2xl">
                            {aboutUs.description}

                        </div>
                    </div>
                    <div className="md:basis-1/2 w-full h-1/2 md:h-5/6    py-20 px-2 relative flex items-center rounded-lg relative">
                        <img src={aboutUs.imagePath} alt="" className="w-full h-full object-cover bg-center  absolute bottom-0 left-0 rounded-sm" />

                    </div>


                </div>

            </div>
            :
            <div className={"w-full py-12 h-fit " + themeInUse.main}>

                <div className={"h-fit py-4 w-full  px-4 flex justify-center items-center relative " + themeInUse.main}>
                    <div className={" w-5/6 flex-col text-" + aboutUs.textAligment}>
                        <div className="w-full flex justify-center py-12 md:ps-2  ">
                            <h1 className={"w-full md:pe-6 text-2xl md:text-4xl md:text-md font-bold "}>
                                {aboutUs.title}
                            </h1>
                        </div>
                        <div className={"w-full  h-fit py-12  flex items-center justify-center  md:pe-6 text-xl md:text-2xl text-" + aboutUs.textAligment + " justify-" + aboutUs.textAligment} >
                            {aboutUs.description}

                        </div>

                    </div>

                </div>

            </div>



    )
}

export default AboutUs;