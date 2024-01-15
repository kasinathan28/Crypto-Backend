// server.js
const express = require('express');
const router = require('./src/Routes/router');
const cors = require('cors');
const debug = require('debug')('app:server');
const http = require('http');
const { initSocket } = require('./websocket/webSocket');
const PORT = 5000;

require('./src/db/connection');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

const io = initSocket(server);

app.use(cors());
app.use(express.json());
app.use('/', router);

server.listen(PORT, () => {
  debug(`Server is running on http://localhost:${PORT}`);
});
