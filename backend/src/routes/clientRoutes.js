import express from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { authorizeRequest } from "../utils/jwt.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import { ROLES } from "../config/roles.js";
import {getClients,getClientById,createClient,updateClient,deactivateClient,} from "../controllers/clientController.js";

const router = express.Router();

router.use(asyncHandler(authorizeRequest), checkRole(ROLES.ADMIN));

router.get("/", asyncHandler(getClients));
router.get("/:id", asyncHandler(getClientById));
router.post("/", asyncHandler(createClient));
router.put("/:id", asyncHandler(updateClient));
router.delete("/:id", asyncHandler(deactivateClient));

export default router;
