import Player from "./Player";
import Tree from "./Tree";
import Bird from "./Bird";
import Empty from "./Empty";

function Road_404_BottomLineGenerator({road}){
    let result = [];

    road.forEach((roadValue, index) => {
        switch (roadValue){
            case -1://player on 2 rows middle and bottom
                break;
            case 1:
                result.push(<Tree key={`Tree_${index}`}></Tree>)
                break;
            default:
                result.push(<Empty key={`Empty_${index}`}></Empty>)
        }
    })

    return result
}

export default Road_404_BottomLineGenerator