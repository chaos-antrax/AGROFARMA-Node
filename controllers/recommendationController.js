const User = require("../models/User");
const axios = require("axios");

exports.getRecommendations = async (req, res) => {
  const userId = req.user.id;
  const formData = req.body;

  try {
    // Send data to Flask service
    const flaskResponse = await axios.post(
      "http://localhost:5000/api/recommend",
      formData
    );

    const recommendation = flaskResponse.data;

    // Save recommendation to MongoDB
    const user = await User.findById(userId);
    user.recommendations.push(recommendation);
    await user.save();

    res.json(recommendation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to get recommendations" });
  }
};
