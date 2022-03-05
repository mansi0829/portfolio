const mongoose = require("mongoose");

module.exports = () => {
  const url = process.env.MONGO_URL;
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("Connected to mongo"));
};
