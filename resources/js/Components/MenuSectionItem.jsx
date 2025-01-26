import { useState, useEffect } from "react";


const MenuSectionItem = ({ index, item, deleteSectionItem, updateSectionItemsModal, sectionIndex, bgErrors, translate,locale }) => {

    const [modal, setModal] = useState(item)
    index = index;
    const [imgInput, setImgInput] = useState(modal.media);
    const [titleInput, setTitleInput] = useState(modal.itemTitle);
    const [description, setDescription] = useState(modal.itemDescription);
    const [price, setPrice] = useState(Number(modal.itemPrice));

    const setModalImg = () => {
        setModal({ ...modal, media: imgInput });

    }

    const setModalTitle = (e) => {

        setTitleInput(e.target.value);
        setModal((prevState) => ({ ...prevState, itemTitle: e.target.value }));

    }
    const setModalDescription = (e) => {

        setDescription(e.target.value);
        setModal({ ...modal, itemDescription: e.target.value });

    }
    const setModalPrice = (e) => {

        setPrice(e.target.value);
        setModal({ ...modal, itemPrice: e.target.value });

    }
    const deleteItem = () => {
        deleteSectionItem(index);

    }
    useEffect(() => {
        updateSectionItemsModal(modal);

    }, [modal]);

    return (
        <div className="min-w-[250px] max-w-[250px] block bg-gray-300 shadow-lg shadow-white rounded-md min-h-[350px] pb-6 relative">
            <button className="py-1 px-2 bg-red-500 absolute top-0 right-0" onClick={e => deleteItem()}>
                x
            </button>
            <div className="w-full">
                <img src={modal.mediaPath} alt="" className="w-full object-cover  rounded-t-lg h-48" />
            </div>
            <div>
                <div className="p-2 text-ellipsis overflow-hidden ...  hover:text-clip">
                    <input
                        className={"  "} type="file" name=""
                        onChange={e => setModal({ ...modal, media: e.target.files[0] })}

                    />
                    <div className="text-red-500 text-center">
                        {
                            bgErrors[`menu.${sectionIndex}.items.${index}.media`] ?
                            locale == 'en' ?
                                <p>{bgErrors[`menu.${sectionIndex}.items.${index}.media`]}</p>
                                :
                                translate[bgErrors[`menu.${sectionIndex}.items.${index}.media`]]
                                :
                                null
                        }
                    </div>
                </div>


                <div className="flex justify-center w-full">
                    <div className="flex flex-col gap-1 items-center">
                        <div>
                        <h2 className="font-bold text-2xl">
                        <input type="text" className="bg-transparent text-center border-b-2 w-full" placeholder="Enter Title" value={titleInput} onChange={e => setModalTitle(e)} />
                    </h2>
                        </div>
                        <div className="text-red-500">
                        {
                            bgErrors[`menu.${sectionIndex}.items.${index}.itemTitle`] ?
                            locale == 'en' ?
                                <p>{bgErrors[`menu.${sectionIndex}.items.${index}.itemTitle`]}</p>
                                :
                                <p>{translate[bgErrors[`menu.${sectionIndex}.items.${index}.itemTitle`]]}</p>

                                :
                                null
                        }
                    </div>
                    </div>
                    
                   
                </div>


                <div className="mt-2 px-2">
                    <textarea name="" placeholder="Enter item description" className="bg-transparent text-center border-b-2 w-full" id="" onChange={e => setModalDescription(e)} value={description}></textarea>
                </div>
                <div className="text-red-500 text-center">
                    {
                        bgErrors[`menu.${sectionIndex}.items.${index}.itemDescription`] ?
                        locale == 'en' ?
                            <p>{bgErrors[`menu.${sectionIndex}.items.${index}.itemDescription`]}</p>
                            :
                            <p>{translate[bgErrors[`menu.${sectionIndex}.items.${index}.itemDescription`]]}</p>

                            :
                            null
                    }
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col gap-1 items-center">
                        <div>
                            <p>
                                <input type="number" className="bg-transparent text-center border-b-2 " placeholder="Enter Item Price" value={price} onChange={e => setModalPrice(e)} />
                            </p>
                        </div>
                        <div className="text-red-500 text-center">
                            {
                                bgErrors[`menu.${sectionIndex}.items.${index}.itemPrice`] ?
                                locale == 'en' ?
                                    <p>{bgErrors[`menu.${sectionIndex}.items.${index}.itemPrice`]}</p>
                                    :
                                    <p>{translate[bgErrors[`menu.${sectionIndex}.items.${index}.itemPrice`]]}</p>

                                    :
                                    null
                            }
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default MenuSectionItem;