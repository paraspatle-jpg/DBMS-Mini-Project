import express, { Router } from 'express';
import authController from '../controllers/authControllers'

const router = express.Router();

router.post('/login',authController.login);
router.post('/signup',authController.signup);