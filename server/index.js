require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");

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


// DATABASE REQUEST // 
// app.get('products', (req, res) => {
//     req.app.get("db") // referencing database 
//       .getProducts()
//       .then(response => {
//         res.status(200).json(response);
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//   });

app.get('/products', controller.getProducts);


app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});