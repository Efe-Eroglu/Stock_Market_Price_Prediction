const express = require("express");
const router = express.Router();
const ann_schema = require("../models/ann_schema.js");


//Tüm hisseleri getirir
router.get("/", async (req, res) => {
  try {
    const hisse = await ann_schema.find();

    res.status(200).json(hisse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;




