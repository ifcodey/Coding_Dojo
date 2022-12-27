const projectController = require("../controllers/project.controller");

module.exports = (app) => {
  // Getting.
  app.get("/projects", projectController.findAllProjects);
  app.get("/projects/:id", projectController.findProject);

  // Posting.
  app.post("/projects/new", projectController.createProject);

  // Deleting.
  app.delete("/projects/:id/delete", projectController.deleteProject);

  // Putting.
  app.put("/projects/:id/edit", projectController.updateProject);
};