const router = require('express').Router()
const { User } = require('../db/model')

router.get('/', async (req, res) => {
  const response = await User.find()
  res.send(response)
})

module.exports = router
