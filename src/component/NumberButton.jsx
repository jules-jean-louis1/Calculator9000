import React from "react";

const NumberButton = ({ handleNumberClick }) => {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // Inversion de l'ordre des nombres

    return (
        <div className="flex flex-wrap">
            {numbers.map((number, index) => (
                <div key={index} className="w-1/3 flex justify-center">
                    <button
                        id={`number-${number}`}
                        onClick={() => handleNumberClick(number)}
                        className="rounded-full bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 border border-gray-400 hover:border-gray-500 m-1"
                    >
                        {number}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NumberButton;
