import { useState } from 'react';
import './App.css';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(display.toString() + value);
  };

  const handleClearClick = () => {
    setDisplay('');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <h2> Calculaor</h2>
      <div className="display">{display}</div>
      <div className="keypad">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>AC</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button>Switch</button>
      </div>
    </div>
  );
}

export default Calculator;
