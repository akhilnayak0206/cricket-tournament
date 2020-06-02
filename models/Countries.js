const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  shortForm: {
    type: String,
    require: true,
  },
});

module.exports = Countries = mongoose.model('countries', CountrySchema);
