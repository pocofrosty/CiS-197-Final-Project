const express = require('express')

const Gamestate = require('../models/Gamestate')

const router = express.Router()

router.post('/create', async (req, res, next) => {
  const { body: { username, password } } = req
  await Gamestate.create({ username, password })
  res.send('acccount creation success')
})

module.exports = router
