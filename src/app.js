const express = require("express");
var app = express();

require("./db/connection");
const User = require("./models/users");

const PORT = process.env.PORT || 8000;

app.use(express.json());

// Create a new user
app.post("/user", (req, res) => {
  console.log("USER DATA", req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log("Listening on port at-->", PORT);
});
