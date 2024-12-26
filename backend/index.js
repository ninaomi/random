const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// A function to get the data of a coin
const coin_id = async (req, res) => {
  const coinId = req.params.coin_id;

  const coinJson = {
    id: coinId,
    symbol: null,
    name: null,
    market_cap: null,
    fully_diluted_valuation: null,
    max_supply: null,
    current_price: null,
    price_change_percentage_24h: null,
    total_volume: null,
    current_price: null,
  };

  const coinRequest = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );

  const coinData = await coinRequest.json();

  
  coinJson.symbol = coinData.symbol;
  coinJson.name = coinData.name;

  coinJson.market_cap = coinData.market_data?.market_cap?.usd ?? null;
  coinJson.fully_diluted_valuation =
    coinData.market_data?.fully_diluted_valuation?.usd ?? null;
  coinJson.max_supply = coinData.market_data.max_supply ?? null;
  coinJson.current_price = coinData.market_data?.current_price?.usd ?? null;
  coinJson.price_change_percentage_24h =
    coinData.market_data?.price_change_percentage_24h ?? null;
  coinJson.total_volume = coinData.market_data?.total_volume?.usd ?? null;

  return res.json(coinJson);
}; // okay you do the restt todays subject: slavery YES do the WORKK!

const coins = (req, res) => {};

app.get("/coins", coins);

app.get("/coins/:coin_id", coin_id);

app.get("/", (req, res) => {
 // res.sendFile(path.join(__dirname, "../frontend", "index.html"));
 console.log("buhahaha");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
https://api.coingecko.com/api/v3/coins/bitcoin

/coins
returns all coin data in an array

/coins/id
returns the coin data for this coin
*/
