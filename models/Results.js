const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  matchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'match',
  },
  outcomeWin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team',
  },
  score: {
    type: Number,
    require: true,
  },
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'venue',
  },
  date: {
    type: Date,
    require: true,
  },
});

module.exports = Results = mongoose.model('result', ResultSchema);
