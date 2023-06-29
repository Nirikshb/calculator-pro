import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [history, setHistory] = useState([]);
  const [currentCalculation, setCurrentCalculation] = useState('');
  const [display, setDisplay] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (value) => {
    setDisplay(display.toString() + value);
    setCurrentCalculation(currentCalculation.toString() + value);
  };

  const handleClearClick = () => {
    setDisplay('');
    setCurrentCalculation('');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(display);
      const calculation = `${currentCalculation} = ${result}`;

      setDisplay(result.toString());
      setCurrentCalculation('');
      setHistory((prevHistory) => {
        const newHistory = [calculation, ...prevHistory.slice(0, 4)];
        return newHistory;
      });
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleHistoryClick = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div className="display">{display}
      </div>
       

      <div className="keypad">
        <div className="keypad-row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="keypad-row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="keypad-row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="keypad-row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleEqualClick}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="keypad-row">
          <button onClick={handleClearClick}>AC</button>
        </div>
      </div>
      <button onClick={handleHistoryClick}>
        {showHistory ? 'Hide History' : 'Show History'}
      </button>
      {showHistory && (
        <div className="history">
          <ul>
            {history.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;
