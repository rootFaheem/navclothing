const express = require("express");
const mongose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MogoDB
mongose
  .connect(db)
  .then(() => console.log("mongo connected"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/profile", profile);

app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
