let obj = {
  "miningProfitability": [
    {
      "id": 0,
      "coin": "Nicehash-Ethash",
      "tag": "NICEHASH",
      "algorithm": "Ethash",
      "block_time": "1",
      "block_reward": "1",
      "block_reward24": 1,
      "last_block": 0,
      "difficulty": 1,
      "difficulty24": "1",
      "nethash": 9999999999,
      "exchange_rate": 0,
      "exchange_rate24": 0,
      "exchange_rate_vol": 32,
      "exchange_rate_curr": "BTC",
      "market_cap": "$0.00",
      "estimated_rewards": "0.00052",
      "estimated_rewards24": "0.0005",
      "btc_revenue": "0.0005208",
      "btc_revenue24": "0.000504",
      "profitability": 100,
      "profitability24": 100,
      "timestamp": "1970-01-01 00:33:38"
    }
  ]
}

console.log(obj.miningProfitability["0"].nethash)