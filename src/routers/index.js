const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('TODO API version 1.0');
  res.send('Hello TODO API version 1.0');
});

module.exports = router;
