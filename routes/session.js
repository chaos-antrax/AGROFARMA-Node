const express = require("express");
const router = express.Router();
const {
  saveAlternativeSession,
  saveSoilScoreSession,
  saveProfitabilityScoreSession,
} = require("../controllers/sessionController");

const authenticateToken = require("../middleware/auth");

// POST /api/sessions/alternatives
router.post("/alternatives", authenticateToken, saveAlternativeSession);

// POST /api/sessions/soilScore
router.post("/soilScore", authenticateToken, saveSoilScoreSession);

// POST /api/sessions/profitabilityScore
router.post(
  "/profitabilityScore",
  authenticateToken,
  saveProfitabilityScoreSession
);

module.exports = router;
