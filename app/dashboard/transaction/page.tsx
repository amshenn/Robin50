'use client';
import { useState, useEffect } from 'react';

const StockTradingPage = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [stockData, setStockData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [transactionType, setTransactionType] = useState('');

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value.toUpperCase());
    setErrorMessage('');
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setErrorMessage('');
  };

  const handleBuyOrSell = async (action) => {
    if (symbol.trim() === '' || quantity.trim() === '') {
      setErrorMessage('Symbol and quantity are required.');
      setStockData(null);
      setTransactionType('');
      return;
    }

    // Call Alpha Vantage API to check if the stock symbol exists
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=W8PBMNA3H1H0LQYE`
      );

      if (!response.ok) {
        throw new Error('Invalid response from Alpha Vantage API');
      }

      const data = await response.json();

      if (data['Error Message']) {
        setErrorMessage(`No data found for the entered stock symbol: ${symbol}`);
        setStockData(null);
        setTransactionType('');
        return;
      }

      // This displays the stock data and whether the user bought or sold 
      setStockData(data['Global Quote']);
      setTransactionType(action === 'buy' ? 'Bought' : 'Sold');
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setErrorMessage('Error fetching stock data.');
    }
  };

  useEffect(() => {
    setStockData(null);
    setTransactionType('');
  }, [symbol, quantity]);

  // HTML code for page
  return (
    <div className="container mx-auto my-8 p-4 max-w-screen-md">
      <h1 className="text-2xl font-bold mb-4">Stock Trading</h1>

      <div className="mb-4">
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">
          Stock Symbol
        </label>
        <input
          type="text"
          id="symbol"
          placeholder="Enter stock symbol"
          value={symbol}
          onChange={handleSymbolChange}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          placeholder="Enter quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex space-x-2">
        <button onClick={() => handleBuyOrSell('buy')} className="flex-grow h-12 bg-green-500 text-white px-4 rounded">
          Buy
        </button>
        <button onClick={() => handleBuyOrSell('sell')} className="flex-grow h-12 bg-red-500 text-white px-4 rounded">
          Sell
        </button>
      </div>

      {stockData && (
        <div className="mt-4 p-4 border rounded-md">
          <p className="text-lg font-bold">{transactionType} Stock Symbol: {symbol}</p>
          <p className="text-lg">Latest Price: {stockData['05. price']}</p>
          <p className="text-lg">Quantity: {quantity}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default StockTradingPage;
