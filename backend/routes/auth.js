const express = require('express')
const passport = require('passport')

const router = express.Router()

router.get('/login', (req, res) => {
  res.send('login')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/auth/login') //move redirect to react buttons
  res.send(req.user)
})

module.exports = router
