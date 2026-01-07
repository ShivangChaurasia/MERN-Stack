const express = require('express');
const server = express();
server.get('/',(req,res)=>{
    res.status(200).send("Hello This is Get request");
})
server.post('/',(req,res)=>{
    res.status(200).send("Hello This is Post request");
})
server.delete('/',(req,res)=>{
    res.status(200).send("Hello This is Delete request");
})
server.put('/',(req,res)=>{
    res.status(200).send("Hello This is Put request");
})
server.patch('/',(req,res)=>{
    res.status(200).send("Hello This is Patch request");
})

server.listen(3000,()=>{
    console.log("Server Running Successfully!!");
})