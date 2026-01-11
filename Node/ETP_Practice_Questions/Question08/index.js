// **Q8**
// You need to manage book records using Mongoose.
// (a) Create a Book schema with fields: title, author, price, tags.
// (b) Write code to insert one book and fetch all books and display them. Link to MongoDB and store the data in the database.


const express = require('express');
const mongoose = require('mongoose');
const app = express();

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ETP_Practice_Questions");
        console.log('Connected to MongoDB');
    }catch(err){
        console.log("Error connecting database!!")
    }
}


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    tags: [String]
})

const book = new mongoose.model('Book',bookSchema);


async function insertBook(){
    try{
        const newBook = await book.create({
            title: "Book1",
            author: "auth1",
            price: 100,
            tags: ["fiction", "drama"]
        })

        console.log("Book data inserted")
    }catch(err){
        console.log("Error creating schema!!",err)
    }
}

async function fetchBooks(){
    try{
        console.log("Details of all the logged books are as below:\n");
        const found = await book.find();
        console.log(found);
    }catch(err){
        console.log("Error fetching books!!",err)
    }
}

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    connectDB();
    insertBook();
    fetchBooks();
})

