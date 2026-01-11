// Q1. Cookies in Express

// You are asked to work with cookies.

// Q1 asks you to:

// Create a route /setcookie that sets a cookie
// sessionId = 12345

// Create a route /readcookie that reads and displays the cookie

// Create a delete route to remove the cookie


const express = require('express')
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.get('/setCookie', (req,res)=>{
    try{
        res.cookie("SessionId", "12345");
        res.send("Cookie Session Created!!")
        console.log("Cookie Session Created!!")
    }catch(err){
        console.log("Error Setting Cookie Session",err);
    }
})

app.get('/readCookie', (req,res)=>{
    try{
        const sessionId = req.cookies.SessionId;
        if(sessionId){
            console.log("SessionId:", sessionId);
            res.send(`SessionId found: ${sessionId}`);
        }else{
            console.log("No SessionId found in cookie");
            res.send("No SessionId found in cookie");
        }
    }catch(err){
        console.log("Error Reading Cookie Session",err);
    }
})


app.get("/deleteCookie", (req,res)=>{
    try{
        res.clearCookie("SessionId");
        res.send("Cookie Session Deleted!!")
        console.log("Cookie Session Deleted!!")
    }catch(err){
        console.log("Error Deleting Cookie Session",err);
    }
})





app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})