import { useState, useEffect } from "react";


const NoImgsMenuSectionItem = ({ item }) => {

    const [modal, setModal] = useState(item)


    return (
        <div className="grid w-full h-full grid-cols-2 rounded-sm shadow-md shadow-black p-4 justify-center font-bold overflow-hidden">
            <div className="flex flex-wrap ">
                <div>
                    {modal.title}

                </div>
                <div className="flex  ">
                    {modal.description}
                </div>
            </div>

            <div className="w-full flex justify-end">
                {modal.price}RSD
            </div>
        </div>
    )
}

export default NoImgsMenuSectionItem;