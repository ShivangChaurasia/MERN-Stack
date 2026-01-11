const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    const parUrl = url.parse(req.url, true);
    const query = parUrl.query;

    res.end(JSON.stringify(query));

})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})


