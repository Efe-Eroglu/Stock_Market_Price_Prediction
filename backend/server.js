const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const mainRoute = require("./routes/index.js")
const cors = require('cors');
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

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/api",mainRoute)

app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Sunucu ${process.env.PORT} portunda çalışıyor`);
})