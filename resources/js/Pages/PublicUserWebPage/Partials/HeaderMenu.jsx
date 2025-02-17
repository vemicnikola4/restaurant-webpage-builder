import { useState, useContext, useEffect } from "react";

const HeaderMenu = ({ themes, textBoxPosition, pageValues, contactInfo, translate, locale }) => {

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
        const targetDiv = document.getElementById(id);
        targetDiv.scrollIntoView({ behavior: "smooth" });
    };



    return (
        <div id="menuDiv" className={"z-10 w-full absolute top-0 right-0 left-0    flex  " + textBoxPosition.headerMenu[contactInfo.menuPosition] + " " + themeInUse.menuDiv}>
            <div className={"flex md:flex-col z-10  "}>
                <div className="hidden md:flex text-md md:text-lg gap-3 items-center font-bold">
                    <div className="flex gap-3 justify-center items-center py-2">
                        <div onClick={e => scrollToTarget(e, 'aboutUsSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'About us' : 'O nama'}</a></div>
                        <div onClick={e => scrollToTarget(e, 'menuSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'Menu' : 'Meni'}</a></div>
                        {
                            contactInfo.location ?
                                <div onClick={e => scrollToTarget(e, 'locationSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">{locale == 'en' ? 'Location' : 'Lokacija'}</a></div>
                                :
                                null
                        }



                        <div className="flex justify-center items-center gap-1">
                            <a href={`tel:${contactInfo.phone}`}>
                                <img className="w-6 h-6 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />

                            </a>


                        </div>
                        {
                            contactInfo.location == null ?
                                <div className="flex justify-center items-center gap-1">
                                    <a href={contactInfo.mapLink}>
                                        <img className="w-6 h-6 rounded-lg" src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />

                                    </a>


                                </div>
                                :
                                null
                        }

                        {
                            contactInfo.onlineOrder &&
                            <div className="flex justify-center items-center gap-1">
                                <a href={contactInfo.onlineOrder}>
                                    <img className="w-6 h-6 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                </a>



                            </div>
                        }
                        {
                            contactInfo.website &&
                            <div className="flex justify-center items-center gap-1">
                                <a href={contactInfo.website}>
                                    <img className="w-6 h-6 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                </a>



                            </div>

                        }

                        {
                            contactInfo.instagram &&
                            <div className="flex justify-center items-center gap-1">
                                <a href={contactInfo.instagram}>
                                    <img className="w-6 h-6 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                </a>



                            </div>
                        }
                        {
                            contactInfo.facebook &&
                            <div className="flex justify-center items-center gap-1">
                                <a href={contactInfo.facebook}>
                                    <img className="w-6 h-6 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                                </a>



                            </div>

                        }




                    </div>



                </div>


            </div>
            <div className={"md:hidden p-4 flex justify-start items-center w-full h-full z-20 "} >
                {
                    pageValues.theme === 'dark' ?
                        <div className="flex gap-4 w-full ps-12">
                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-8 h-8  bg-white opacity-100  "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end">
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
                        <div className="flex gap-4 w-full">

                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-8 h-8 opacity-100 "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end">
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
                }

                <div className={dropDownMenu + " absolute top-12 left-18 font-bold rounded-md z-40 opacity-100 bg-opacity-100 py-4 px-8 text-center " + themeInUse.dropDownMenu}>
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