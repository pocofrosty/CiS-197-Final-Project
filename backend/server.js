const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const cookieSession = require('cookie-session')
const passport = require('passport')

const AccountRouter = require('./routes/account')
const AuthRouter = require('./routes/auth')

const keys = require('./keys')

const PassportSetup = require('./authentication/passport-setup')

const MONGO_URI = process.env.MONGO_URI || keys.mongoDB.database

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

app.use(cookieSession({
  keys: [keys.session.cookieKey],
  maxAge: 60 * 60 * 1000,
}))

const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1234')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', AuthRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
