require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const massive = require("massive");


const port = 3001;

const app = express();

// DATABASE CONNECTION //
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  }).catch(console.log);

// MIDDLEWARES // 
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

// DATABASE REQUEST // 
app.get("/api/test", (req, res) => {
    req.app.get("db") // referencing database 
      .getUser()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});