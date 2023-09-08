import {useRef, useEffect} from "react";

function Empty({getTdSizeAction}){
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
        <td ref={td}><div></div></td>
    )
}

export default Empty;