//Server-side Setup 
const express = require('express'); 
const app = express(); 
//http server for socket.io
const http = require('http').Server(app); 
const io = require('socket.io')(http);

app.get('/:user',(req,res)=>{
  res.sendFile(__dirname + '/index.html'); 
})
//2  receiving the client message
io.on('connection', (socket)=>{
  console.log('a user connected'); 
  //getting the message from the client 
  socket.on('chat message',function(msg){
     console.log(msg); 
     //sending it back to the client
     io.emit('chat message', msg);
  })
  //user disconnect
  socket.on('disconnect', ()=>{
    console.log('user disconnected'); 
  })

})


http.listen(3000, ()=>{
  console.log('listening on port 3000'); 
})