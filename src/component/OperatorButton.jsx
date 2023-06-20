import React from "react";

const OperatorButton = ({ handleOperatorClick }) => {
    const operators = ["+", "-", "*", "/"];

    return (
        <div className="flex flex-col">
            {operators.map((operator) => (
                <button
                    key={operator}
                    id={`operator-${operator}`}
                    onClick={() => handleOperatorClick(operator)}
                    className="rounded-lg text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 border border-orange-600  m-1"
                >
                    {operator}
                </button>
            ))}
        </div>
    );
};

export default OperatorButton;
