const express = require('express')

const Account = require('../models/Account')

const router = express.Router()

router.post('/create', async (req, res, next) => {
  const { body: { username, password } } = req
  await Account.create({ username, password })
  res.send('acccount creation success')
})

module.exports = router
