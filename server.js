const express = require('express');
const router = require('./src/Routes/router');
const cors = require("cors");
const {Server} = require('socket.io');
const http = require('http');
const app = express();
const PORT = 5000;
const server = http.createServer(app);
const io = new Server(server);
require("./src/db/connection");
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use('/', router);


// io.on("connect",(socket)=>
// {
//   console.log("Connected");

//   socket.on("disconnect",()=>{
//     console.log("Disconnected");
//   });
// });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
