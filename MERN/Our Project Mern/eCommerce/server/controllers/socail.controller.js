const { Teams } = require("../models/TM.model");

module.exports.findAllTeams = (req, res) => {
  console.log(Teams);
  Teams.find({})
    .then((teams) => res.json(teams))
    .catch((err) => res.json(err));
  // .catch((err) =>
  //   res.json({ message: 'something have gone wrong', error: err })
  //   )
};

module.exports.findTeam = (req, res) => {
  Teams.findOne({ _id: req.params.id })
    .then((team) => res.json({ team }))
    .catch((err) => res.json(err));
};

// The method below is new
module.exports.createTeam = (req, res) => {
  const { name, position, status } = req.body;
  Teams.create({
    name,
    position,
    status,
  })
    .then((team) => res.json(team))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.updateTeam = (req, res) => {
  Teams.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updated_team) => res.json(updated_team))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.deleteTeam = (req, res) => {
  Teams.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};

// module.exports.updateStatusTeam = (req, res) => {
//   Teams.findOneAndUpdate({ _id: request.params.id }, request.body, {
//     new: true,
//     runValidators: [true, "{PATH} is required"],
//   })
//     .then((updatedTeam) => response.json(updatedTeam))
//     .catch((err) => response.status(400).json(err));
// };
