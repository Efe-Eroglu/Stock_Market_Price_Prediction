const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const mainRoute = require("./routes/index.js")
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

app.use("/api",mainRoute)

app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Sunucu ${process.env.PORT} portunda çalışıyor`);
})