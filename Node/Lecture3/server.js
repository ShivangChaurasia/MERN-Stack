
const server = require('http');
// console.log(server);
const fs = require('fs');
const app = server.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('./index.html','utf8',(err,data)=>{
            if(err) throw err;
            data = data.replace("[Path]", "Home Page");
            res.end(data);
            return;
        });
    }else if(req.url=="/about"){
        fs.readFile('./index.html','utf8',(err,data)=>{
            if(err) throw err;
            data = data.replace("[Path]", "About Page");
            res.end(data);
            return;
        });
    }
    else{
        res.end(JSON.stringify({message: "404 Not Found"}));
    }
    console.log("Server is running");
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});



