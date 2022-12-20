const jokesController = require("../controllers/jokes.controller");

// like url.py in django to send from (controller to front end).
module.exports = (app) => {
  // test it on postman.
  app.get("/jokes", jokesController.findAllJokes);
  app.get("/jokes/:id", jokesController.findJoke);
  app.get("/jokes/exist/:id", jokesController.checkUniqueness);

  app.post("/jokes/new", jokesController.createNewJoke);
  app.delete("/jokes/delete/:id", jokesController.deleteJoke);
  app.put("/jokes/:id/edit", jokesController.updateJoke);
};
