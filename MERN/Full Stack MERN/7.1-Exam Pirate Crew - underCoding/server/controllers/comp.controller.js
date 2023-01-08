const { Competition } = require("../models/comp.model");

module.exports.findAllComp = (req, res) => {
  Competition.find({})
    .then((comp) => res.json(comp))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findComp = (req, res) => {
  Competition.findOne({ _id: req.params.id })
    .then((comp) => res.json({ comp }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// The method below is new
module.exports.createComp = (req, res) => {
  const { question, country1, country2, country3 } = req.body;
  Competition.create({ question, country1, country2, country3 })
    .then((comp) => res.json(comp))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateComp = (req, res) => {
  Competition.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updated_comp) => res.json(updated_comp))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.deleteComp = (req, res) => {
  Competition.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// --------------- Top 3 -------------------

module.exports.getTop3 = (req, res) => {
  Student.find()
    .sort({ counter1: -1, counter2: -1, counter3: -1 })
    .limit(3)
    .then((students) => response.json(students))
    .catch((err) =>
      response.status(500).json({ message: "something went wrong", error: err })
    );
};

// --------------- get random Competition 3 -------------------

module.exports.getRandomCompetition = (req, res) => {
  Competition.aggregate([{ $sample: { size: 1 } }])
    .then((randomCompetition) => res.json(randomCompetition))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
