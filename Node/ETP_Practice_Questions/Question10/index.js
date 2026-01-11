const express =  require('express')
const app = express();
app.use(express.json());
let products = []

app.get('/products', (req,res,next)=>{
    try{
        res.status(200).json(products);
    }catch(err){
        next(err);
    }
})

app.post('/products', (req,res,next)=>{
    try{
        const product = req.body;
        products.push(product);
        res.status(200).send("Products added Sucessfully!!");
    }catch(err){
        next(err);
    }

})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Internal Server Error!!");
})

app.listen(3000, ()=>{
    console.log("Server Running!!!")
})