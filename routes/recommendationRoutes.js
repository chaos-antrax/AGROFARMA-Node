const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getRecommendations,
} = require("../controllers/recommendationController");

router.post("/recommend", auth, getRecommendations);

module.exports = router;
