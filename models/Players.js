const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  nickName: {
    type: String,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'country',
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  totalMatchesPlayed: {
    type: Number,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
});

module.exports = Players = mongoose.model('player', PlayerSchema);
