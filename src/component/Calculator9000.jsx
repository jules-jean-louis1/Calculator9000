import React, {useState} from "react";

import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";
import {EqualButton} from "./EqualButton.jsx";
import {ResetOperation} from "./ResetOperation.jsx";
import {ItSOverNineThousand} from "./ItSOverNineThousand.jsx";
import { DeleteNumber } from "./DeleteNumber.jsx";



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
    const DeleteClick = () => {
        setExpression(expression.slice(0, -1));
    };
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/4 rounded-[10px] border p-2">
                <Title name="Calculator 9000"/>
                <BeautifulScreen expression={expression} result={result}/>
                <ItSOverNineThousand result={result}/>
                <div className="flex justify-between">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex items-center">
                            <ResetOperation resetClick={handleReset}/>
                            <DeleteNumber DeleteClick={DeleteClick}/>
                        </div>
                        <NumberButton NumberClick={handleNumberClick}/>
                    </div>
                    <div className="flex w-1/3">
                        <OperatorButton OperatorClick={handleNumberClick} handleEqual={handleOperatorClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}