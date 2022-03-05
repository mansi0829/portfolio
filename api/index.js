let express = require("express");
let connection = require("./db/connection");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

let app = express();

dotenv.config();
app.use(express.json());

connection();

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000);
