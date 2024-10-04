const tradingService = require("../services/tradingService");
const logger = require("../utils/logger");


const executeTrade = async (req, res, next) => {
  try {
    logger.info("Starting trade execution"); 
    await tradingService.executeTradingStrategy();
    logger.info("Trading executed successfully"); 
    res.status(200).json({ message: "Trading executed successfully." });
  } catch (err) {
    logger.error(`Trade execution failed: ${err.message}`); 
    next(err);
  }
};


const getReport = (req, res, next) => {
  try {
    logger.info("Generating profit/loss report"); 
    const report = tradingService.getProfitLossReport();
    logger.info("Profit/loss report generated successfully"); 
    res.status(200).json(report);
  } catch (err) {
    logger.error(`Error generating report: ${err.message}`); 
    next(err);
  }
};

module.exports = { executeTrade, getReport };
