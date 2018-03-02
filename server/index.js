require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const Middleware = require("./middleware/middleware");
const controller = require("./controllers/controller");

const port = 3001;

const app = express();

const {
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET
} = process.env;

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
      console.log("Hit inside strat");
      console.log(profile);
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
    console.log("hit here")
  )
);

passport.serializeUser((user, done) => {
  console.log("Serialize user");
  return done(null, user);
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.use(Middleware);

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/shop",
    failureRedirect: "http://localhost:3000/#/fail"
  })
);
app.get("/products", controller.getProducts);
app.get("/productdetails/:product_id", controller.getProductById);
app.post("/shoppingcart", controller.addToCart);
app.get("/shoppingcart", controller.cart);
app.delete("/delete", controller.deleteFromCart);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
