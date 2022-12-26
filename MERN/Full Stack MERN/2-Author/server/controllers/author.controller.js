const { Author } = require("../models/author.model");
// const { request, response } = require("express");

module.exports.index = (req, res) => {
  response.json({
    message: "Hello World ,Backend is Running",
  });
};

module.exports.findAllAuthor = (req, res) => {
  console.log(Author);
  Author.find({})
    .then((authors) => res.json(authors))
    .catch((err) => res.json(err));
  // .catch((err) =>
  //   res.json({ message: 'something have gone wrong', error: err })
  //   )
};

module.exports.findAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((author) => res.json({ author }))
    .catch((err) => res.json(err));
};

// The method below is new
module.exports.createAuthor = (req, res) => {
  const { name } = req.body;
  Author.create({
    name,
  })
    .then((author) => res.json(author))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updated_author) => res.json(updated_author))
    .catch((err) => res.status(400).status(200).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};
