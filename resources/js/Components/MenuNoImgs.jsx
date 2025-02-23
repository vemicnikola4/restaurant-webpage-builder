import { useState, useContext, useEffect } from "react";
import MenuSectionsNoImgs from "./MenuSectionNoImgs";
import { v4 as uuidv4 } from "uuid";
import { router } from "@inertiajs/react";

const MenuNoImgs = ({ themes, menuSections, setMenuSections, pageValues, handleNoImgsMenuSubmit, bgErrors, translate, locale }) => {


    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);

    useEffect(() => {
        setThemeInUse(themes.aboutUs[pageValues.theme]);
    }, [pageValues]);





    const addMenuSection = () => {
        const newSection = {
            id: uuidv4(),
            title: '',
            items: [
                {
                    id: uuidv4(),
                    media: '',
                    itemTitle: '',
                    itemDescription: '',
                    itemPrice: 0,
                }
            ],
            pageId: pageValues.id,
        }
        setMenuSections([...menuSections, newSection]);
    }

    const onAddSectionItem = (section) => {

    }
    const onDeleteSectionItem = () => {


        console.log(sectionId, itemId);
    }
    const updateSection = (modal) => {
        let newSections = [];

        for (let i = 0; i < menuSections.length; i++) {
            if (menuSections[i].id !== modal.id) {
                newSections.push(menuSections[i]);
            } else {
                let modalItems = [];
                for (let i = 0; i < modal.items.length; i++) {
                    if (modal.items[i]) {
                        modalItems.push(modal.items[i]);
                    }
                }
                modal.items = modalItems;
                newSections.push(modal);
            }
        }

        setMenuSections(newSections);

    }

    const deliteMenuSection = (id) => {

        setMenuSections((prevItems) => {
            return prevItems.filter(item => item.id !== id);

        });



    }

    function deleteMenu() {
        let deleteConfirmed;
        if (locale == 'en') {
            deleteConfirmed = window.confirm("Are you sure you want to delete menu?");

        } else {
            deleteConfirmed = window.confirm("Da li ste sigurni da želite da obrišete meni?");

        }

        if (deleteConfirmed) {
            router.delete(route('menuNoImgs.delete', pageValues.id));
           
        }
    }

    useEffect(() => {
        console.log(menuSections);
    }, [menuSections]);

    return (
        <div id="menuSection" className={"flex flex-col items-start p-4 w-full h-fit py-6 " + themeInUse.main}>
            {/* <div id="createMenuTitleDiv" className="md:p-8 flex justify-center">
                {/* <h1 className={"text-md sm:text-md md:text-4xl text-center font-bold md:text-start " + themeInUse.title}>{locale == 'en' ? 'Create Your Menu ' : 'Kreirajte svoj meni'}</h1> */}
                {/* <p className="text-md py-4">
                    {locale == 'en' ? "You can create your menu to be with or without roducy images, or combined. Menu must contain at least one menu section or your page will not be visible to clients." :
                        "Svoj meni možete urediti sa ili bez slika proizvoda. Važno je da postoji bar jedna sekcija menija inače vaša stranica neće biti vidljiva online."
                    }
                </p> */}
            {/* </div> */} 
            <div className="md:ps-6 py-4 relative  flex flex-wrap gap-4 justify-center ">
                <div className="w-64 py-2 px-4  rounded-sm bg-blue-500 hover:cursor-pointer flex justify-center items-centertext-center group " onClick={addMenuSection} >
                    {locale == 'en' ? 'Add menu section' : translate['Add menu section']}
                    <div className=" absolute bottom-15 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md text-black z-10 ">
                        {locale == 'en' ? 'By clicking this button you will add a section to your menu. Main course, appetizers, dessert etc.' : translate['Add section button']}

                    </div>
                </div>
                <div className="w-64 py-2 px-4  rounded-sm bg-yellow-500 hover:cursor-pointer flex justify-center items-centertext-center group " onClick={e => deleteMenu(e)}>
                    {locale == 'en' ? 'Delete Menu' : 'Izbrišite meni'}


                </div>

            </div>
            <div className="py-6 flex flex-col items-center w-full">
                {
                    menuSections.map((section, ind) => (
                        <MenuSectionsNoImgs translate={translate} bgErrors={bgErrors} sectionIndex={ind} key={section.id} section={section} onDeleteSectionItem={onDeleteSectionItem} deliteMenuSection={deliteMenuSection} updateSection={updateSection} locale={locale} />

                    ))
                }
            </div>
            <div className="py-3 mb-3 flex self-centerw-full md:w-5/6">
                <div className="mt-2 w-full flex justify-center md:justify-end ">
                    <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer text-center" onClick={e => handleNoImgsMenuSubmit(e)}>SAVE</div>
                </div>
            </div>

        </div>
    )


}

export default MenuNoImgs;