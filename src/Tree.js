import "./Css/Tree.css"

//import {useRef} from "react";

function Tree(){
    //const td = useRef(null)

    setTimeout(() => {
        //console.log({
        //    offsetWidth:td.current.offsetWidth,
        //    clientWidth:td.current.clientWidth,
        //    scrollWidth:td.current.scrollWidth,
        //})

        //for (const value in td.current){
        //    if (typeof td.current[value] !== "function")
        //    console.log(value, "=", td.current[value])
        //}

    }, 200);

    return (
        <td className="Tree">
            <img src="/Images/tree.png"/>
        </td>
    )
}

export default Tree;