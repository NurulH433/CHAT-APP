import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import protectedRoutes from "../middleware/protectedRoute.js";

const router = express.Router();

router.get('/:id', protectedRoutes, getMessage)
router.post('/send/:id', protectedRoutes, sendMessage)

export default router;