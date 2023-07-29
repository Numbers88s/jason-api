const express = require("express");
const app = express();
const port = 3000;
const { createUser } = require("./controller/users");

app.set("view engine", "ejs");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  var stuff = "This is stuff";
  res.render("profile", { stuff: stuff });
});

app.post("/profile/edit", createUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
