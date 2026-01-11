const ws = require("ws");
const wss = new ws.Server({ port: 3000});

let clients = [];

function broadCast(msg){
    wss.clients.forEach((client)=>{
        if(client.readyState === ws.OPEN){
            client.send(msg);
        }
    })
}

wss.on("connection", (ws)=>{
    broadCast("A user has Joined the chat");
    ws.on("message",(msg)=>{
        broadCast(msg.toString());
    })
})

console.log("Server Running!!!")