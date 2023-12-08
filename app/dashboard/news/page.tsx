'use client';

//fcca2a92d8bb496ab2dec4a55371a6e6 ~ API KEY

import { useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = 'fcca2a92d8bb496ab2dec4a55371a6e6'; 
  const API_ENDPOINT = 'https://newsapi.org/v2/everything';

  const fetchNews = async () => {
    try {
      const response = await axios.get(API_ENDPOINT, {
        params: {
          q: stockSymbol,
          apiKey: API_KEY,
        },
      });

      setNewsData(response.data.articles);
      setError('');
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Invalid stock symbol. Please enter a valid stock symbol.');
    }
  };


  const handleInputChange = (event) => {
    setStockSymbol(event.target.value.toUpperCase()); // Convert the input to uppercase for consistency
  };

  // Handles submitting the symbol for news
  // If stock doesn't match correct format or not in News, it returns an error
  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^[A-Za-z]{1,5}$/.test(stockSymbol)) {
      fetchNews();
    } else {
      setError('Invalid stock symbol. Please enter a valid stock symbol.');
    }
  };

  // HTML code for the page
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Stock News</h1>
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
        {newsData.map((article, index) => (
          <div key={index} className="mb-4 p-4 border rounded-md">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p className="text-gray-600">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
