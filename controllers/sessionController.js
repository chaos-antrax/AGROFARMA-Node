const User = require("../models/User");

// Save an Alternative Session
const saveAlternativeSession = async (req, res) => {
  const userId = req.user.id; // Comes from authMiddleware
  const { recommendations, harvestMonth, previousCrop, plantingMonth } =
    req.body;

  if (!recommendations || !Array.isArray(recommendations)) {
    return res
      .status(400)
      .json({ message: "Recommendations array is required." });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const newSession = {
      recommendations,
      harvestMonth,
      previousCrop,
      plantingMonth,
    };
    user.alternatives.push(newSession);

    await user.save();

    res
      .status(200)
      .json({ message: "Alternative session saved successfully." });
  } catch (error) {
    console.error("Error saving alternative session:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Save a Soil Score Session
const saveSoilScoreSession = async (req, res) => {
  const userId = req.user.id;
  const { score } = req.body;

  if (typeof score !== "number") {
    return res.status(400).json({ message: "Score must be a number." });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const newSession = { score };
    user.soilScores.push(newSession);

    await user.save();

    res.status(200).json({ message: "Soil score session saved successfully." });
  } catch (error) {
    console.error("Error saving soil score session:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Save a Profitability Score Session
const saveProfitabilityScoreSession = async (req, res) => {
  const userId = req.user.id;
  const { score } = req.body;

  if (typeof score !== "number") {
    return res.status(400).json({ message: "Score must be a number." });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const newSession = { score };
    user.profitabilityScores.push(newSession);

    await user.save();

    res
      .status(200)
      .json({ message: "Profitability score session saved successfully." });
  } catch (error) {
    console.error("Error saving profitability score session:", error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = {
  saveAlternativeSession,
  saveSoilScoreSession,
  saveProfitabilityScoreSession,
};
