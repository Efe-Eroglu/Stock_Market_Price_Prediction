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


router.get("/:hisseAd", async (req,res) => {
  try {
    const hisseAd = req.params.hisseAd;
    const bilgiler = await ann_schema.find({hisseAd:hisseAd});

    if(bilgiler.length === 0){
      return res.status(404).json({error:"Share not found"})
    }

    res.status(200).json(bilgiler)
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"Server Error"})
  }
})

module.exports = router;




