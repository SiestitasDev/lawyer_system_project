import express from "express"
import { asyncHandler } from "../utils/asyncHandler.js";
import { authorizeRequest } from "../utils/jwt.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import { ROLES } from "../config/roles.js";

const router = express.Router();

router.use(asyncHandler(authorizeRequest), checkRole(ROLES.ADMIN));

// router.get("/", asyncHandler(getTypeCases));
// router.get("/:id", asyncHandler(getTypeCaseById));
// router.post("/", asyncHandler(createTypeCase));
// router.put("/:id", asyncHandler(updateTypeCase));
// router.delete("/:id", asyncHandler(deleteTypeCase));}

export default router;