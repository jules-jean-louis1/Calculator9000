import React, {useState} from "react";

import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";
import {EqualButton} from "./EqualButton.jsx";
import {ResetOperation} from "./ResetOperation.jsx";
import {ItSOverNineThousand} from "./ItSOverNineThousand.jsx";



export function Calculator9000()
{
    const [expression, setExpression] = useState([]);
    const [result, setResult] = useState(0);

    const handleNumberClick = (number) => {
        if (number === "." && expression.includes(".")) {
            return;
        }
        if (expression.length > 0 && expression[expression.length - 1] === "." && number === ".") {
            return;
        }
        setExpression([...expression, number]);
    };

    const handleOperatorClick = () => {
        if (expression.length === 0) {
            console.log("empty expression");
        } else if (expression[0] === "+" || expression[0] === "-" || expression[0] === "*" || expression[0] === "/") {
            console.log("expression has only operator");
        } else {
            const expressionString = expression.join("");
            try {
                const result = eval(expressionString);
                setResult(result);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleReset = () => {
        setExpression([]);
        setResult(0);
    };

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/5">
                <Title name="Calculator 9000"/>
                <BeautifulScreen expression={expression} result={result}/>
                <ItSOverNineThousand result={result}/>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <ResetOperation resetClick={handleReset}/>
                        <NumberButton NumberClick={handleNumberClick}/>
                    </div>
                    <div className="flex flex-col">
                        <OperatorButton OperatorClick={handleNumberClick}/>
                        <EqualButton handleEqual={handleOperatorClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}