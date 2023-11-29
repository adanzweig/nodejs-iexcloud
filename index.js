// Load environment variables from a .env file
require('dotenv').config();

// Import the Client class from the @apperate/iexjs package
const { Client } = require('@apperate/iexjs');

// Define an asynchronous function to get the stock price of a given symbol
async function getStockPrice(symbol){
    // Create a new client instance using the API key from environment variables and specifying the API version
    const client = new Client({ api_token: process.env.API_KEY, version: 'v1' });

    // Query the stock data for the given symbol using the client
    const stockPrice = await client.apperate.queryData({ workspace: "CORE", id: "QUOTE", key: symbol });

    // Return the fetched stock price data
    return stockPrice;
}

// Self-invoking anonymous async function to execute the getStockPrice function
(async () => {
    // Call getStockPrice for the 'TSLA' symbol and await the result
    const stockPrice = await getStockPrice('TSLA');

    // Log the latest price of the fetched stock data
    console.log(stockPrice[0].latestPrice);
})()