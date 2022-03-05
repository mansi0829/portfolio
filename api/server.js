let express = require("express");
let connection = require("./db/connection");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
let app = express();

dotenv.config();
app.use(express.json());

connection();

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000);
