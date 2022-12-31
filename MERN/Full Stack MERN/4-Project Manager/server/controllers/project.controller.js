const { Projects } = require("../models/projectManager.model");

module.exports.findAllProjects = (req, res) => {
  Projects.find({})
    .then((projects) => res.json(projects))
    .catch((err) => res.json(err));
  // .catch((err) =>
  //   res.json({ message: 'something have gone wrong', error: err })
  //   )
};

module.exports.findProject = (req, res) => {
  Projects.findOne({ _id: req.params.id })
    .then((project) => res.json({ project }))
    .catch((err) => res.json(err));
};

// The method below is new
module.exports.createProject = (req, res) => {
  const { name, date, status } = req.body;
  Projects.create({
    name,
    date,
    status,
  })
    .then((project) => res.json(project))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.updateProject = (req, res) => {
  Projects.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updated_project) => res.json(updated_project))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.deleteProject = (req, res) => {
  Projects.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};
