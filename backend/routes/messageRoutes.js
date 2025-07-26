import express from "express";
import { sendMessage } from "../controllers/messageController.js";
import protectedRoutes from "../middleware/protectedRoute.js";

const router = express.Router();

router.post('/send/:userId', protectedRoutes, sendMessage)

export default router;