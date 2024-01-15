// socket.js
const { Server } = require('socket.io');

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);
    socket.on("connection established", () => {
      console.log(`Connection established with client: ${socket.id}`);
    });
  });
  return io;
};

module.exports = { initSocket };
