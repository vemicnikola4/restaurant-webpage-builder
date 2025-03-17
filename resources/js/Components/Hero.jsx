import { useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import theme from "tailwindcss/defaultTheme";

const Hero = ({ page, textBoxPosition, themes, hero, setHero, setHeroTitle, pageValues, setPageValues, translate, locale, handleSubmitHero, bgErrors }) => {
    const [themeInUse, setThemeInUse] = useState(themes.heroSection[pageValues.theme]);
    useEffect(() => {
        setThemeInUse(themes.heroSection[pageValues.theme]);
    }, [pageValues]);
    return (
        <div className={" flex flex-col h-screen relative w-full justify-center " + textBoxPosition.heroSection[hero.textBoxPosition].parent} >
            <img src={hero.media} alt="" className="w-full h-full object-cover bg-center absolute bottom-0 opacity-90" />

            <div className="absolute top-16 mt-6 right-5 flex gap-2 ">

            </div>

            <div id="setBgDiv" className={"z-10 shadow-sm hover:shadow-lg flex flex-col gap-4 py-6 p-4 mb-4 rounded-lg  " + themeInUse.setBgDiv.main + " " + textBoxPosition.heroSection[hero.textBoxPosition].setBgDiv.main} >
                <div className={"flex flex-col justify-center  gap-4 " + textBoxPosition.heroSection[hero.textBoxPosition].setBgDiv.subDiv} >
                    <label htmlFor="">{locale == 'en' ? "Upload background image" : translate["Upload background image"]}</label>
                    <input
                        className={"px-2 py-1 rounded-lg " + themeInUse.setBgDiv.input} type="file" name="" onChange={e => setHero({ ...hero, media: e.target.files[0] })}
                    />
                    <p className="text-red-500">
                        {
                            bgErrors.media &&

                            <span>{
                                locale == 'en' ? bgErrors.media : translate[`${bgErrors.media}`]
                            }</span>
                        }
                    </p>

                </div>

            </div>
            <div id="titleSubTitleDiv" className={"z-10  flex flex-col gap-4 py-8 p-4 md:w-2/3 rounded-lg  " + themeInUse.titleSubTitleDiv.main + " " + textBoxPosition.heroSection[hero.textBoxPosition].titleSubTitleDiv} >
                <h1 className={" font-bold w-full "}>
                    <input className={"text-md sm:text-2xl md:text-4xl ps-2 rounded-lg w-full " + themeInUse.titleSubTitleDiv.input + " " + textBoxPosition.heroSection[hero.textBoxPosition].titleInput} type="text" placeholder={locale == 'en' ? "Enter Title" : translate["Enter Title"]} value={hero.title} onChange={e => setHeroTitle(e.target.value)} />
                </h1>
                <p className="text-red-500">
                    {
                        bgErrors.title &&
                        <span>{
                            locale == 'en' ? bgErrors.title : translate[bgErrors.title]
                        }</span>
                    }
                </p>
                <p className={" w-full " + textBoxPosition.heroSection[hero.textBoxPosition].titleInput}  >
                    <textarea className={"text-lg md:text-2xl font-light rounded-lg p-2  " + themeInUse.titleSubTitleDiv.textArea + " " + textBoxPosition.heroSection[hero.textBoxPosition].textArea} type="text" placeholder={locale == 'en' ? "Enter Subtitle" : "Unesite Podaslov"} onChange={e => setHero({ ...hero, subtitle: e.target.value })} value={hero.subtitle} />
                </p>
                <p className="text-red-500">
                    {
                        bgErrors.subTitle &&
                        <span>{
                            locale == 'en' ? bgErrors.subTitle : translate[bgErrors.subTitle]
                        }</span>
                    }
                </p>
                <div className="px-4 ">
                    {
                        locale == 'en' ?
                            <select name="textBoxPosition" className={'hidden md:block w-full p-2 rounded-lg ' + themeInUse.selectThemeInput} id="" onChange={e => setHero({ ...hero, textBoxPosition: e.target.value })} value={hero.textBoxPosition}>

                                <option value="center">Center</option>
                                <option value="right">Right</option>
                                <option value="left">Left</option>
                            </select>

                            :
                            <select name="textBoxPosition" className={'hidden md:block w-full p-2 rounded-lg ' + themeInUse.selectThemeInput} id="" onChange={e => setHero({ ...hero, textBoxPosition: e.target.value })} value={hero.textBoxPosition}>

                                <option value="center">Centralno</option>
                                <option value="right">Desno</option>
                                <option value="left">Levo</option>
                            </select>

                    }

                </div>
                <p className="text-red-500">
                    {
                        bgErrors.textBoxPosition &&
                        <span>{bgErrors.textBoxPosition}</span>
                    }
                </p>
            </div>
            {
                page.hero ?
                    <div className="w-full flex justify-center md:justify-end absolute bottom-10 pe-3">
                        <div className="w-32 py-3 p-6 rounded-sm bg-green-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer text-center " onClick={e => handleSubmitHero(e)}>{locale == 'en' ? "UPDATE HERO SECTION" : 'IZMENITE HERO SEKCIJU'}</div>
                    </div>
                    :
                    <div className="w-full flex justify-center md:justify-end absolute bottom-10 pe-3">
                        <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer text-center " onClick={e => handleSubmitHero(e)}>{locale == 'en' ? "CREATE HERO SECTION" : 'KREIRAJTE HERO SEKCIJU'}
                        </div>
                    </div>

            }



        </div>
    )


}

export default Hero;