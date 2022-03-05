// controllers/ProductsController.js
// Reglas para la respuesta para la petición "/products/create"
exports.create = (req, res) => {
  res.render('products/create');
}

// controllers/ProductsController.js
// Importa el modelo de productos
let ProductModel = require('../models/Product')
// ...
// Almacena el producto
exports.store = (req, res) => {
  // Crea un objeto con la información del usuario
  let product = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  };
  // Crea el producto
  ProductModel.create(product)
    .then((id) => {
      // Al finalizar la creación, reenvía al usuario a la página
      // inicial
      res.redirect('../');
    });
}

// Muestra el producto
exports.show = (req, res) => {
  // Obtiene el id que viene en la url
  let id = req.params.id;
  // Busca dentro de la base de datos el producto con el id indicado
  ProductModel.find(id).then((product) => {
    // Si el producto no existe entonces
    if (product == null) {
      // Regresa el error 404
      res.status(404).send('Not found');
      return;
    }
    // Si el producto existe entonces muestra la vista products/show.hbs
    // con la información del producto
    res.render('products/show', {product: product});
  });
}
