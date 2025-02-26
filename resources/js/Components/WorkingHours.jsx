import WorkingHoursItem from "./WorkingHoursItem";
import { useEffect, useState } from "react";


const WorkingHours = ({ pageValues, locale, themeInUse, setPageValues, page, bgErrors }) => {
    const [workingHours, setWorkingHours] = useState(pageValues.workingHours ||
        [
            {
                day: 'sunday',
                value: 0,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },
            {
                day: 'monday',
                value: 1,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },
            {
                day: 'tuesday',
                value: 2,

                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },
            {
                day: 'wednesday',
                value: 3,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },
            {
                day: 'thursday',
                value: 4,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },

            {
                day: 'friday',
                value: 5,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },
            {
                day: 'saturday',
                value: 6,
                open: false,
                openHours: null,
                openMinutes: null,
                closingHours: null,
                closingMinutes: null,
            },


        ]
    )
    const [showHours, setShowHours] = useState(false);
    const setOpenHours = (hours, index) => {
        if (hours >= 0 && hours <= 23) {
            const updatedWorkingHours = workingHours.map((element, i) => {
                if (i === index) {
                    // Update the object at the specific index
                    return { ...element, openHours: Number(hours) };
                }
                return element; // Return the original object for other indices
            });
            setWorkingHours(updatedWorkingHours);
        }



    }
    const setOpenMinutes = (minutes, index) => {
        if (minutes >= 0 && minutes <= 59) {

            const updatedWorkingHours = workingHours.map((element, i) => {
                if (i === index) {
                    // Update the object at the specific index
                    return { ...element, openMinutes: Number(minutes) };
                }
                return element; // Return the original object for other indices
            });
            setWorkingHours(updatedWorkingHours);
        }


    }
    const setClosingHours = (hours, index) => {
        if (hours >= 0 && hours <= 23) {

            const updatedWorkingHours = workingHours.map((element, i) => {
                if (i === index) {
                    // Update the object at the specific index
                    return { ...element, closingHours: Number(hours) };
                }
                return element; // Return the original object for other indices
            });
            setWorkingHours(updatedWorkingHours);
        }



    }
    const setClosingMinutes = (minutes, index) => {
        if (minutes >= 0 && minutes <= 59) {

            const updatedWorkingHours = workingHours.map((element, i) => {
                if (i === index) {
                    // Update the object at the specific index
                    return { ...element, closingMinutes: Number(minutes) };
                }
                return element; // Return the original object for other indices
            });
            setWorkingHours(updatedWorkingHours);
        }


    }
    const setOpen = (index) => {
        const updatedWorkingHours = workingHours.map((element, i) => {
            if (i === index) {
                // Update the object at the specific index
                return { ...element, open: !element.open }
                // if ( element.open ){
                //     return { ...element, open: !element.open,openHours:null, closingHours:null, openMinutes:null, closingMinutes:null };

                // }else{
                //     return { ...element, open: !element.open,openHours:page.workingHours[index].openHours, closingHours:page.workingHours[index].closingHours, openMinutes:page.workingHours[index].openMinutes, closingMinutes:page.workingHours[index].closingMinutes };

                // }
            }
            return element; // Return the original object for other indices
        });
        setWorkingHours(updatedWorkingHours);

    }
    useEffect(() => {
        setPageValues({ ...pageValues, workingHours: workingHours });
    }, [workingHours]);
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="pt-4 text-md font-bold text-blue-600 hover:cursor-pointer hover:underline" onClick={e => setShowHours(!showHours)}>
                <h1>{locale == 'en' ? 'Set up open hours' : 'Podesite radno vreme'}</h1>

            </div>
            <div className={showHours ? 'flex flex-col ' : 'hidden'}>
                <div className="pz-2 font-bold">
                    {locale == 'en' ? 'Set up hours in 24 hours format' : 'Podesite radno vreme u 24 časovnom formatu'}
                </div>
                <div className="text-red-500 py-4">

                    {
                        bgErrors['openHours'] || bgErrors['openMinutes'] || bgErrors['closingHours'] || bgErrors['closingMinutes'] ?
                            locale == 'en' ? 'Enter valid values for hours' : 'Unesite validne vrednosti za radno vreme'
                            :
                            null
                    }
                </div>
                {
                    workingHours.map((element, ind) => (
                        <div >

                            <WorkingHoursItem key={ind} item={element} themeInUse={themeInUse} locale={locale} setOpenHours={setOpenHours} setOpenMinutes={setOpenMinutes} index={ind} setClosingHours={setClosingHours} setClosingMinutes={setClosingMinutes} setOpen={setOpen} />
                        </div>

                    ))
                }
            </div>



        </div>
    )
}

export default WorkingHours;