const CompController = require("../controllers/comp.controller");

module.exports = (app) => {
  // Getting.
  app.get("/api/competitions", CompController.findAllComp);
  app.get("/api/competitions/:id", CompController.findComp);
  app.get("/api/topThree", CompController.getTop3);
  // Posting.
  app.post("/api/competitions/new", CompController.createComp);

  // Deleting.
  app.delete("/api/competitions/:id/delete", CompController.deleteComp);

  // Putting.
  app.put("/api/competitions/:id/edit", CompController.updateComp);
};

