import express, { Router } from 'express';

const router = express.Router();

router.post('/login',()=>{
    res.send("Welcome to Login");
});