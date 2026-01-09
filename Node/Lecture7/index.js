const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    return res.status(200).json({message: "This is get Command"})
})



app.listen(3000,()=>{
    console.log("Server Started!!");
})