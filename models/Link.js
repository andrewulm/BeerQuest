const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  title: {
    type: String,
    required: false
  },
  created_by: {
    type: String,
    required: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Create the Headline model using the headlineSchema
const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
