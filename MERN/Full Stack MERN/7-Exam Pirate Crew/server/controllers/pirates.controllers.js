const Pirate = require('../models/pirates.models')

module.exports.findAllPirates = (req, res) => {
  Pirate.find()
    .then((allPirates) => res.json({ results: allPirates }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneSinglePirate = (req, res) => {
  Pirate.findOne({ _id: req.params._id })
    .then((oneSinglePirate) => res.json({ results: oneSinglePirate }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewPirate = (req, res) => {
  Pirate.create(req.body)
    .then((newlyCreatedPirate) => res.json({ results: newlyCreatedPirate }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateExistingPirate = (req, res) => {
  console.log(req.body)
  Pirate.findOneAndUpdate({ _id: req.params._id }, req.body, {
    runValidators: true
  })
    .then((updatedPirate) => res.json({ result: updatedPirate }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteAnExistingPirate = (req, res) => {
  Pirate.deleteOne({ _id: req.params._id })
    .then((results) => res.json({ results: results }))
    .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}
