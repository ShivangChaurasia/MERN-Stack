require('dotenv').config();
const url = process.env.dburl;
const express = require('express');
const app = express();

const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(url);
        console.log("Database connected successfully!!");
    }catch(err){
        console.log("Error connecting database!!",err);
    }
}

const course =  new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    platform : String
})


const courseModel = mongoose.model("course",course);

async function createCourse(){
    try{
        // const newCourse = await courseModel.create({
        //     title : "Node.js",
        //     platform : "Udemy"
        // })
        const newCourse = new courseModel({
            title : "Node.js",
            platform : "Udemy"
        })
        await newCourse.save();
    }catch(err){
        console.log("Error Creating course",err);
    }
}


async function getCourses(){
    try{
        const courses = await courseModel.find();
        console.log(courses);
    }catch(err){
        console.log("Error fetching courses",err);
    }
}


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    connectDB();
    createCourse();
    getCourses();
})

