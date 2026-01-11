// mongoose: it is a ODM (Object Data Modeling) library for MongoDB and Node.js.
// it is used to define the schema of the database.

// 127.0.0.1:27017/
// local: it is the name of the database.
// blogs: it is the name of the collection.

// schema: it is the blueprint of the database.
// it defines the structure of the documents in the collection.

// model: it is the constructor function that is used to create documents in the collection.
// it is created using the schema.


const express = require('express')
const mongoose = require('mongoose')
const app = express();


async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/blogs")
        console.log("DB Connected Successfully")
    }catch(err){
        console.log(err)
    }
}

const user = new mongoose.Schema({
    firstname :  String,
    lastname : String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String
})

const userModel =  mongoose.model("User", user)

async function createUser(){
    try{
        let newUser = await userModel.create({
            firstname : "Shivang",
            lastname: "chaurasia",
            email: "shivangchaurasia@gmail.com",
            password: "123456"
        })
        // let newUser = new userModel({
        //     firstname : "Shivang 1",
        //     lastname: "chaurasia1",
        //     email: "shivangchaurasia17@gmail.com1",
        //     password: "1234561"
        // })
        // await newUser.save()
        // const user = await userModel.findOneAndDelete({email: "shivangchaurasia17@gmail.com"})
        console.log(newUser)
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
    createUser()
})
