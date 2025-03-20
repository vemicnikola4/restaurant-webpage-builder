import { useEffect, useState } from "react";


const WorkingHoursItem = ({ item, themeInUse, locale, setOpenHours, setOpenMinutes, index, setClosingHours, setClosingMinutes, setOpen }) => {

    let ind = index;
    const [modal, setModal] = useState(item);
    const translate = {
        'monday': 'ponedeljak',
        'tuesday': 'utorak',
        'wednesday': 'sreda',
        'thursday': 'četvrtak',
        'friday': 'petak',
        'saturday': 'subota',
        'sunday': 'nedelja'
    }

    return (
        <div className="flex w-full justify-start gap-2">

            <div className="h-full flex gap-2 basis-1/3 items-center">
                <label htmlFor="">{locale == 'en' ? item.day : translate[item.day]}</label>
                <div className="flex w-full justify-end">
                    <input type="checkbox" name={modal.day} id="" onChange={e => setOpen(ind)} checked={item.open} />
                </div>

            </div>
            <div className={"basis-1/3 " + (!item.open ? 'opacity-20' : '')}>
                <div>
                    <label htmlFor="">{locale == 'en' ? 'Opening' : 'Otvaranje'}</label>
                    <select name="" value={item.openHours !== null ? item.openHours : ''} id="" className={"p-2 rounded-md w-full " + themeInUse.input} onChange={e => setOpenHours(e.target.value, ind)} disabled={!item.open}>
                        <option value="">h</option>

                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="5">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                    <select name="" id="" value={item.openMinutes !== null ? item.openMinutes : ''} className={"p-2 rounded-md w-full " + themeInUse.input} onChange={e => setOpenMinutes(e.target.value, ind)} disabled={!item.open}>
                        <option value="">min</option>

                        <option value="0">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    {/* <input type="number" value={item.openHours} placeholder="h"name="" min={0} max={23} id=""  />
                <input type="number"  value={item.openMinutes} placeholder="min" name="" min={0} max={59} id=""  /> */}
                </div>


            </div>
            <div className={"basis-1/3 " + (!item.open ? 'opacity-20' : '')}>
                <div>
                    <label htmlFor="">{locale == 'en' ? 'Closing ' : 'Zatvaranje'}</label>
                    <select name="" value={item.closingHours !== null ? item.closingHours : ''} id="" className={"p-2 rounded-md w-full " + themeInUse.input} onChange={e => setClosingHours(e.target.value, ind)} disabled={!item.open}>
                        <option value="">h</option>
                        <option value="0">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="5">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                    <select name="" id="" value={item.closingMinutes !== null ? item.closingMinutes : ''} className={"p-2 rounded-md w-full " + themeInUse.input} onChange={e => setClosingMinutes(e.target.value, ind)} disabled={!item.open}>
                        <option value="">min</option>
                        <option value="0">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    {/* <input type="number" value={item.closingHours} placeholder="h" name="" min={0} max={23} id="" />
                <input type="number" value={item.closingMinutes} placeholder="min" name="" min={0} max={59} id="" className={"p-2 rounded-md w-full " + themeInUse.input} onChange={e=>setClosingMinutes(e.target.value,ind)}  disabled={!item.open}/> */}
                </div>


            </div>

        </div>
    )
}
export default WorkingHoursItem;