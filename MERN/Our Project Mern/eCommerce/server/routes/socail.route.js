const TeamsController = require("../controllers/TM.controller");

module.exports = (app) => {
  // Getting.
  app.get("/teams", TeamsController.findAllTeams);
  app.get("/teams/:id", TeamsController.findTeam);

  // Posting.
  app.post("/teams/new", TeamsController.createTeam);

  // Deleting.
  app.delete("/teams/:id/delete", TeamsController.deleteTeam);

  // Putting.
  app.put("/teams/:id/edit", TeamsController.updateTeam);
};
