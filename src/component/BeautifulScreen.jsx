import React, { useState } from "react";

const BeautifulScreen = ({ expression, result }) => {
    return (
        <div className="flex justify-center">
            <div id="screen" className="p-2 h-24 w-full bg-slate-200">
                <p>{expression}</p>
                <p className="text-xl font-bold">{result}</p>
            </div>
        </div>
    );
};

export default BeautifulScreen;
