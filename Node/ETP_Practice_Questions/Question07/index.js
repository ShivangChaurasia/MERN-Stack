const express = require('express')
const app = express();

app.use(express.json());
app.post('/signUp', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password){
        return res.status(400).send('Email and password are required');
    }
    if(!email.includes('@') || !email.includes('.')){
        return res.status(400).send('Invalid email format');
    }
    if(password.length < 6){
        return res.status(400).send('Password must be at least 6 characters long');
    }
    else{
        return res.status(200).send("SignUp Successfull!!!")
    }
})



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})