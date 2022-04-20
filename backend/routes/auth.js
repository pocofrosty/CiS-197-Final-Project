const express = require('express')
const passport = require('passport')

const router = express.Router()

router.get('/login', (req, res) => {
  res.send('login')
})

router.get('/google', passport.authenticate('google'), (req, res) => {
  res.send('logging in with google')
})

module.exports = router
