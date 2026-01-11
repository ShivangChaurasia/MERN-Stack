const express = require('express')
const app = express();
function adminAuth(req,res,next){
    const key = req.query.key;
    if(key==="123"){
        next();
    }else{
        res.status(200).send("Access Denied")
    }
}

app.get('/admin', adminAuth,(req,res)=>{
    res.send("Welcome Admin");
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})