import { useState, useEffect } from "react";


const MenuSectionNoImgsItem = ({ index, item, deleteSectionItem, updateSectionItemsModal, sectionIndex, bgErrors, translate, locale }) => {

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
        <div className=" flex flex-col gap-2 md:basis-1/4 justify-center items-center bg-gray-300 shadow-lg shadow-black rounded-md p-4 relative overflow-hidden">
            <button className="py-1 px-2 bg-red-500 absolute top-0 right-0" onClick={e => deleteItem()}>
                x
            </button>




            <div className="flex w-full ">
                    <input type="text" className="bg-transparent font-bold text-center border-b-2 w-full" placeholder={locale == 'en' ? "Enter Title" : 'Unesite naslov'} value={titleInput} onChange={e => setModalTitle(e)} />
                <div className="flex flex-col gap-1 items-center">

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





            <div className="flex flex-col w-full">
                <textarea name="" placeholder={locale == 'en' ? "Enter item descriptiom" : 'Unesite opis proizvoda'} className="bg-transparent text-center border-b-2 w-full" id="" onChange={e => setModalDescription(e)} value={description}></textarea>
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
            </div>

            <div className="flex basis-1/4 justify-center">
                <div className="flex flex-col gap-1 items-center">
                    <div>
                        <p>
                            <input type="number" className="bg-transparent text-center border-b-2 " placeholder={locale == 'en' ? "Enter item price" : 'Unesite cenu proizvoda'} value={price} onChange={e => setModalPrice(e)} />
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
    )
}

export default MenuSectionNoImgsItem;