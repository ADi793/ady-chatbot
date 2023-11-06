const express = require("express");
const router = express.Router();

router.post("/auth", (req, res) => {
  res.json({ token: "adil siddiqui" });
});

module.exports = router;
