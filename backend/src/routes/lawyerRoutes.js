// src/routes/lawyerRoutes.js
import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authorizeRequest } from "../utils/jwt.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import { ROLES } from "../config/roles.js";
import { getLawyers,getLawyerById,createLawyer,updateLawyer,deactivateLawyer } from "../controllers/lawyerController.js";

const router = express.Router();

router.use(asyncHandler(authorizeRequest), checkRole(ROLES.ADMIN));

router.get("/", asyncHandler(getLawyers));
router.get("/:id", asyncHandler(getLawyerById));
router.post("/", asyncHandler(createLawyer));
router.put("/:id", asyncHandler(updateLawyer));
router.delete("/:id", asyncHandler(deactivateLawyer));

export default router;
