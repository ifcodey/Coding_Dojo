const Pets = require('../controllers/teamManager.controller');
module.exports = function (app) {
    app.post('/api/Pet', Pets.createNewPet);
    app.get('/api/Pets', Pets.getAllPets);
    app.get('/api/Pet/:id', Pets.getPet);

    app.put('/api/Pet/:id', Pets.updatePet);
    app.delete('/api/Pet/:id', Pets.deletePet);
}

// app.get('/api', UserController.index);
// app.post('/api/users/', UserController.createNewUser);
// app.get("/api/users/", UserController.findAllUsers);
// app.get("/api/users/:id", UserController.findOneSingleUser);
// app.put("/api/users/update/:id", UserController.updateExistingUser);
// app.delete("/api/users/delete/:id", UserController.deleteAnExistingUser);
