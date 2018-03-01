require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const Middleware = require('./middleware/middleware');

const controller = require('./controllers/controller');

const port = 3001;

const app = express();

const { CONNECTION_STRING, DOMAIN, CLIENT_ID, CLIENT_SECRET, SESSION_SECRET } = process.env;

// DATABASE CONNECTION //
massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  }).catch(console.log);

// MIDDLEWARES // 
app.use(json());
app.use(cors());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(Middleware);

app.get('/products', controller.getProducts);
app.get('/productdetails/:product_id', controller.getProductById);
app.post('/shoppingcart', controller.addToCart);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});