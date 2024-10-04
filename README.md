# Trading-bot


This application simulates a trading bot that executes buy and sell actions based on stock price fluctuations. It maintains a balance, track of holdings, and a trade history. The bot uses a dynamic mock API to generate stock prices.


Initial State:

The bot starts with a default balance, configurable through the environment variable BALANCE.


Price Changes:

The bot fetches an array of stock prices from a dynamic mock API.
It uses the last two prices to calculate the percentage change.


Trading Conditions:

Buying:
If the price decreases by 2% or more and there is sufficient balance, the bot will buy as many shares as possible.
Selling:
If the price increases by 3% or more and the bot holds shares, it will sell all shares.
Each buy or sell action updates:
Balance
Holdings
Trade history
Profit and Loss Calculation:

The bot calculates total assets, total profit, and average profit per trade based on executed trades.

The bot calculates total assets, total profit, and average profit per trade based on executed trades.
API Usage
Endpoints
Start Trading:

URL: http://localhost:6001/api/trade
Method: POST
Description: Executes the trading strategy based on the latest stock prices.
Response:
"Trading executed successfully." (if executed without errors)
Get Trading Report:

URL: http://localhost:6001/api/report
Method: GET
Description: Retrieves the current balance, holdings, total assets, trade history, and other metrics.


![Screenshot (602)](https://github.com/user-attachments/assets/54a53181-6d7b-48d5-ac1e-c4f91301b920)
