const express = require("express")
const router = express.Router();


router.get("/", async(req,res)=>{
    res.send("Tüm kullanıcılar getirildi.")
})


module.exports = router;