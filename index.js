const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
require("./models");
const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hi");
});

app.get("/add", userController.add);
const PORT = 3000;
// User.sync();
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
