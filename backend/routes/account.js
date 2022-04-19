const express = require('express')

const Account = require('../models/Account')

const router = express.Router()

router.get('/test', async (req, res) => {
  console.log(1)
  res.send('test')
})

router.post('/signup', async (req, res, next) => {
  const { body: { username, password } } = req
  try {
    await Account.create({ username, password })
    res.send('Successful Signup')
  } catch (err) {
    next(new Error('Username Already Taken'))
  }
})

router.post('/login', async (req, res, next) => {
  const { body: { username: loginUsername, password: loginPassword } } = req
  try {
    const account = await Account.findOne({ username: loginUsername })
    if (account.password === loginPassword) {
      req.session.username = loginUsername
      res.send('Successful Login')
    } else {
      next(new Error('Failed to login'))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/logout', (req, res, next) => {
  try {
    req.session = null
    res.send('Log out success')
  } catch (err) {
    next(err)
  }
})

router.get('/verify', (req, res) => {
  if (req.session.username) {
    res.json({ LoggedIn: true })
  } else {
    res.json({ LoggedIn: false })
  }
})

router.get('/currentLogin', (req, res) => {
  try {
    res.json(req.session.username)
  } catch (err) {
    res.json('')
  }
})

module.exports = router
