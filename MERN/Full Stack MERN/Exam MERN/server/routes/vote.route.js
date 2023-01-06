const CompController = require("../controllers/vote.controller");

module.exports = (app) => {
  // Getting.
  app.get("/vote", CompController.findAllComp);
  app.get("/vote/:id", CompController.findComp);

  // Posting.
  app.post("/vote/new", CompController.createComp);

  // Deleting.
  app.delete("/vote/:id/delete", CompController.deleteComp);

  // Putting.
  app.put("/vote/:id/edit", CompController.updateComp);

};
