const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;
const router = require("./router");
const users = {};
const axios = require('axios');

io.on("connection", socket => {
  console.log("A user has connected to the server!");

  // socket.on("user joined", name => {
  //   users[socket.id] = name // socket.id could be match_id
  //   socket.broadcast.emit("user connected", name)
  // })

  //ChatMessages
  socket.on("SEND_MESSAGE", msg => {
    console.log("SEND_MESSAGE", msg);

    io.emit("SEND_MESSAGE", msg);

    axios.post('http://localhost:8001/api/messages', msg)
    .then(response => {
      setMessages({ messages: [state.messages, msg] })
    })
    .catch((err) => {
      console.log("Error on axios post: ", err)
    })
  });

  socket.on("initial", msg => {
    console.log("INIT:", msg);
  })

});

app.use(router);

// Specifies the port where the chat server is running
server.listen(PORT, () => console.log("Chat Server is now live on port 3000"));