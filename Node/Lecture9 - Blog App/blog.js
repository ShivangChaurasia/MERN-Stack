const express = require('express')
const mongoose = require('mongoose')
const app = express();


async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/local/blogs")
        console.log("DB Connected Successfully")
    }catch(err){
        console.log(err)
    }
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})


app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send('Internal Server Error')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
    connectDB()
})

