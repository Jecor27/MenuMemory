import express from 'express';
import { signupUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

//login route
router.post('/login', () => {})

//signup route
router.post('/signup', () => {})




export default router;