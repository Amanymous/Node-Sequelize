const express = require("express");
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
require("./models");
const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hi");
});

app.post("/user", userController.createUser);
app.get("/users", userController.getUsers);
app.get("/user/:id", userController.getUserId);
app.patch("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);
const PORT = 3000;
// User.sync();
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
