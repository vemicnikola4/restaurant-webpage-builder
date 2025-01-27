import { useState, useEffect } from "react";

const Footer = ({ themes, contactInfo, pageValues, translate,locale }) => {

    const [themeInUse, setThemeInUse] = useState(themes.footer[pageValues.theme]);
    useEffect(() => {
        setThemeInUse(themes.footer[pageValues.theme]);
    }, [pageValues]);

    // phone: page.contactInfo.phone,
    // instagram: page.contactInfo.instagram,
    // facebook: page.contactInfo.facebook,
    // onlineOrders: page.contactInfo.onlineOrders,
    // website: page.contactInfo.website,
    // menuPosition: page.contactInfo.menuPosition,
    // pageId: pageValues.id,


    return (
        <div className={"flex justify-center h-fit py-8 " + themeInUse.main}>

            <div className="w-5/6 flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className={"text-md md:text-4xl text-center " + themeInUse.title}>
                            {pageValues.title}
                        </h1>
                        {
                            locale == 'en' ?
                                <h2 className={"text-md md:text-2xl text-center " + themeInUse.title}>
                                    All copyrights reserved

                                </h2>

                                :
                                <h2 className={"text-md md:text-2xl text-center " + themeInUse.title}>
                                    {translate['All copyrights reserved']}


                                </h2>

                        }
                    </div>
                    <div className="flex py-10 gap-2">
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.phone}><img className="h-full w-full rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" /></a>
                        </div>
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a ><img className="h-full w-full rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/2048px-Google_Maps_icon_%282015-2020%29.svg.png" alt="" /></a>
                        </div>
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.onlineOrder}><img className="h-full w-full rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" /></a>
                        </div>

                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.websiteLink}><img className="h-full w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" /></a>
                        </div>



                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.instagram}><img className="h-full w-full rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png
                        " alt="" /></a>
                        </div>

                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.facebook} className="h-full w-full">
                                <img className="h-full w-full rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                            </a>
                        </div>
                    </div>




                </div>



            </div>

        </div>
    )
}

export default Footer;