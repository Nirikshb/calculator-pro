import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Calculator from './Calculator';
import SplitExpenseCalculator from './spilt';

const App = () => {
  const [isCalculatorVisible, setCalculatorVisible] = useState(true);

  const handleSwitchClick = () => {
    setCalculatorVisible(!isCalculatorVisible);
  };

  return (
    <div>
      <AnimatePresence>
        {isCalculatorVisible ? (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.5 }}
          >
            <Calculator />
          </motion.div>
        ) : (
          <motion.div
            key="splitExpenseCalculator"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            <SplitExpenseCalculator />
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={handleSwitchClick}>Switch</button>
    </div>
  );
};

export default App;
