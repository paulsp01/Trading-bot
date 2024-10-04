const { getMockStockPrices } = require("../utils/mockApi");
const logger = require("../utils/logger");

let balance = parseFloat(process.env.BALANCE || 10000); 
let holdings = 0;
let tradeHistory = [];
let totalTrades = 0;
let totalProfit = 0;


const executeTradingStrategy = async () => {
  try {
    const stockPrices = await getMockStockPrices();
    const lastPrice = stockPrices[stockPrices.length - 1];
    const prevPrice = stockPrices[stockPrices.length - 2];

    const priceChange = ((lastPrice - prevPrice) / prevPrice) * 100;
    logger.info(
      `Last Price: ${lastPrice}, Previous Price: ${prevPrice}, Price Change: ${priceChange.toFixed(
        2
      )}%`
    );

     logger.info(`Current Holdings: ${holdings}`);

    if (priceChange <= -2 && balance > lastPrice) {
      const sharesToBuy = Math.floor(balance / lastPrice);
      balance -= sharesToBuy * lastPrice;
      holdings += sharesToBuy;
      tradeHistory.push({
        action: "BUY",
        shares: sharesToBuy,
        price: lastPrice,
      });
      logger.info(`Bought ${sharesToBuy} shares at price $${lastPrice}`);
      totalTrades++; 
    } else if (priceChange >= 3 && holdings > 0) {
      const profit = holdings * (lastPrice - prevPrice);
      balance += holdings * lastPrice;
      tradeHistory.push({
        action: "SELL",
        shares: holdings,
        price: lastPrice,
        profit,
      });
      logger.info(`Sold ${holdings} shares at price $${lastPrice}`);
      totalProfit += profit; 
      holdings = 0;
      totalTrades++; 
    }
  } catch (error) {
    logger.error(`Error executing trading strategy: ${error.message}`);
    throw new Error("Trading execution failed");
  }
};


const getProfitLossReport = () => {
  const totalAssets = balance + holdings * getCurrentPrice();
  const profitLoss = totalAssets - parseFloat(process.env.BALANCE);

  
  const avgProfitPerTrade = totalTrades > 0 ? totalProfit / totalTrades : 0;

  return {
    balance,
    holdings,
    totalAssets,
    totalTrades,
    totalProfit,
    avgProfitPerTrade,
    profitLoss,
    tradeHistory,
  };
};


const getCurrentPrice = () => {
  return 150; 
};

module.exports = { executeTradingStrategy, getProfitLossReport };
