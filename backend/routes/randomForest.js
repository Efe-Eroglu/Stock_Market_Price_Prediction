const express = require("express");
const router = express.Router();
const rforest_schema = require("../models/randomForest_schema.js");


//Tüm hisseleri getirir
router.get("/", async (req, res) => {
  try {
    const hisse = await rforest_schema.find();

    res.status(200).json(hisse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;