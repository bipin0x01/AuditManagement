import express from "express";
import {
  auditorDelete,
  authUser,
  createAuditor,
  getAuditorDetails,
  getAuditors,
  updateAuditor,
} from "../controller/userController.js";
import {
  isAdmin,
  isMasterAdmin,
  protect,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authUser);
router
  .route("/")
  .post(protect, isAdmin, isMasterAdmin, createAuditor)
  .get(protect, isAdmin, isMasterAdmin, getAuditors);
router
  .route("/:id")
  .put(protect, isAdmin, isMasterAdmin, updateAuditor)
  .get(protect, isAdmin, isMasterAdmin, getAuditorDetails)
  .delete(protect, isAdmin, isMasterAdmin, auditorDelete);

export default router;
