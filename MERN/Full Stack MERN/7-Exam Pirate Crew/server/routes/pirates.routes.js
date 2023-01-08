const PirateController = require("../controllers/pirates.controllers");
const Pirate = require ("../models/pirates.models");

module.exports = app => {
    app.get("/api/pirates", PirateController.findAllPirates);
    app.get("/api/pirates/:_id", PirateController.findOneSinglePirate);
    app.put("/api/pirates/update/:_id", PirateController.updateExistingPirate);
    app.post("/api/pirates/new", PirateController.createNewPirate);
    app.delete("/api/pirates/delete/:_id", PirateController.deleteAnExistingPirate);
};