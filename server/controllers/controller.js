require("dotenv").config();
const passport = require('passport');

module.exports = {
  getProducts: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getProducts()
      .then(products => res.status(200).json(products))
      .catch(() => res.status(500).json());
  },

  getProductById: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getProductById([req.params.product_id])
      .then(products => res.status(200).json(products))
      .catch(() => res.status(500).json());
  },

  getShoes: (req, res, next) => {
    const db = req.app.get("db");
    db 
      .getShoes()
      .then(shoes => res.status(200).json(shoes))
      .catch(() => res.status(500).json());
  },

  getShoesById: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getShoesById([req.params.shoe_id])
      .then(shoes => res.status(200).json(shoes))
      .catch(() => res.status(500).json());
  },

  addToCart: (req, res, next) => {
    req.session.user.cart.push(req.body);
    res.status(200).json(req.session.user);
  },

  cart: (req, res, next) => {
    res.status(200).json(req.session.user);
  },

  deleteFromCart: (req, res, next) => {
    const { product_id } = req.params;
    const { cart } = req.session.user;

    const i = cart.findIndex((product) => product.product_id == product_id);
    cart.splice(i, 1);
    res.status(200).json(req.session.user);
  },

  login: (res, req, next) => {
    console.log("hit");
    passport.authenticate("auth0", {
      successRedirect: "http://localhost:3001/#/shop",
      failureRedirect: "http://localhost:3001/#/"
    })
  },

  getProductsByPrice: (req, res, next) => {
    const db = req.app.get("db");
    db
    .getProductsByPrice()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },

  getProductsByPriceDesc: (req, res, next) => {
    const db = req.app.get("db");
    db
    .getProductsByPriceDesc()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },

  getProductsByBrand: (req, res, next) => {
    const db = req.app.get("db");
    db
    .getProductsByBrand()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  },

  getProductsByBrandDesc: (req, res, next) => {
    const db = req.app.get("db");
    db
    .getProductsByBrandDesc()
    .then(products => res.status(200).json(products))
    .catch( () => res.status(500).json());
  }

};
