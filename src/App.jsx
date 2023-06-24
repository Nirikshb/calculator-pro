import React, { useState } from 'react';
import Calculator from './Calculator';
import SplitExpenseCalculator from './spilt';

const App = () => {
  const [isCalculatorVisible, setCalculatorVisible] = useState(true);

  const handleSwitchClick = () => {
    setCalculatorVisible(!isCalculatorVisible);
  };

  return (
    <div>
      {isCalculatorVisible ? (
        <Calculator />
      ) : (
        <SplitExpenseCalculator />
      )}
      <button onClick={handleSwitchClick}>Switch</button>
    </div>
  );
};

export default App;
