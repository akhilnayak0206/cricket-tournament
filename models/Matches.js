const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  team1Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  team2Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue',
  },
  date: {
    type: Date,
    require: true,
  },
  summary: {
    type: String,
  },
});

module.exports = Matches = mongoose.model('match', MatchSchema);
