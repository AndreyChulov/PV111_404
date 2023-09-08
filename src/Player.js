import {useState, useRef} from "react"
import ".//Css/Player.css"

function Player({playerOffsetSetterAction}){
    const animation = [
            "/Images/Gragoonee.png",
            "/Images/Gragoonee1.png",
            "/Images/Gragoonee.png",
            "/Images/Gragoonee2.png"]
    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage])
    const tdRef = useRef(null);

    function td_OnLoad(){
        playerOffsetSetterAction(setPlayerOffset);
    }

    function setPlayerOffset(offset){
        if (tdRef.current == null){
            return;
        }

        tdRef.current.style.left = `${offset}px`;
    }

    setTimeout(args => {
        let animationIndex = currentSourceImage + 1;
        if (animationIndex == animation.length){
            animationIndex = 0;
        }
        setCurrentSourceImage(animationIndex)
        setUrl(animation[currentSourceImage])
    }, 125)

    return (
        <td rowSpan={2} className="Player" ref={tdRef} onLoad={td_OnLoad}>
            <img src={url}/>
        </td>
    )
}

export default Player;