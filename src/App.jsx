import React from 'react';
import NumberButton from "./component/NumberButton.jsx";
import OperatorButton from "./component/OperatorButton.jsx";
import './App.css'


function App() {
    return <div className="App">
        <h1>Calculator9000</h1>
        <NumberButton />
        <OperatorButton />
    </div>
}

export default App
