// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const EqualButton = ({ handleEqualClick }) => {
    return (
        <div>
            <button id="equal" onClick={handleEqualClick}
                    className="rounded-lg bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 border border-orange-600  m-1"
            >
                =
            </button>
        </div>
    );
};

export default EqualButton;
