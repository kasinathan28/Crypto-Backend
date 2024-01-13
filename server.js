const express = require('express');
const router = require('./src/Routes/router');
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

app.use('/', router);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
