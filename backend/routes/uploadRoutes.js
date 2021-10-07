import express from "express";
import multer from "multer";
import { isAdmin, protect } from "../middleware/authMiddleware.js";
import path from "path";
const router = express.Router();

const __dirname = path.resolve();
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, `${__dirname}/backend/uploads`);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|pdf|docx|xlsx|csv|txt/;
  const extname = fileTypes.test(path.extname(file.originalname.toLowerCase()));
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images, PDF, Document, PDF, Spreadsheet, and CSV only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});
router.route("/").post(upload.array("clientDocuments", 10), (req, res) => {
    console.log("I am Nishan")
  console.log(req.files);
  res.send(req.files);
});

export default router;
