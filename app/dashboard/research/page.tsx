'use client';
//W8PBMNA3H1H0LQYE ~ API KEY

import { useState, useEffect } from 'react';
import axios from 'axios';

// code for research page
const ResearchPage = () => {
  // Initializes valid states for the stock symbol, data, and error
  const [stockSymbol, setStockSymbol] = useState('');
  const [stockData, setStockData] = useState({});
  const [error, setError] = useState('');

  // API stuff
  const API_KEY = 'W8PBMNA3H1H0LQYE'; 
  const API_ENDPOINT = 'https://www.alphavantage.co/query';
 
  // Fetches all stock data
  const fetchStockData = async () => {
    if (!stockSymbol) {
      setError('Please enter a valid stock symbol (e.g., AAPL).');
      return;
    }

    try {
      const response = await axios.get(API_ENDPOINT, {
        params: {
          function: 'OVERVIEW',
          symbol: stockSymbol,
          apikey: API_KEY,
        },
      });

      if (response.data && Object.keys(response.data).length > 0) {
        setStockData(response.data);
        setError('');
      } else {
        setError('No data found for the entered stock symbol.');
        setStockData({});
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError('Failed to fetch stock data. Please try again later.');
      setStockData({});
    }
  };

  // Ensures symbol is all uppercase
  const handleInputChange = (event) => {
    setStockSymbol(event.target.value.toUpperCase());
  };

  // when form is submitted, stock data is fetched
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchStockData();
  };

  useEffect(() => {
    // Fetch initial stock data on component mount
    fetchStockData();
  }, []);

  // HTML code for page
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Research</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={stockSymbol}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500 flex-1"
        />
        <button type="submit" className="bg-main text-white px-4 py-2.5 rounded-r">
          Search
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-8">
        {Object.keys(stockData).length > 0 && (
          <table className="border-collapse border border-gray-400 w-full">
            <tbody>
              {Object.entries(stockData).map(([key, value], index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 font-semibold">{key}</td>
                  <td className="border px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;
