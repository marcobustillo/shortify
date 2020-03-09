const mongoose = require("mongoose");

const shortifySchema = mongoose.Schema({
  url: String,
  hash: String
});

const Shortify = mongoose.model("Shortify", shortifySchema);

module.exports = Shortify;
