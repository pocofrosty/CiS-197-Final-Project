const isAuthenticated = (req, res, next) => {
  if (req.session.username) {
    console.log('logged in')
    next()
  } else {
    next(new Error('Not Logged In'))
  }
}

module.exports = isAuthenticated
