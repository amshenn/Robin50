'use client';
import { useState } from 'react';

// Page for transfers
const Transfer = () => {
  const [amount, setAmount] = useState('');
  const [transactionMode, setTransactionMode] = useState('deposit');

  // Ensures the inputs are correct
  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    const regex = /^\d+(\.\d{1,2})?$/;
    if (regex.test(inputAmount) || inputAmount === '') {
      setAmount(inputAmount);
    }
  };

  // Re-sets the state
  const handleTransactionMode = (mode) => {
    setTransactionMode(mode);
  };

  // Handles what occurs after form is submitted
  const handleTransact = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Process deposit/withdraw logic here based on 'amount' and 'transactionMode'

    // After processing, route back to '/dashboard'
    window.location.href = '/dashboard';
  };

  return (
    <div className="container mx-auto my-8 p-4 max-w-screen-md">
      <form onSubmit={handleTransact}>
      <h1 className="text-2xl font-bold mb-4">Transfer</h1> {/* Added heading here */}

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => handleTransactionMode('deposit')}
            className={`flex-grow h-12 ${
              transactionMode === 'deposit' ? 'bg-blue-500' : 'bg-gray-300'
            } text-white px-4 rounded`}
            type="button"
          >
            Deposit
          </button>
          <button
            onClick={() => handleTransactionMode('withdraw')}
            className={`flex-grow h-12 ${
              transactionMode === 'withdraw' ? 'bg-red-500' : 'bg-gray-300'
            } text-white px-4 rounded`}
            type="button"
          >
            Withdraw
          </button>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-main text-white py-3 rounded"
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
