import {useState} from "react";

import {Title} from "./Title.jsx";
import {BeautifulScreen} from "./BeautifulScreen.jsx";
import {NumberButton} from "./NumberButton.jsx";
import {OperatorButton} from "./OperatorButton.jsx";
import {ResetOperation} from "./ResetOperation.jsx";
import {ItSOverNineThousand} from "./ItSOverNineThousand.jsx";
import {History} from "./History.jsx";



export function Calculator9000()
{
    const [expression, setExpression] = useState([]);
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState([]);
    const [errorF, setErrorF] = useState(false);
    const [messageError, setMessageError] = useState("");

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
            HandleError(true);
            HandeleMessageError("empty expression");
        } else if (expression[0] === "+" || expression[0] === "-" || expression[0] === "*" || expression[0] === "/") {
            HandleError(true);
            HandeleMessageError("expression has only operator");
        } else {
            HandleError(false);
            HandeleMessageError("");
            const expressionString = expression.join("");
            try {
                const result = eval(expressionString);
                setResult(result);    
                const newEntry = { expression: expressionString, result: result };
                setHistory(history.concat(newEntry));
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
        const bodyInsert = JSON.stringify({ expression: expression.join(""), result: result })
        console.log(bodyInsert);
        try {
            let saveOperation = await fetch('../../PHP/treatment.php',{
                method: "POST",
                headers: { 'Content-Type': 'application/json', },
                body: bodyInsert,
            });
            let response = await saveOperation.json();
            console.log(response);
            if (response.status === 200) {
                console.log("saved");
            }
        } catch (error) {
            console.log(error);
        }
    };
    const clearHistory = () => {
        setHistory([]);
    };
    const HandleError = (errorF) => {
        setErrorF(errorF);
    };
    console.log(errorF);
    const HandeleMessageError = (messageError) => {
        setMessageError(messageError);
    }
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-1/4 rounded-[10px] border border-[#11131c] p-2">
                <BeautifulScreen expression={expression} result={result} errorF={errorF} messageError={messageError}/>
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
                <div id="WarpperModal">
                    <History history={history} clearHistory={clearHistory}/>
                </div>
            </div>
        </div>
    )
}