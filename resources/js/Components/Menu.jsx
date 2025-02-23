import { useState, useContext, useEffect } from "react";
import MenuSection from "./MenuSection";
import { v4 as uuidv4 } from "uuid";
import { router } from "@inertiajs/react";

const Menu = ({themes,menuSections,setMenuSections,pageValues,handleMenuSubmit,bgErrors,translate,locale}) => {


    const [themeInUse, setThemeInUse] = useState(themes.menu[pageValues.theme]);

    useEffect(()=>{
        setThemeInUse(themes.aboutUs[pageValues.theme]);
    },[pageValues]);


   
    

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
            pageId:pageValues.id,
        }
        setMenuSections([...menuSections, newSection]);
    }
   
    const onAddSectionItem = (section)=>{

    }
    const onDeleteSectionItem=()=>{
     

        console.log(sectionId,itemId);
    }
     const updateSection = (modal) => {
        let newSections =[];

        for( let i = 0; i < menuSections.length; i++ ){
            if ( menuSections[i].id !== modal.id ){
                newSections.push( menuSections[i]);
            }else{
                let modalItems = [];
                for( let i = 0; i < modal.items.length; i++ ){
                    if( modal.items[i] ){
                        modalItems.push(modal.items[i]);
                    }
                }
                modal.items = modalItems;
                newSections.push( modal);
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
        if(locale == 'en' ){
            deleteConfirmed = window.confirm("Are you sure you want to delete menu?");

        }else{
            deleteConfirmed = window.confirm("Da li ste sigurni da želite da obrišete meni?");

        }
        
        if (deleteConfirmed) {
            router.delete(route('menu.delete', pageValues.id));
           
        }
    }
   
    useEffect(() => {
        console.log(menuSections);
     }, [menuSections]);

    return (
        <div id="menuSection" className={"flex flex-col items-center md:items-start md:ps-5 w-full h-fit py-6 " + themeInUse.main }>
            
            <div className="md:ps-6 py-4 relative flex flex-wrap gap-4 justify-center ">
                <div className="w-64 py-2 px-4  rounded-sm bg-blue-500 hover:cursor-pointer flex justify-center items-centertext-center group " onClick={addMenuSection} >
                    {locale == 'en' ? 'Add menu section' : translate['Add menu section']}
                    <div className=" absolute bottom-15 ms-12 mt-2 opacity-0 scale-95 md:group-hover:opacity-100 group-hover:scale-100 transition-opacity transition-transform duration-300 bg-gray-200 p-4 rounded-md text-black z-10 ">
                    {locale == 'en' ? 'By clicking this button you will add a section to your menu. Main course, appetizers, dessert etc.' : translate['Add section button']}
                        
                    </div>
                </div>
                <div className="w-64 py-2 px-4  rounded-sm bg-yellow-500 hover:cursor-pointer flex justify-center items-centertext-center group " onClick={e=>deleteMenu()}>
                    {locale == 'en' ? 'Delete Menu' : 'Izbrišite meni'}
                  
                        
                </div>

            </div>
            <div className="py-6 flex flex-col items-center min-w-[300px] max-w-[300px] md:max-w-[1100px]">
            {
                    menuSections.map((section,ind) => (
                        <MenuSection translate={translate} bgErrors={bgErrors} sectionIndex={ind} key={section.id} section={section} onDeleteSectionItem={onDeleteSectionItem} deliteMenuSection={deliteMenuSection} updateSection={updateSection} locale={locale}/>

                    ))
                }
            </div>
            <div className="py-3 mb-3 flex self-centerw-full md:w-5/6">
                <div className="mt-2 w-full flex justify-center md:justify-end ">
                    <div className="w-32 py-3 p-6 rounded-sm bg-blue-500 bg-opacity-80 hover:bg-opacity-90 hover:cursor-pointer text-center" onClick={e=>handleMenuSubmit(e)}>SAVE</div>
                </div>
            </div>

        </div>
    )


}

export default Menu;