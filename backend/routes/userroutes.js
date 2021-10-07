import express from "express";
import { authUser, getClientDetails } from "../controller/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);

router.route("/clientdetails").get(protect, isAdmin, getClientDetails);

export default router;
