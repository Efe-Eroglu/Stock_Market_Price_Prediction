const express = require("express")
const router = express.Router();
const User_Schema = require("../models/user_schema.js")

router.get("/", async(req,res)=>{
  try {
    const users = await User_Schema.find();
    res.status(200).json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({error:"Server Error"})
  }  
})

//Kullanıcı kayıt işlemi
router.post("/register",async(req,res)=>{
    try {
        const {name,email,password} = req.body
        const newUser = await new User_Schema({
            name,
            email,
            password
        })
        
        await newUser.save();

        res.status(201).json(newUser)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error"})
    }
})

module.exports = router;