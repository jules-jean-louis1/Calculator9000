import React from "react";

const EqualButton = ({ handleEqualClick }) => {
    return (
        <div>
            <button id="equal" onClick={handleEqualClick}
                    className="rounded-full bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 border border-orange-600  m-1"
            >
                =
            </button>
        </div>
    );
};

export default EqualButton;
