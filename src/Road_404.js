import "./Css/Road_404.css"
import Road_404_Generator from "./Road_404_Generator";
import road_404 from "./Game/Road_404";
import {useState, useRef} from "react"

function Road_404(){
    road_404.GenerateLevel();
    road_404.RoadSize = 20;

    const [road, setRoad] = useState(road_404.Road)
    const trRef = useRef(null)
    let cellSize = null;
    const cellSizeReceiveTimeout = 100;

    /*setTimeout(() =>{
        road_404.MoveRoad();
        setRoad(road_404.Road);
    }, 1000)*/

    function GetTdSize(getTdSize){
        //console.log("Size=", getTdSize());
        cellSize = getTdSize();
    }

    let intervalId = setInterval(() =>{
        
    }, 100)

    return (
        <table>
            <tbody>
                <tr ref={trRef}>
                    <Road_404_Generator getTdSizeAction={GetTdSize} timeout={cellSizeReceiveTimeout} road={road}></Road_404_Generator>
                </tr>
            </tbody>
        </table>)
}
export default Road_404