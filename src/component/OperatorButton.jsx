import React from "react";

const OperatorButton = () => {
    const operators = ["+", "-", "*", "/"];

    function onClickOperator(operator) {
        console.log(operator);
    }

    return (
        <div>
            {operators.map((operator) => (
                <button key={operator} id={`operator-${operator}`} onClick={() => onClickOperator(operator)}>
                    {operator}
                </button>
            ))}
        </div>
    );
}

export default OperatorButton;