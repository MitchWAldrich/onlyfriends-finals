const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const PORT = 3000;
const router = require("./router");

io.on("connection", socket => {
  console.log("A user has connected to the server!");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

app.use(router);

// Specifies the port where the chat server is running
server.listen(PORT, () => console.log("Chat Server is now live on port 3000"));