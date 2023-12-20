const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req,res)=>{
    res.send("Backend")
})

app.get("/api", (req,res)=>{
    res.send("Api pages")
})


app.listen(PORT,()=>{
    connect();
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
})