require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const stripe = require("stripe");
const bodyParser = require("body-parser");

const Middleware = require("./middleware/middleware");
const controller = require("./controllers/controller");

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const port = 3001;

const app = express();

const {
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  PUBLISH_KEY,
  SECRET_KEY
} = process.env;


configureServer(app);
configureRoutes(app);

// SESSION //
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// DATABASE CONNECTION //
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

// MIDDLEWARES //
app.use(json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

//AUTH0//
passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      scope: "openid profile",
      callbackURL: "/auth"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuthId([profile.id, profile.displayName])
              .then(created => done(null, created[0]));
          } else {
            return done(null, response[0]);
          }
        });
    },
  )
);

passport.serializeUser((user, done) => {
  return done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.use(Middleware);

// Auth0 //
app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/shop",
    failureRedirect: "http://localhost:3000/#/fail"
  })
);
app.get('me', (req, res, next) => {
  if(!req.user)res.redirect('/auth');
  else {
    res.status(200).send(req.user)
  }
});
app.get('/logout', (req, res, next) => {
  req.session.destroy( () => {
    res.redirect('http://localhost:3000/');
  });
});
app.get("/checkUser", (req, res, next) => {
  res.status(200).send(req.user)
});

// Endpoints //
app.get("/products", controller.getProducts);
app.get("/productdetails/:product_id", controller.getProductById);
app.post("/shoppingcart", controller.addToCart);
app.get("/shoppingcart", controller.cart);
app.delete("/delete/:product_id", controller.deleteFromCart);
app.get("/products/price", controller.getProductsByPrice);
app.get("/products/price_desc", controller.getProductsByPriceDesc);
app.get("/products/brand", controller.getProductsByBrand);
app.get("/products/brand_desc", controller.getProductsByBrandDesc);

// Stripe //


app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
