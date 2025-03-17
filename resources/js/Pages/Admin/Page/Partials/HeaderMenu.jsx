import { useState, useContext, useEffect } from "react";

const HeaderMenu = ({ themes, textBoxPosition, fontFamily, pageValues, contactInfo, setContactInfo, translate, locale,updateMenuPositionSubmit }) => {

    const [themeInUse, setThemeInUse] = useState(themes.heroSection[pageValues.theme]);

    const [dropDownMenu, setDropDownMenu] = useState('hidden');

    const toggleDropDown = () => {
        if (dropDownMenu == 'hidden') {
            setDropDownMenu('block');
        } else {
            setDropDownMenu('hidden');
        }
    }
    const scrollToTarget = (e, id) => {
        e.preventDefault();
        console.log(id);
        const targetDiv = document.getElementById(id);
        targetDiv.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        setThemeInUse(themes.heroSection[pageValues.theme]);
    }, [pageValues]);


    return (
        <div id="menuDiv" className={"z-10 w-full absolute top-0 right-0 left-0  h-10  flex   " + themeInUse.menuDiv + " " +textBoxPosition.headerMenu[contactInfo.menuPosition]  }>
            <div className={"flex md:flex-col z-10  "}>
                <div className="hidden md:flex gap-3 items-center font-bold">
                    <div className="flex gap-3 justify-center items-center py-2">
                        <div onClick={e => scrollToTarget(e, 'aboutUsSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'About us' : 'O nama'}</a></div>
                        <div onClick={e => scrollToTarget(e, 'menuSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'Menu' : 'Meni'}</a></div>
                        <div onClick={e => scrollToTarget(e, 'locationSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'Location' : 'Lokacija'}</a></div>



                        <div className="flex justify-center items-center gap-1">
                            <a href={`tel:${contactInfo.phone}`}>
                                <img className="w-6 h-6 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />

                            </a>


                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <a href={contactInfo.mapLink}>
                                <img className={"w-6 h-6 rounded-lg "} src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />

                            </a>


                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <a href={contactInfo.onlineOrders}>
                                <img className="w-6 h-6 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                            </a>



                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <a href={contactInfo.website}>
                                <img className="w-6 h-6 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                            </a>



                        </div>


                        <div className="flex justify-center items-center gap-1">
                            <a href={contactInfo.instagram}>
                                <img className="w-6 h-6 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                            </a>



                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <a href={contactInfo.facebook}>
                                <img className="w-6 h-6 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                            </a>



                        </div>



                    </div>



                </div>

                <div className="hidden md:flex justify-center p-4">
                    {locale == 'en' ?
                        <div className="flex gap-2">
                            <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e => setContactInfo({ ...contactInfo, menuPosition: e.target.value })}>

                                <option value="">menu position</option>
                                <option value="center">center</option>
                                <option value="left">left</option>
                                <option value="right">right</option>
                            </select>
                                <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer text-center " onClick={e => updateMenuPositionSubmit(e)}>{locale == 'en' ? "SAVE" : translate["SAVE"]}</div>
                        </div>

                        :
                        <div className="flex gap-2">
                            <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e => setContactInfo({ ...contactInfo, menuPosition: e.target.value })}>

                                <option value="">izaberite poziciju</option>
                                <option value="center">centralno</option>
                                <option value="left">levo</option>
                                <option value="right">desno</option>
                            </select>
                                <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-90 hover:bg-opacity-100 hover:cursor-pointer text-center " onClick={e => updateMenuPositionSubmit(e)}>{locale == 'en' ? "SAVE" : translate["SAVE"]}</div>
                        </div>

                    }
                </div>
            </div>
            <div className={"md:hidden p-4 flex justify-start items-center w-full h-full z-20 "} >
                {
                    pageValues.theme === 'dark' ?
                        <div className="flex gap-4 w-full ps-12">
                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-8 h-8  bg-white opacity-100  "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end items-center ">
                            <div onClick={e => setShowHours(!showHours)} className="px-2 font-bold ">{locale == 'en' ? 'Hours' : 'Radno vreme'}</div>
                                <div className={showHours ? ' z-40 flex flex-col absolute mt-14 top-14 left-8 p-4 bg-opacity-100 rounded-sm ' + themeInUse.dropDownMenu : 'hidden'}>
                                    <span className={isOpen ? 'text-green-500' : 'text-red-500'}>{isOpen ? locale == 'en' ? 'Open' : 'Otvoreno' : locale == 'en' ? 'Closed' : 'Zatvoreno'}</span>

                                    {pageValues.workingHours.map((day, ind) =>

                                        day.open ?
                                            <div key={ind}>
                                                <span>{day.day} - </span>
                                                <span>{day.openHours < 10 ? '0' : null}{day.openHours} : </span>
                                                <span>{day.openMinutes < 10 ? '0' : null}{day.openMinutes} - </span>
                                                <span>{day.closingHours < 10 ? '0' : null}{day.closingHours} : </span>
                                                <span>{day.closingMinutes < 10 ? '0' : null}{day.closingMinutes}</span>


                                            </div>
                                            :
                                            <div key={ind}>
                                                <span>{day.day} - </span>
                                                <span className="text-red-500">{locale == 'en' ? 'Closed' : 'Zatvoreno'}</span>



                                            </div>


                                    )}
                                </div>
                                <a href={`tel:${contactInfo.phone}`}>
                                    <img className="w-8 h-8 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                                </a>

                                <a href={contactInfo.mapLink}>
                                    <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />
                                </a>
                                {
                                    contactInfo.onlineOrder &&
                                    <a href={contactInfo.onlineOrder}>
                                        <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                    </a>
                                }
                                {
                                    contactInfo.website &&
                                    <a href={contactInfo.website}>
                                        <img className="w-8 h-8 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                    </a>
                                }

                                {
                                    contactInfo.instagram &&
                                    <a href={contactInfo.instagram}>
                                        <img className="w-8 h-8 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                    </a>
                                }
                                {
                                    contactInfo.facebook &&
                                    <a href={contactInfo.facebook}>
                                        <img className="w-8 h-8 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                                    </a>
                                }


                            </div>

                        </div>

                        :
                        <div className="flex gap-4 w-full ps-12 ">

                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-8 h-8 opacity-100 "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full items-center justify-end">
                                <div onClick={e => setShowHours(!showHours)} className="px-2 font-bold ">{locale == 'en' ? 'Hours' : 'Radno vreme'}</div>
                                <div className={showHours ? ' z-40 flex flex-col absolute mt-14 top-14 left-8 p-4 bg-opacity-100 rounded-sm ' + themeInUse.dropDownMenu : 'hidden'}>
                                    <span className={isOpen ? 'text-green-500' : 'text-red-500'}>{isOpen ? locale == 'en' ? 'Open' : 'Otvoreno' : locale == 'en' ? 'Closed' : 'Zatvoreno'}</span>

                                    {pageValues.workingHours.map((day, ind) =>

                                        day.open ?
                                            <div key={ind}>
                                                <span>{day.day} - </span>
                                                <span>{day.openHours < 10 ? '0' : null}{day.openHours} : </span>
                                                <span>{day.openMinutes < 10 ? '0' : null}{day.openMinutes} - </span>
                                                <span>{day.closingHours < 10 ? '0' : null}{day.closingHours} : </span>
                                                <span>{day.closingMinutes < 10 ? '0' : null}{day.closingMinutes}</span>


                                            </div>
                                            :
                                            <div key={ind}>
                                                <span>{day.day} - </span>
                                                <span className="text-red-500">{locale == 'en' ? 'Closed' : 'Zatvoreno'}</span>



                                            </div>


                                    )}
                                </div>
                                <a href={`tel:${contactInfo.phone}`}>

                                    <img className="w-8 h-8 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                                </a>


                                {
                                    !contactInfo.location && 
                                    <a href={contactInfo.mapLink}>
                                    <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />
                                </a>
                                }
                             
                                {
                                    contactInfo.onlineOrder &&
                                    <a href={contactInfo.onlineOrder}>
                                        <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                    </a>
                                }
                                {
                                    contactInfo.website &&
                                    <a href={contactInfo.website}>
                                        <img className="w-8 h-8 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                    </a>
                                }

                                {
                                    contactInfo.instagram &&
                                    <a href={contactInfo.instagram}>
                                        <img className="w-8 h-8 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                    </a>
                                }
                                {
                                    contactInfo.facebook &&
                                    <a href={contactInfo.facebook}>
                                        <img className="w-8 h-8 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                                    </a>
                                }


                            </div>
                        </div>
                }

                <div className={dropDownMenu + " absolute mt-14 top-12 left-18 font-bold rounded-sm z-40 opacity-100 bg-opacity-100 py-2 px-8 text-center " + themeInUse.dropDownMenu}>
                    <div onClick={e => scrollToTarget(e, 'aboutUsSection')} className=" px-6 py-4"><a href="#aboutUsSection">{locale == 'en' ? 'About us' : 'O nama'}</a></div>
                    <div onClick={e => scrollToTarget(e, 'menuSection')} className="    px-6 py-4"><a href="#menuSection">{locale == 'en' ? 'Menu' : 'Meni'}</a></div>
                    {
                        contactInfo.location ?
                            <div onClick={e => scrollToTarget(e, 'locationSection')} className=" px-6 py-4"><a href="">{locale == 'en' ? 'Location' : 'Lokacija'}</a></div>
                            :
                            null
                    }

                </div>
            </div>



        </div>
    )
}
export default HeaderMenu;