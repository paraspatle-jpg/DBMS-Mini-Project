import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({});

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})


app.listen('5000',()=>{
    console.log('Sever Listening on the port 5000')
})