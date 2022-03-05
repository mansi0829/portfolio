let express = require("express");
let connection = require("./db/connection");
const dotenv = require("dotenv");
let app = express();

dotenv.config();

connection();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000);
