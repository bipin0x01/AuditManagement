import express from "express";
import {
  clientDelete,
  createClient,
  fetchClients,
  getClientDetails,
  updateClient,
} from "../controller/auditFileController.js";
import { authUser } from "../controller/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, isAdmin, createClient)
  .get(protect, isAdmin, fetchClients);
router
  .route("/:id")
  .put(protect, isAdmin, updateClient)
  .get(protect, isAdmin, getClientDetails);
router.route("/:id").delete(protect, isAdmin, clientDelete);
// router.route("/image/:id").delete(protect,isAdmin,imageDelete)
export default router;
