require("dotenv").config();


module.exports = {

  getProducts: (req, res, next) => {
    const db = req.app.get('db');
    db.getProducts([req.params.id])
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },
  
  getProductsById: (req, res, next) => {
    const db = req.app.get('db');
    db.getProductsById()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },


}