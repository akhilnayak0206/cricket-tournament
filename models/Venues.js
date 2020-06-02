const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  place: {
    type: String,
  },
  state: {
    type: String,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'country',
  },
  totalMatchesPlayed: {
    type: Number,
    require: true,
  },
  area: {
    type: Number,
    require: true,
  },
});

module.exports = Venues = mongoose.model('venue', VenueSchema);
