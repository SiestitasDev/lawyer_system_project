import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getTypeCases,getTypeCaseById,createTypeCase,updateTypeCase,deleteTypeCase } from "../controllers/typeCaseController.js";
import { authorizeRequest } from "../utils/jwt.js";
import checkRole from "../middlewares/roleMiddleware.js";
import Roles from '../config/roles.json';

const router = express.Router();

router.use(asyncHandler(authorizeRequest), checkRole(Roles.ADMIN));

router.get("/", asyncHandler(getTypeCases));
router.get("/:id", asyncHandler(getTypeCaseById));
router.post("/", asyncHandler(createTypeCase));
router.put("/:id", asyncHandler(updateTypeCase));
router.delete("/:id", asyncHandler(deleteTypeCase));

export default router;
