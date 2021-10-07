import express from "express";
import { authUser } from "../controller/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);


export default router;
