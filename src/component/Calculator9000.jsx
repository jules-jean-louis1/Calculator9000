import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";

export function Calculator9000() {
    return(
        <div className="w-1/4">
            <Title name="Calculator 9000"/>
            <BeautifulScreen/>
            <NumberButton/>
            <OperatorButton/>
        </div>
    )
}