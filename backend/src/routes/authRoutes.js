import express from "express"
import { Register, Login } from "../controllers/authController.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = express.Router();

router.post("/register", asyncHandler(Register));
router.post("/login", asyncHandler(Login));

export default router;