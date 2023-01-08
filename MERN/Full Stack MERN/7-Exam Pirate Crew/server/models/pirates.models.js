const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must have a name!'],
    minLength: [3, 'need at least 3 characters!']
  },
  imgURL: {
    type: String,
    required: [true, 'must have an image!'],
    minLength: [3, 'need at least 3 characters']
  },
  position: {
    type: String,
    required: [true, 'must have a position!'],
    minLength: [3, 'need at least 3 characters!'],
    enum: ['captain', 'firstMate', 'quarterMaster', 'boatSwain', 'powderMonkey']
  },
  treasures: {
    type: Number,
    required: [true, 'must have at least 1 treasure!'],
    min: 0
  },
  phrase: {
    type: String,
    required: [true, 'must have a catch phrase!'],
    minLength: [3, 'need at least 3 characters']
  },
  pegLeg: {
    type: String
  },
  eyePatch: {
    type: String
  },
  handHook: {
    type: String
  }
}, { timestamps: true })

const Pirate = mongoose.model('Pirate', PirateSchema)

module.exports = Pirate
