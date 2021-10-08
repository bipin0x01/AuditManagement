import express from "express";
import { authUser, getAuditors } from "../controller/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/").get(protect,isAdmin,getAuditors)

export default router;
