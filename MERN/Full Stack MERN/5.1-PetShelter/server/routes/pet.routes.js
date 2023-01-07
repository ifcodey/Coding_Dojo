const PetController = require('../controllers/pet.controller');

module.exports = function (app) {
    app.get('/api', PetController.index);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pet/:_id', PetController.getOne);

    app.post('/api/pet', PetController.createPet);

    app.delete('/api/pet/:_id', PetController.deleteObject);

    app.put('/api/pet/:_id', PetController.updateObject);
    app.put('/api/like/:_id', PetController.likePet);
}