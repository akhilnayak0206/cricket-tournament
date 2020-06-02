const mongoose = require('mongoose');

const TeamsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'country',
  },
  participating: {
    type: Boolean,
    require: true,
  },
});

module.exports = Teams = mongoose.model('team', TeamsSchema);
