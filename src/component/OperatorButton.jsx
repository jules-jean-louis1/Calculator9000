import React from "react";

const OperatorButton = ({ handleOperatorClick }) => {
    const operators = ["+", "-", "*", "/"];

    return (
        <div>
            {operators.map((operator) => (
                <button
                    key={operator}
                    id={`operator-${operator}`}
                    onClick={() => handleOperatorClick(operator)}
                >
                    {operator}
                </button>
            ))}
        </div>
    );
};

export default OperatorButton;
