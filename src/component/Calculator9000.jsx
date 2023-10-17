import React, {useState} from "react";

import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";
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
    const DeleteClick = () => {
        setExpression(expression.slice(0, -1));
    };
    const Save = async () => {
        const formData = new FormData();
        formData.append("expression", expression);
        formData.append("result", result);
        try {
            let saveOperation = await fetch('http://localhost/PHP/treatment.php',{
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });
            let response = await saveOperation.json();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/4 rounded-[10px] border border-[#11131c] p-2">
                <BeautifulScreen expression={expression} result={result}/>
                <ItSOverNineThousand result={result}/>
                <div className="flex justify-between space-x-3 pt-2">
                    <div className="flex flex-col w-full h-full">
                        <div className="flex items-center">
                            <ResetOperation resetClick={handleReset} DeleteClick={DeleteClick} saveOperation={Save}/>
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