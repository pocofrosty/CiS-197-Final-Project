const express = require('express')
const passport = require('passport')

const Account = require('../models/account')

const router = express.Router()

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback URI')
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
    const user = await Account.findOne({ username: loginUsername })
    if (user.password === loginPassword) {
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

module.exports = router
