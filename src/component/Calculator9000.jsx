import React, {useState} from "react";

import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";
import {EqualButton} from "./EqualButton.jsx";
import {ResetOperation} from "./ResetOperation.jsx";



export function Calculator9000()
{
    const [expression, setExpression] = useState("")
    const [result, setResult] = useState(0)

    const handleNumberClick = (number) => {
        setExpression(expression + number)
    }
    const handleOperatorClick = (operator) => {
        setExpression(expression + operator)
        const result2 = Function(`'use strict'; return (${expression})`)();
        setResult(result2)
        setExpression("")
    }
    const handleReset = () => {
        setExpression("")
        setResult(0)
    }
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/5">
                <Title name="Calculator 9000"/>
                <BeautifulScreen expression={expression} result={result}/>
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