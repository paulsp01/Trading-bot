const express = require("express");
const router = express.Router();
const { executeTrade, getReport } = require("../controllers/tradingController");


router.post("/trade", executeTrade);
router.get("/report", getReport);

module.exports = router;
