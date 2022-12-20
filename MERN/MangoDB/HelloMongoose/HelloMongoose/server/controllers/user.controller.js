// import a models.
const User = require("../models/user.model");

// find all.
// this is a promise so used catch for error.
// should be arrangment like -> (req, res).
module.exports.findAllUsers = (req, res) => {
  User.find()
    // result is can named it as we want.
    .then((result) => res.json({ users: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// find single.
module.exports.findOneSingleUser = (req, res) => {
  // req.param.id -> coming from url.
  // findOne -> method in mongoose.
  User.findOne({ _id: req.params.id })
    .then((oneSingleUser) => res.json({ user: oneSingleUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// create new user.
module.exports.createNewUser = (req, res) => {
  // req.body.id  -> coming from form / postman.
  User.create(req.body)
    .then((newlyCreatedUser) => res.json({ user: newlyCreatedUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  // { _id: req.params.id } -> get.
  // req.body -> post.
  // { new: true } -> for validtion.
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedUser) => res.json({ user: updatedUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  // { _id: req.params.id } -> filter.
  User.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// Validate for uniqueness before creating new DB entry
// { name: req.body.name } -> if my record/row exist.
module.exports.checkUniqueness = (req, res) => {
  User.exists({ name: req.body.name })
    .then((userExists) => {
      if (userExists) {
        // Promise.reject() will activate the .catch() below.
        return Promise.reject("Error Message Goes Here");
      }
      // create new record/row.
      return User.create(req.body);
    })
    .then((saveResult) => res.json(saveResult))
    .catch((err) => res.json(err));
};
