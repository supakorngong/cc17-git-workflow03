const express = require("express");

const app = express();

app.use("/register", (req, res) => {
  console.log("register noiii 😘");
  res.json({ message: "register noiii 😘" });
});

app.listen(8888);
