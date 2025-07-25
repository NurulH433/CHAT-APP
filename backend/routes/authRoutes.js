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

// This file is set up to handle authentication routes in the future.
// Currently, it exports an empty router that can be extended later.

// To use this router, you would typically import it in your main server file
// and use it with app.use('/auth', authRoutes);