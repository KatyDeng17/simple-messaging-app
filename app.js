//Server-side Setup 
const express = require('express'); 
const app = express(); 
//http server for socket.io
const http = require('http').Server(app); 
const io = require('socket.io')(http);

app.get('/:user',(req,res)=>{
  res.sendFile(__dirname + '/index.html'); 
})

io.on('connection', (socket)=>{
  console.log('a user connected'); 
}); 

http.listen(3000, ()=>{
  console.log('listening on port 3000'); 
})