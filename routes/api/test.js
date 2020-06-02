const express = require('express');
const router = express.Router();

const Countries = require('../../models/Countries');

//@route   GET /test
//@desc    Get total countires in the database. There is only one country
//@access  Public
router.get('/', async (req, res) => {
  try {
    const totalCountries = await Countries.estimatedDocumentCount();
    res.json(totalCountries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error Tywin Lannister');
  }
});

module.exports = router;
