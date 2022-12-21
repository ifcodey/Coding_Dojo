const AuthorController = require("../controllers/author.controller")


module.exports = (app) => {
    app.get('/authors', AuthorController.getAllAuthor)
    app.post('/authors/new', AuthorController.getAllAuthor)


    app.get('/authors/:id', AuthorController.findProduct)
    app.delete('/authors/:id/delete', AuthorController.deleteProduct)
    app.put('/authors/:id/edit', AuthorController.updateProduct)
  }