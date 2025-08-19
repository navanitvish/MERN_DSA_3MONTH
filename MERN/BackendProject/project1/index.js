const express = require("express");
const app = express();

app.get('/', (req , res) =>{
    res.send("Hello World");
})

app.post('/firstpost', (req , res) =>{
    res.send("Hello World");
    res.status(200).json({
        message: "Welcome to your first backend server!", 
    })
    res.status(400).json({
        message: " fail your first backend server!"
    })

})

app.listen(5000, () =>{
    console.log("Server is running on port 5000");
})