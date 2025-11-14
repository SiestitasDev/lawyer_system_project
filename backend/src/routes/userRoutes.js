import express from "express"
import { asyncHandler } from "../utils/asyncHandler.js";
import { authorizeRequest } from "../utils/jwt.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import { ROLES } from "../config/roles.js";
import { getAllUsers, getUserById, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.use(asyncHandler(authorizeRequest), checkRole(ROLES.ADMIN));

router.get("/", asyncHandler(getAllUsers));
router.get("/:id", asyncHandler(getUserById));
// router.post("/", asyncHandler(createUser));
router.put("/:id", asyncHandler(updateUser));
// router.delete("/:id", asyncHandler(deleteUser));

export default router;