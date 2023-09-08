import "./Css/Road_404.css"
import Road_404_Generator from "./Road_404_Generator";
import road_404 from "./Game/Road_404";
import {useState, useRef, useEffect} from "react"

function Road_404(){
    road_404.GenerateLevel();
    road_404.RoadSize = 30;

    const [road, setRoad] = useState(road_404.Road)
    const trRef = useRef(null)
    let cellSize = null;
    let tdOffset = 0;
    let _playerOffsetSetter = (offset) => {};

    /*setTimeout(() =>{
        road_404.MoveRoad();
        setRoad(road_404.Road);
    }, 1000)*/

    function GetTdSize(getTdSize){
        //console.log("Size=", getTdSize());
        cellSize = getTdSize();
    }

    function SetPlannedTrMove(timeout){
        setTimeout(() =>{
            if (trRef.current == null || cellSize == null){
                SetPlannedTrMove(timeout);
                return;
            }

            tdOffset -= 1;
            let nextUpdateNeeded = true;

            if (tdOffset <= -cellSize){
                tdOffset += cellSize;
                nextUpdateNeeded = false;
            }


            if (nextUpdateNeeded){
                _playerOffsetSetter(-tdOffset);
                trRef.current.style.left = `${tdOffset}px`;
                SetPlannedTrMove(100);
            } else {
                road_404.MoveRoad();
                setRoad(road_404.Road);
            }
        }, timeout)
    }

    function PlayerOffsetSetterAction(playerOffsetSetter){
        _playerOffsetSetter = playerOffsetSetter;
    }

    useEffect(() => {
        return () => {
            trRef.current.style.left = `${tdOffset}px`;
            _playerOffsetSetter(-tdOffset);
        }
    })

    SetPlannedTrMove(1);

    return (
        <table>
            <tbody>
                <tr ref={trRef}>
                    <Road_404_Generator
                        getTdSizeAction={GetTdSize}
                        road={road}
                        playerOffsetSetterAction={PlayerOffsetSetterAction}
                    ></Road_404_Generator>
                </tr>
            </tbody>
        </table>)
}
export default Road_404