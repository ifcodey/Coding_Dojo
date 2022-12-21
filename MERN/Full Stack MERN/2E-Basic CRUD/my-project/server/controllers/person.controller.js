const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};
// The method below is new
module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body;
  Person.create({
    // fName: firstName,
    // lName: lastName,

    // if in front and model same name just used without need to write key (fName , lName) ->
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err));
};

module.exports.findAllPerson = (req, res) => {
  Person.find()
    // allJokes  is can named it as we want.
    // allJokes  is can named it as we want.
    .then((allPersons) => res.json({ people: allPersons }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
