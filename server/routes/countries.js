const express = require('express')
const router = express.Router()

// All countries route
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router