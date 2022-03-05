const router = require("express").Router();
const User = require("../models/User");

//Get User
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
