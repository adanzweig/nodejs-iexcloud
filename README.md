# Stock Price Fetcher

This Node.js application fetches the current stock price of a specified company using the IEX Cloud API.

## Features

- Fetches real-time stock prices.
- Supports multiple stock symbols.
- Uses the `@apperate/iexjs` package for easy interaction with the IEX Cloud API.

## Requirements

- Node.js
- npm (Node Package Manager)
- An IEX Cloud account with an API key.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/adanzweig/nodejs-iexcloud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-iexcloud
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your IEX Cloud API key:

   ```env
   API_KEY=your_iex_cloud_api_key
   ```

## Usage

To fetch the stock price of a company, run the script with the company's stock symbol as an argument. For example, to get the price of Tesla (TSLA):

```bash
node index.js
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## Disclaimer

This application is for educational purposes only. Stock market data may be delayed. Always verify with a secondary source.
