import { useState, useContext, useEffect } from "react";

const HeaderMenu = ({ themes, textBoxPosition, fontFamily, pageValues, contactInfo, setContactInfo,translate ,locale}) => {

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
        <div id="menuDiv" className={"w-full absolute top-0 right-0 left-0    flex text-black  " + textBoxPosition.headerMenu[contactInfo.menuPosition] + " " + themeInUse.menuDiv}>
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
                                <img className={"w-6 h-6 rounded-lg " } src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />

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
                    <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e => setContactInfo({ ...contactInfo, menuPosition: e.target.value })}>
                    
                        <option value="">menu position</option>
                        <option value="center">center</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                    </select>
                    :
                    <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e => setContactInfo({ ...contactInfo, menuPosition: e.target.value })}>
                    
                        <option value="">izaberite poziciju</option>
                        <option value="center">centralno</option>
                        <option value="left">levo</option>
                        <option value="right">desno</option>
                    </select>
                    }
                </div>
            </div>
            <div className={"md:hidden p-4 flex justify-start items-center w-full h-full z-20 "} >
                {
                    pageValues.theme === 'dark' ?
                        <div className="flex gap-4 w-full ps-12">
                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-6 h-6  bg-white opacity-100  "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end">
                                <a href={`tel:${contactInfo.phone}`}>
                                    <img className="w-8 h-8 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                                </a>
                                <a href={contactInfo.mapLink}>
                                    <img className="w-8 h-8 rounded-lg"  src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" />

                                </a>
                                <a href={contactInfo.onlineOrders}>
                                    <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                </a>
                                <a href={contactInfo.website}>
                                    <img className="w-8 h-8 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                </a>
                                <a href={contactInfo.instagram}>
                                    <img className="w-8 h-8 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                </a>
                                <a href={contactInfo.facebook}>
                                    <img className="w-8 h-8 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                                </a>

                            </div>

                        </div>

                        :
                        <div className="flex gap-4 w-full">

                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-6 h-6 opacity-100 "} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end">
                                <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />

                            </div>
                        </div>
                }

                <div className={dropDownMenu + " absolute top-10 left-18 font-bold rounded-md z-40 opacity-100 bg-opacity-100 " + themeInUse.dropDownMenu}>
                    <div onClick={e => scrollToTarget(e, 'aboutUsSection')} className=" px-6 py-4"><a href="#aboutUsSection">{locale == 'en' ? 'About us' : 'O nama'}</a></div>
                    <div onClick={e => scrollToTarget(e, 'menuSection')} className="    px-6 py-4"><a href="#menuSection">{locale == 'en' ? 'Menu' : 'Meni'}</a></div>
                    <div onClick={e => scrollToTarget(e, 'locationSection')} className="px-6 py-4"><a href="#locationSection">{locale == 'en' ? 'Location' : 'Lokacija'}</a></div>
                </div>
            </div>



        </div>
    )
}
export default HeaderMenu;