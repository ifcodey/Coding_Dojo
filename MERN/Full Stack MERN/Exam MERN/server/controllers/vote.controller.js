const { Competition } = require("../models/vote.model");

module.exports.findAllComp = (req, res) => {
  Competition.find({})
    .then((comp) => res.json(comp))
    .catch((err) => res.json(err));
  // .catch((err) =>
  //   res.json({ message: 'something have gone wrong', error: err })
  //   )
};

module.exports.findComp = (req, res) => {
  Competition.findOne({ _id: req.params.id })
    .then((comp) => res.json({ comp }))
    .catch((err) => res.json(err));
};

// The method below is new
module.exports.createComp = (req, res) => {
  const { question, country1, country2, country3, counter1, counter2, counter3 } = req.body;
  Competition.create({
    question,
    country1,
    country2,
    country3,
    counter1,
    counter2,
    counter3,
  })
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
    .catch((err) => res.json(err));
};

// --------------- Top 3 -------------------

// module.exports.getAllStudents = (req, res) => {
//   Student.find().sort({ country1, country2 })
//     .then(students => response.json(students))
//     .catch(err => response.json({ message: "something went wrong", error: err }))
// }
