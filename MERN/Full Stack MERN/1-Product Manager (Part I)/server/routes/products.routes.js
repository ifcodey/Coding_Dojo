const productsController = require('../controllers/products.controler')
module.exports = (app) => {
    // Getting.
    app.get('/products', productsController.findAllProduct)
    app.get('/products/:id', productsController.findProduct)

    // Posting.
    app.post('/products/new', productsController.newProduct)

    // Deleting.
    app.delete('/products/:id/delete', productsController.deleteProduct)

    // Putting.
    app.put('/products/:id/edit', productsController.updateProduct)
}