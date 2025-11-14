import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authorizeRequest } from "../utils/jwt.js";
import { getMyProfile, updateMyProfile } from "../controllers/profileController.js";

const router = express.Router();

router.use(asyncHandler(authorizeRequest));

router.get("/me", asyncHandler(getMyProfile));
router.put("/me", asyncHandler(updateMyProfile));

export default router;
