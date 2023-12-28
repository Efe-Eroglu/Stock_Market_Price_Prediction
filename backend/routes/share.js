const express = require("express");
const router = express.Router();
const ShareSchema = require("../models/share_schema.js");


//Tüm hisseleri getirir
router.get("/", async (req, res) => {
  try {
    const hisse = await ShareSchema.find();

    res.status(200).json(hisse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
//Id ye göre tek hisse getirir
router.get("/:hisseID", async (req, res) => {
  try {
    const hisseID = req.params.hisseID;
    try {
      const hisse = await ShareSchema.findById(hisseID);
      if (!hisse) {
        return res.status(404).json({ error: "Share not found" });
      }
      res.status(200).json(hisse);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Share not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;




