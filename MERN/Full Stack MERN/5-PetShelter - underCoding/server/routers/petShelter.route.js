const Pets = require('../controllers/teamManager.controller');
module.exports = function (app) {
    app.post('/api/Pet', Pets.createNewPet);
    app.get('/api/Pets', Pets.getAllPets);
    app.get('/api/Pet/:id', Pets.getPet);

    app.put('/api/Pet/:id', Pets.updatePet);
    app.delete('/api/Pet/:id', Pets.deletePet);
}

