require("dotenv").config();
const express = require("express");

const app = express();

let port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`ป๊อกๆๆๆๆป๊อกป๊อกกะต๊อกก server running laew on port `, port)
);
