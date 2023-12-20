const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();


dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDb");
    } catch (error) {
        throw error;
    }
}
app.get("/", (req,res)=>{
    res.send("Backend")
})

app.get("/api", (req,res)=>{
    res.send("Api pages")
})


app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Sunucu ${process.env.PORT} portunda çalışıyor`);
})