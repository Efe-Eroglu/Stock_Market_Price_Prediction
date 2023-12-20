const express = require("express");
const router = express.Router();
const ShareSchema = require("../models/share_schema.js");



router.get("/", async (req, res) => {
  try {
    const hisse = await ShareSchema.find();

    res.status(200).json(hisse);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});



module.exports = router;