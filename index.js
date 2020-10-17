const express =require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const app = express()

app.use(bodyParser.json());
app.use(cors()); 

const port=5000;

app.get('/' , (req,res)=>{
    res.send("hello from db")
})

 app.listen(process.env.PORT || port)