import React, { useState } from "react";

const BeautifulScreen = ({ expression, result }) => {
    return (
        <div>
            <div id="screen">
                <p>{expression}</p>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default BeautifulScreen;
