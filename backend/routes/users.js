const express = require("express")
const router = express.Router();
const bcrypt = require("bcryptjs")
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

        const existingEmail = await User_Schema.findOne({email});
        const existingName = await User_Schema.findOne({name});

        if(existingEmail){
             return res.status(400).json({error:"Email address is already registered"})   
        }

        if(existingName){
            return res.status(400).json({error:"Username is already registered"})   
       }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await new User_Schema({
            name,
            email,
            password:hashedPassword,
        })
        
        await newUser.save();

        res.status(201).json(newUser)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error"})
    }
})

module.exports = router;