const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const passport = require("passport");

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MogoDB
mongose
  .connect(db)
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport.js")(passport);

app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
