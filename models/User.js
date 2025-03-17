const mongoose = require("mongoose");

const alternativeSessionSchema = new mongoose.Schema({
  harvestMonth: { type: Number },
  previousCrop: { type: String },
  plantingMonth: { type: Number },
  recommendations: { type: [Object], required: true },
  timestamp: { type: Date, default: Date.now },
});

const soilScoreSessionSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const profitabilityScoreSessionSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  alternatives: { type: [alternativeSessionSchema], default: [] },
  soilScores: { type: [soilScoreSessionSchema], default: [] },
  profitabilityScores: { type: [profitabilityScoreSessionSchema], default: [] },
});

module.exports = mongoose.model("User", userSchema);
