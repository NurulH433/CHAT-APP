import express from "express";
import { getUsersForSidebar } from "../controllers/userController.js";
import protectedRoutes from "../middleware/protectedRoute.js";

const router = express.Router()

router.get('/', protectedRoutes, getUsersForSidebar)

export default router;