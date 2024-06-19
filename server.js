require("dotenv").config();
const express = require("express");

const app = express();


let port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`ป๊อกๆๆๆๆป๊อกป๊อกกะต๊อกก server running laew on port `, port)
);


app.use("login", (req, res) => {
  res.json({ message: "Login..." });

app.use("/register", (req, res) => {
  console.log("register noiii 😘");
  res.json({ message: "register noiii 😘" });

});

app.listen(8888);

