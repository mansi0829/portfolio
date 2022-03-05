const router = require("express").Router();

const User = require("../models/User");

//Register

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

//Login


module.exports = router