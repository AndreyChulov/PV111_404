import {useState} from "react"

function Player(){
    const animation = [
            "/Images/Gragoonee.png",
            "/Images/Gragoonee1.png",
            "/Images/Gragoonee.png",
            "/Images/Gragoonee2.png"]
    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage])

    setTimeout(args => {
        let animationIndex = currentSourceImage + 1;
        if (animationIndex == animation.length){
            animationIndex = 0;
        }
        setCurrentSourceImage(animationIndex)
        setUrl(animation[currentSourceImage])
    }, 125)

    return (
        <td rowSpan={2}>
            <img src={url}/>
        </td>
    )
}

export default Player;