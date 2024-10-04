require("dotenv").config();
const express = require("express");
const tradingRoutes = require("./routes/tradingRoutes");
const logger = require("./utils/logger");
const app = express();

app.use(express.json());
app.use("/api", tradingRoutes);

// Centralized Error Handler
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  logger.info(`Trading bot running on port ${PORT}`);
});
