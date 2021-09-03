const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;
const router = require("./router");
const users = {};

io.on("connection", socket => {
  console.log("A user has connected to the server!");
  // broadcast if user is online!
  // socket.on("user joined", name => {
  //   users[socket.id] = name // socket.id could be match_id
  //   socket.broadcast.emit("user connected", name)
  // })
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    // socket.broadcast.emit("user")
  })
});

app.use(router);

// Specifies the port where the chat server is running
server.listen(PORT, () => console.log("Chat Server is now live on port 3000"));