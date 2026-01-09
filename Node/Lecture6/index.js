// API => SOAP => Simple Object Access Protocol
// A protocol for exchanging structured information in web services

// REST=> Representational State Transfer
// An architectural style for designing networked applications


// Restful API Principles:
// 1. Client-Server Architecture
// 2. Statelessness
// 3. Cacheability
// 4. Uniform Interface
// 5. Layered System
// 6. Code on Demand (Optional)
// 7. Resource-Based URIs



const express = require('express');
const app = express();


app.get('/blogs', (req,res)=>{
    res.send(req.query);  //for query parameters, eg: /blogs?author=John
})
app.post('/blogs', (req,res)=>{
    res.send(req.body); //for body parameters, eg: {title: 'My Blog', content: 'This is my blog content'}
})
app.put('/blogs/:id', (req,res)=>{
    res.send(req.params);
    
})
app.delete('/blogs/:id', (req,res)=>{
    res.send(req.params);
})



// CRUD
// Create => POST
// Read => GET
// Update => PUT/PATCH
// Delete => DELETE



app.listen(3000, (req,res)=>{
    console.log('Server started');
})












































































