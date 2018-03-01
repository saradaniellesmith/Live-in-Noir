require("dotenv").config();

module.exports = {

  getProducts: (req, res, next) => {
    const db = req.app.get('db');
    db.getProducts()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },
  
  getProductById: (req, res, next) => {
    const db = req.app.get('db');
    db.getProductById([req.params.product_id])
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },

  addToCart: (req, res, next) => {
    console.log("test")
    req.session.user.cart.push(req.body)
    res.status(200).json(req.session.user)
  }
}