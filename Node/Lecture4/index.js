const exp = require('express');
const app = exp();
const fs = require('fs');
app.get('/',(req,res)=>{
    if(req.url==="/"){
        fs.readFile("./index.html","utf-8",(err,data)=>{
            if(err) throw err;
            data = data.replace("[Path]","Home Page");
            res.send(data);
        })
    }else{
        res.send("File Not Found 404");
    }
})


app.get('/submit',(req,res)=>{
    if(req.url==="/submit"){
        fs.readFile("./index.html","utf-8",(err,data)=>{
            if(err) throw err;
            data = data.replace("[Path]","Submit Page");
            res.send(data);
        })
    }else{
        res.end("Aankh ke Andhe, theek se dekh!!!")
    }
})



app.post('/submit',(req,res)=>{
    if(req.url==="/submit"){
        res.end("Form Submitted Sucessfully!!!");
    }else{
        res.end("Aankh ke Andhe, theek se dekh!!!")
    }
})


app.put('/update',(req,res)=>{
    res.end("Data Updated Sucessfully!!!");
})
app.delete('/update',(req,res)=>{
    res.end("Data Deleted Sucessfully!!!");
})

const PORT = 3000; 
app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT} Sucessfully!!!`)
});

