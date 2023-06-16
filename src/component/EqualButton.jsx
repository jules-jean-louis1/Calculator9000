import React from "react";

const EqualButton = ({ handleEqualClick }) => {
    return (
        <div>
            <button id="equal" onClick={handleEqualClick}>
                =
            </button>
        </div>
    );
};

export default EqualButton;
