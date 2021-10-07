import express from "express";
import { createAuditFile, updateClient } from "../controller/auditFileController.js";
import { authUser, getClientDetails } from "../controller/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, isAdmin, createAuditFile);
router.route("/:id").put(protect, isAdmin, updateClient);

router.route("/clientdetails").get(protect, isAdmin, getClientDetails);

export default router;
