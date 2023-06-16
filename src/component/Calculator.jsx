import React from "react";
import BeautifulScreen from "./BeautifulScreen.jsx";
import NumberButton from "./NumberButton.jsx";
import OperatorButton from "./OperatorButton.jsx";
import EqualButton from "./EqualButton.jsx";

const Calculator = () => {
    return (
        <div>
            <BeautifulScreen />
            <NumberButton />
            <OperatorButton />
            <EqualButton />
        </div>
    );
}

export default Calculator;