import { useState } from "react";


const Tag = ({value, title,onTagClicked,isClicked})=>{

    const [clicked,setClicked] = useState(isClicked);
    const onClickTag = ()=>{
        setClicked(!clicked);
        onTagClicked(value)
    }
   
    return (
        <div className={" p-2 flex flex-wrap items-center justify-center text-sm  rounded-md hover:cursor-pointer hover:underline text-center .. " + ( clicked ? " bg-green-600 " : "bg-blue-500 ")} onClick={e=>onClickTag()}>
            <div className="text-ellipsis overflow-hidden ...  hover:text-clip ">{title}</div>
            
        </div>
    )
}
export default Tag;