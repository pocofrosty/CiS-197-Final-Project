const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const AccountRouter = require('./routes/account')

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://dzheng2480:chinainn%409209@catan.wv8bp.mongodb.net/test'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
app.use(express.static('dist'))

app.use('/account', AccountRouter)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
