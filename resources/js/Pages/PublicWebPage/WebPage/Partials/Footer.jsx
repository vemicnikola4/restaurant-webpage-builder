import { useState, useEffect } from "react";

const Footer = ({ themes, contactInfo, pageValues, translate, locale }) => {

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
        <div className={"flex justify-center h-fit py-12 " + themeInUse.main}>

            <div className="w-5/6 flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className={"text-xl md:text-6xl text-center " + themeInUse.title}>
                            {pageValues.title}
                        </h1>
                        {
                            locale == 'en' ?
                                <h2 className={"text-xl md:text-2xl text-center " + themeInUse.title}>
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
                            <a href={`tel:${contactInfo.phone}`}><img className="h-full w-full rounded-lg" src="https://static-00.iconduck.com/assets.00/phone-icon-256x256-2b7suaar.png" alt="" /></a>
                        </div>
                        <div className="flex justify-center w-12 h-12 rounded-lg">
                            <a href={contactInfo.mapLink}><img className="h-full w-full rounded-lg" src="https://media.istockphoto.com/id/1272693590/vector/red-pinpoint-symbol.jpg?s=612x612&w=0&k=20&c=xE3xh5Xd4vmMj5v4t_LMs6K4l7bDZhmjhMYoniR8sKM=" alt="" /></a>
                        </div>
                        {
                            contactInfo.onlineOrder &&
                            <div className="flex justify-center w-12 h-12 rounded-lg">
                                <a href={contactInfo.onlineOrder}><img className="h-full w-full rounded-lg" src="https://media.istockphoto.com/id/898475764/vector/shopping-trolley-cart-icon-in-green-circle-vector.jpg?s=612x612&w=0&k=20&c=W_b90qFRpj_FyLyI19xWqB6EoNSuJYwMSN9nnKkE9Hk=" alt="" /></a>
                            </div>
                        }

                        {
                            contactInfo.website &&
                            <div className="flex justify-center w-12 h-12 rounded-lg">
                                <a href={contactInfo.website}><img className="h-full w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDSis8YTAJOlHswnE8KHbEoW5Q3lwZSSMrA&s" alt="" /></a>
                            </div>

                        }


                        {
                            contactInfo.instagram &&
                            <div className="flex justify-center w-12 h-12 rounded-lg">
                                <a href={contactInfo.instagram}><img className="h-full w-full rounded-lg" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png
                        " alt="" /></a>
                            </div>
                        }
                        {
                            contactInfo.facebook &&

                            <div className="flex justify-center w-12 h-12 rounded-lg">
                                <a href={contactInfo.facebook} className="h-full w-full">
                                    <img className="h-full w-full rounded-lg" src="https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc" alt="" />
                                </a>
                            </div>
                        }
                    </div>




                </div>



            </div>

        </div>
    )
}

export default Footer;