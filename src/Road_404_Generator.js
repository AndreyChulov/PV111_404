import Road_404_TopLineGenerator from "./Road_404_TopLineGenerator";
import Road_404_MiddleLineGenerator from "./Road_404_MiddleLineGenerator";
import Road_404_BottomLineGenerator from "./Road_404_BottomLineGenerator";

function Road_404_Generator({road, getTdSizeAction, timeout}) {
    let roadWithHero = [-1]
    roadWithHero.push(...road)

    return [
        <tr>
            <Road_404_TopLineGenerator getTdSizeAction={getTdSizeAction} timeout={timeout} road={roadWithHero}></Road_404_TopLineGenerator>
        </tr>,
        <tr>
            <Road_404_MiddleLineGenerator road={roadWithHero}></Road_404_MiddleLineGenerator>
        </tr>,
        <tr>
            <Road_404_BottomLineGenerator road={roadWithHero}></Road_404_BottomLineGenerator>
        </tr>,
    ]
}

export default Road_404_Generator;