const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  // Getting.
  app.get("/authors", AuthorController.findAllAuthor);
  app.get("/authors/:id", AuthorController.findAuthor);

  // Posting.
  app.post("/authors/new", AuthorController.createAuthor);

  // Deleting.
  app.delete("/authors/:id/delete", AuthorController.deleteAuthor);

  // Putting.
  app.put("/authors/:id/edit", AuthorController.updateAuthor);
};
