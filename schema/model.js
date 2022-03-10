const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  offer: { type: Map, of: String },
});

module.exports = mongoose.model("Offer", offerSchema);
