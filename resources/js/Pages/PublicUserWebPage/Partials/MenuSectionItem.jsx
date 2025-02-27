import { useState, useEffect } from "react";


const MenuSectionItem = ({ item,pageValues }) => {

    const [modal, setModal] = useState(item)


    return (
        <div className={"min-w-[250px] max-w-[250px] block   rounded-md min-h-[350px] pb-6 relative "+ (
            pageValues.theme !== 'dark' ? 'bg-white shadow-md' : 'bg-transparent shadow-md '
        )}>

            <div className="w-full">
                <img src={modal.mediaPath} alt="" className="w-full object-cover  rounded-t-lg h-48" />
            </div>
            <div className="flex flex-col items-center py-6 ">
                <div className="flex justify-center  w-full">
                    <div className="flex flex-col gap-1 items-center border-b-2 ">
                        <div>
                            <h2 className="font-bold text-2xl">
                                {modal.itemTitle}

                            </h2>
                        </div>

                    </div>


                </div>


                <div className="my-4 px-4 text-center  w-full">
                    {modal.itemDescription}
                </div>

                <div className="flex justify-center">
                    <div>
                        <p className=" text-center border-b-2 " >
                            {modal.itemPrice}RSD
                        </p>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default MenuSectionItem;