import React, { useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";

const Calculator = () => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handleNumberClick = (number) => {
        setExpression((prevExpression) => prevExpression + number);
    };

    const handleOperatorClick = (operator) => {
        setExpression((prevExpression) => prevExpression + operator);
    };

    const handleEqualClick = () => {
        try {
            const parsedExpression = parseInt(expression, 10); // Conversion en base 10
            const result = eval(parsedExpression);
            setResult(result);
        } catch (error) {
            setResult("Erreur de calcul");
        }
    };
    return (
        <div>
            <BeautifulScreen expression={expression} result={result} />
            <div className="flex justify-center">
            <NumberButton handleNumberClick={handleNumberClick} />
                <div className="flex flex-col">
                    <OperatorButton handleOperatorClick={handleOperatorClick} />
                    <EqualButton handleEqualClick={handleEqualClick} />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
