import Player from "./Player";
import Tree from "./Tree";
import Bird from "./Bird";
import Empty from "./Empty";

function Road_404_MiddleLineGenerator({road}){
    let result = [];

    road.forEach((roadValue, index) => {
        switch (roadValue){
            case -1:
                result.push(<Player key={`Player_${index}`}></Player>)
                break;
            default:
                result.push(<Empty key={`Empty_${index}`}></Empty>)
        }
    })

    return result
}

export default Road_404_MiddleLineGenerator