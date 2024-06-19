const express = require("express");

const app = express();

app.use("login", (req, res) => {
  res.json({ message: "Login..." });
});

app.listen(8888);
