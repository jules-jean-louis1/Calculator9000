import React from "react";

const NumberButton = ({ handleNumberClick }) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="flex flex-wrap">
            <div className="w-1/3">
                {numbers.map((number) => (
                    <button
                        key={number}
                        id={`number-${number}`}
                        onClick={() => handleNumberClick(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumberButton;
