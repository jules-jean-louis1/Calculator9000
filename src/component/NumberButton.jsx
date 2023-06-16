import React from 'react';

const NumberButton = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function onClickNumber(number) {
        console.log(number);
    }

    return (
        <div className="flex flex-wrap">
            <div className="w-1/3">
                {numbers.map((number) => (
                    <button key={number} id={`number-${number}`} onClick={() => onClickNumber(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NumberButton;
