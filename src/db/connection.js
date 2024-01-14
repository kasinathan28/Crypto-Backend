
const mongoose = require('mongoose')
require('dotenv').config();

console.log('Database URI:', process.env.DATABASE);

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Mongodb Atlas Connected Successfully...');
}).catch((error)=>{
    console.log('Mongdb connection error: '+error);
})