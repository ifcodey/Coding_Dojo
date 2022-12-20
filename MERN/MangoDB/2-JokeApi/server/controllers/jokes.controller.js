// import a models.
const Joke = require("../models/jokes.model");

// find all.
// this is a promise so used catch for error.
// should be arrangment like -> (req, res).
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    // allJokes  is can named it as we want.
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// find single.
module.exports.findJoke = (req, res) => {
  // req.param.id -> coming from url.
  // findOne -> method in mongoose.
  Joke.findOne({ _id: req.params.id })
    .then((result) => res.json({ joke: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// create new user.
module.exports.createNewJoke = (req, res) => {
  // req.body.id  -> coming from form / postman.
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
  // { _id: req.params.id } -> get.
  // req.body -> post.
  // { new: true } -> for validtion.
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updated) => res.json({ joke: updated }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
  // { _id: req.params.id } -> filter.
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

// Validate for uniqueness before creating new DB entry
// { name: req.body.name } -> if my record/row exist.
module.exports.checkUniqueness = (req, res) => {
  Joke.exists({ name: req.body.name })
    .then((userExists) => {
      if (userExists) {
        // Promise.reject() will activate the .catch() below.
        return Promise.reject("Error Message Goes Here");
      }
      // create new record/row.
      return Joke.create(req.body);
    })
    .then((saveResult) => res.json(saveResult))
    .catch((err) => res.json(err));
};

// can be a export like this
// ------------------------------
// module.exports = {
//   newJoke,
//   findAllJokes,
//   findJoke,
//   deleteJoke,
//   updateJoke,
// };
