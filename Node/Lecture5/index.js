const http = require('http');

const server = http.createServer((req,res)=>{
    // res.end("Hello from the other side");
    if(req.method==='GET'){
        res.end("This is a GET request");
    }else if(req.method==='POST'){
        res.end("This is a POST request");
    }else if(req.method==='PUT'){
        res.end("This is a PUT request");
    }else if(req.method==='DELETE'){
        res.end("This is a DELETE request");
    }else if(req.method==='PATCH'){
        res.end("This is a PATCH request");
    }else{
        res.end("This is a unknown request");
    }
})

PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Port Listening at ${PORT}`)
})