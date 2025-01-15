import { useState } from "react";


const Tag = ({title,onTagClicked})=>{

    const [clicked,setClicked] = useState(false);
    const onClickTag = ()=>{
        setClicked(!clicked);
        onTagClicked(title)
    }
    return (
        <div className={" p-2 flex items-center justify-center rounded-md hover:cursor-pointer hover:underline text-center  " +( clicked ? " bg-green-600 " : "bg-blue-500 ")} onClick={e=>onClickTag()}>
            <div>{title}</div>
            
        </div>
    )
}
export default Tag;