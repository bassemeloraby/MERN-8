const mongoose = require('mongoose');

const drugSchema = mongoose.Schema(
  {
    ScientificName: String,
  },
  {
    TradeName: String,
  }
);

module.exports = mongoose.model('Drug', drugSchema);
