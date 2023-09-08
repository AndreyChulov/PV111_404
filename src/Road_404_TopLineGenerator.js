import Bird from "./Bird";
import Empty from "./Empty";

function Road_404_TopLineGenerator({getTdSizeAction, road}){
    let result = [];

    road.forEach((roadValue, index) => {
        if (index == 0){
            switch (roadValue){
                case 2:
                    result.push(<Bird getTdSizeAction={getTdSizeAction} key={`Bird_${index}`}></Bird>)
                    break;
                default:
                    result.push(<Empty getTdSizeAction={getTdSizeAction} key={`Empty_${index}`}></Empty>)
            }
        } else {
            switch (roadValue){
                case 2:
                    result.push(<Bird key={`Bird_${index}`}></Bird>)
                    break;
                default:
                    result.push(<Empty key={`Empty_${index}`}></Empty>)
            }
        }
    })

    return result
}

export default Road_404_TopLineGenerator