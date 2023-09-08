import "./Css/Bird.css"

import {useRef, useEffect} from "react";

function Bird({getTdSizeAction}){
    const td = useRef(null);

    function GetTdSizeAction() {
        return td.current == null ? null : td.current.offsetWidth;
    }

    useEffect(() => {
        if (getTdSizeAction != undefined){
            getTdSizeAction(GetTdSizeAction);
        }
    })

    return (
        <td ref={td} className="Bird">
            <img src="/Images/bird.png"/>
        </td>
    )
}

export default Bird;