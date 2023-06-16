import React from "react";

const EqualButton = () => {
    function onClickEqual() {
        console.log("=");
    }

    return (
        <div>
            <button id="equal" onClick={onClickEqual}>
                =
            </button>
        </div>
    );
}

export default EqualButton;