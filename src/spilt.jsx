import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SplitExpenseCalculator = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [numberOfFriends, setNumberOfFriends] = useState('');
  const [result, setResult] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [splitExpenses, setSplitExpenses] = useState([]);

  const handleTotalAmountChange = (e) => {
    setTotalAmount(e.target.value);
  };

  const handleNumberOfFriendsChange = (e) => {
    setNumberOfFriends(e.target.value);
  };

  const handleExpenseAdd = () => {
    if (totalAmount) {
      const newExpense = {
        amount: totalAmount,
        description: '',
      };
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setTotalAmount('');
    }
  };

  const handleExpenseChange = (index, e) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].description = e.target.value;
    setExpenses(updatedExpenses);
  };

  const calculateSplitExpense = () => {
    if (totalAmount && numberOfFriends) {
      const amountPerFriend = totalAmount / numberOfFriends;
      setResult(amountPerFriend.toFixed(2));
    } else {
      setResult(null);
    }
  };

  const handleSplitExpenses = () => {
    const totalExpense = expenses.reduce(
      (accumulator, expense) => accumulator + Number(expense.amount),
      0
    );
    const amountPerFriend = (totalExpense / numberOfFriends).toFixed(2);
    const splitExpenses = expenses.map((expense) => ({
      ...expense,
      amount: amountPerFriend,
    }));
    setSplitExpenses(splitExpenses);
  };

  const calculateTotalExpense = () => {
    const total = expenses.reduce(
      (accumulator, expense) => accumulator + Number(expense.amount),
      0
    );
    return total.toFixed(2);
  };

  return (
    <motion.div
      className="split-expense-calculator"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Split Expense Calculator</h2>
      <div className="input-section">
        <label>Total Amount:</label>
        <input
          type="number"
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
        <button onClick={handleExpenseAdd}>Add Expense</button>
      </div>
      <div className="input-section">
        <label>Number of Friends:</label>
        <input
          type="number"
          value={numberOfFriends}
          onChange={handleNumberOfFriendsChange}
        />
      </div>
      <button onClick={calculateSplitExpense}>Calculate</button>
      {result && <p>Amount per friend: ${result}</p>}

      <div className="expense-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-box">
            <input
              type="text"
              value={expense.amount}
              readOnly
              className="expense-amount"
            />
            <input
              type="text"
              value={expense.description}
              onChange={(e) => handleExpenseChange(index, e)}
              className="expense-description"
            />
          </div>
        ))}
      </div>

      {expenses.length > 0 && (
        <div className="split-button">
          <button onClick={handleSplitExpenses}>Split Expenses</button>
        </div>
      )}

      {splitExpenses.length > 0 && (
        <div className="split-expenses">
          <h3>Split Expenses</h3>
          {splitExpenses.map((expense, index) => (
            <div key={index} className="split-expense">
              <span>{expense.amount}</span>
              <span>{expense.description}</span>
            </div>
          ))}
          <p>Total Expense: ${calculateTotalExpense()}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SplitExpenseCalculator;
