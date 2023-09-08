import "./Css/Bird.css"

import {useRef} from "react";

function Bird({getTdSizeAction, timeout}){
    const td = useRef(null);

    function GetTdSizeAction() {
        return td.current == null ? null : td.current.offsetWidth;
    }

    if (getTdSizeAction != undefined){
        setTimeout(()=> getTdSizeAction(GetTdSizeAction), timeout);
    }

    return (
        <td ref={td} className="Bird">
            <img src="/Images/bird.png"/>
        </td>
    )
}

export default Bird;