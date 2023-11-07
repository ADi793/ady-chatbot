const { validateUser } = require("../utils/validators");
const User = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/auth", async (req, res) => {
  try {
    const { error } = validateUser.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    let user = await User.findOne({ email: req.body.email }).select({ __v: 0 });
    if (user) {
      return res.json({ auth_token: user.generateAuthToken() });
    }

    user = new User(req.body);
    const newUser = await user.save();

    res.json({ auth_token: user.generateAuthToken() });
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occured." });
  }
});

module.exports = router;
