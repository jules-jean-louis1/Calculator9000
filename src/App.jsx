import React from 'react';
import Calculator from "./component/Calculator.jsx";
import './App.css'


function App() {
    return (
    <div className="calculator-container">
        <h1>Calculator9000</h1>
        <div className="w-1/4">
            <Calculator />
        </div>
    </div>
    );
}

export default App
