import { useState, useContext, useEffect } from "react";

const HeaderMenu = ({themes, currentTheme, textBoxPosition, contactInfo, setContactInfo, fontFamily}) => {
  
    const [themeInUse, setThemeInUse] = useState(themes.hero[currentTheme]);
    const [menuPosition, setMenuPosition] = useState('left');
    const [dropDownMenu, setDropDownMenu] = useState('hidden');
    const setMenu = (e) => {
        if (e.target.value !== '') {
            setMenuPosition(e.target.value);
        }
    }
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
        setThemeInUse(themes.hero[currentTheme]);
    }, [currentTheme]);

    const setPhoneNumber = (value) => {
        setContactInfo({ ...contactInfo, phone: value });
    }
    const setInstagramLink = (value) => {
        setContactInfo({ ...contactInfo, instagram: value });
    }
    const setFacebookLink = (value) => {
        setContactInfo({ ...contactInfo, facebook: value });
    }
    const setOrderOnlineLink = (value) => {
        setContactInfo({ ...contactInfo, onlineOrder: value });
    }
    const setWebsiteLink = (value) => {
        setContactInfo({ ...contactInfo, websiteLink: value });
    }
    return (
        <div id="menuDiv" className={"w-full absolute top-0 h-fit  flex   " + themeInUse.menuDiv + " " + textBoxPosition.headerMenu[menuPosition] + " " + fontFamily }>
            <div className="flex md:flex-col">
                <div className="hidden md:flex gap-3 items-center font-bold">
                    <div className="flex-col gap-2">
                        <div className="flex gap-3 justify-center py-2">
                            <div onClick={e => scrollToTarget(e, 'aboutUsSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">About Us</a></div>
                            <div onClick={e => scrollToTarget(e, 'menuSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href="">Menu</a></div>
                            <div onClick={e => scrollToTarget(e, 'locationSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 "><a href=""> Location</a></div>
                            <div onClick={e => scrollToTarget(e, 'reviewsSection')} className="hover:cursor-pointer hover:underline hover:text-blue-500 me-4"><a href="">Reviews</a></div>
                        </div>
                        <div className="hidden lg:flex gap-2">
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-6 h-6 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                            <input type="text" className={"p-1 w-32 rounded-md " + themeInUse.selectThemeInput} value={contactInfo.onlineOrder} placeholder="Paste link to online order" onChange={e => setOrderOnlineLink(e.target.value)} />

                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-6 h-6 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                            <input type="text" className={"p-1 w-32 rounded-md " + themeInUse.selectThemeInput} value={contactInfo.websiteLink} placeholder="Paste phone number" onChange={e => setWebsiteLink(e.target.value)} />

                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-6 h-6 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                            <input type="text" className={"p-1 w-32 rounded-md " + themeInUse.selectThemeInput} value={contactInfo.phone} placeholder="Paste phone number" onChange={e => setPhoneNumber(e.target.value)} />

                        </div>
                        
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-6 h-6 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                            <input type="text" className={"p-1 w-32 rounded-md " + themeInUse.selectThemeInput} value={contactInfo.instagram} placeholder="Paste profile link" onChange={e => setInstagramLink(e.target.value)} />

                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-6 h-6 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                            <input type="text" className={"p-1 w-32 rounded-md " + themeInUse.selectThemeInput} value={contactInfo.facebook} placeholder="Paste profile link" onChange={e => setFacebookLink(e.target.value)} />

                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <div className="py-2 px-4 bg-blue-500 rounded-sm hover:cursor-pointer">
                                save
                            </div>
                        </div>


                    </div>
                    </div>
                   
                    
                </div>

                <div className="hidden md:flex justify-center p-4">
                    <select name="" id="" className={"p-3 rounded-md " + themeInUse.selectThemeInput} onChange={e => setMenu(e)}>
                        <option value="">menu position</option>
                        <option value="center">center</option>
                        <option value="left">left</option>
                        <option value="right">right</option>
                    </select>
                </div>
            </div>
            <div className={"md:hidden p-4 flex justify-start items-center w-full h-full z-40 "} >
                {
                    currentTheme === 'dark' ?
                        <div className="flex gap-4 w-full">
                            <img src="https://img.icons8.com/?size=50&id=8113&format=png" alt="" className={"w-6 h-6  bg-white opacity-100"} onClick={e => toggleDropDown()} />
                            <div className="flex gap-2  w-full justify-end">
                            <img className="w-8 h-8 rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" />
                                <img className="w-8 h-8 rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />

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
                    <div className=" px-6 py-4"><a href="#aboutUsSection">About Us</a></div>
                    <div className="    px-6 py-4"><a href="#menuSection">Menu</a></div>
                    <div className="    px-6 py-4"><a href="#locationSection"> Location</a></div>
                    <div className="    px-6 py-4" ><a href="#reviewsSection">Reviews</a></div>
                </div>
            </div>



        </div>
    )
}
export default HeaderMenu;