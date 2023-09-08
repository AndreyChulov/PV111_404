import {useRef} from "react";

function Empty({getTdSizeAction, timeout}){
    const td = useRef(null);

    function GetTdSizeAction() {
        return td.current == null ? null : td.current.offsetWidth;
    }

    if (getTdSizeAction != undefined){
        setTimeout(()=> getTdSizeAction(GetTdSizeAction), timeout);
    }

    return (
        <td ref={td}></td>
    )
}

export default Empty;