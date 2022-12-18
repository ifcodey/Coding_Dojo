const express = require("express");
const app = express();
const port = 8000;

// req is shorthand for request
// res is shorthand for response
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" },
];

// http://localhost:8000/api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id);
  // assuming this id is the index of the users array we could return one user this way
  res.json(users[req.params.id]);
});

app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json({ status: "ok" });
});

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  res.json({ status: "ok" });
});

app.patch("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // update first name only
  users[id].firstName = req.body.firstName;
  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  res.json({ status: "ok" });
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
