import express from "express";
import { signup, login, logout } from '../controllers/authController.js'; // Importing the auth controllers

const router = express.Router();


router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

export default router;

// Placeholder for future authentication routes
// e.g., router.post('/login', loginHandler);
// e.g., router.post('/register', registerHandler);