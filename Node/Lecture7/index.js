const { log } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());


app.get('/',(req,res,next)=>{
    try{
        return res.status(200).json({message: "This is get Command"})
    }catch(err){
        next(err)
    }
})

function logDetails(req,res,next){
    let data = new Date().toLocaleString() + " "+ req.method + "\n";
    fs.appendFile('./logFile.txt', data, (err)=>{
        if(err) throw err;
        next();
    })

}

app.post('/', logDetails, (req,res)=>{
    res.send(req.body)
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send({message:"Something went Wrong"})
})

app.use((req,res,next)=>{
    res.status(404).send({message: "Route not found at", reqedUrl: req.originalUrl})
})

app.listen(3000,()=>{
    console.log("Server Started!!");
})

















