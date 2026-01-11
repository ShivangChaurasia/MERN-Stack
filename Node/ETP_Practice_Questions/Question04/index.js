const express = require('express');
const app = express();


function authentication(req,res,next){
    const auth = req.query.auth;
    if(auth === 'true'){
        next();
    }
    else{
        res.send('Authentication failed');
    }
}

function roleCheck(req,res,next){
    const role =req.query.role;
    if(role==='super-admin'){
        next();
    }else{
        res.send('Role check failed');
    }
}

function logging(req,res,next){
    const url = req.url;
    console.log("Acessing", url);
    next();
}

app.get('/dashboard', authentication, roleCheck, logging, (req,res)=>{
    res.send("Welcome super-admin, You're Verified!!")
})













app.listen(3000, () => {
    console.log('Server is running on port 3000');
});