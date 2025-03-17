import { useState, useEffect } from "react";


const NoImgsMenuSectionItem = ({ item, pageValues }) => {

    const [modal, setModal] = useState(item)


    return (
        <div className={"grid w-full h-full grid-cols-2   py-8 px-4 justify-center  overflow-hidden " + (
            pageValues.theme !== 'dark' ? 'bg-white rounded-md ' : 'bg-transparent shadow-md shadow-black '
        )}>
            <div className="flex flex-col ">
                <div className="font-bold text-xl ">
                    {modal.title}

                </div>
                <div className="flex  py-2">
                    {modal.description}
                </div>
            </div>

            <div className="w-full flex justify-end font-bold text-xl">
                {modal.price}RSD
            </div>
        </div>
    )
}

export default NoImgsMenuSectionItem;