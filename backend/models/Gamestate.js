const mongoose = require('mongoose')

const { Schema, model } = mongoose

const gamestateSchema = new Schema({
  name: { type: String },
  connectedPlayers: [{
    String,
  }],
  playerResources: [{
    settlements: [],
    cities: [],
    roads: [],
  }],
  gameInfo: {
    turn: { type: Number },
    resourceBank: { type: Array },
  },
  gameBoard: {

  },
})

const Gamestate = model('Gamestate', gamestateSchema)

module.exports = Gamestate
