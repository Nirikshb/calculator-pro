import React, { useState } from 'react';

const SplitExpenseCalculator = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [numberOfFriends, setNumberOfFriends] = useState('');
  const [result, setResult] = useState(null);

  const handleTotalAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };

  const handleNumberOfFriendsChange = (e) => {
    setNumberOfFriends(e.target.value);
  };

  const calculateSplitExpense = () => {
    if (totalAmount && numberOfFriends) {
      const amountPerFriend = totalAmount / numberOfFriends;
      setResult(amountPerFriend.toFixed(2));
    } else {
      setResult(null);
    }
  };

  return (
    <div className="split-expense-calculator">
      <h2>Split Expense Calculator</h2>
      <div>
        <label>Total Amount:</label>
        <input
          type="number"
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
      </div>
      <div>
        <label>Number of Friends:</label>
        <input
          type="number"
          value={numberOfFriends}
          onChange={handleNumberOfFriendsChange}
        />
      </div>
      <button onClick={calculateSplitExpense}>Calculate</button>
      {result && <p>Amount per friend: ${result}</p>}
    </div>
  );
};

export default SplitExpenseCalculator;
