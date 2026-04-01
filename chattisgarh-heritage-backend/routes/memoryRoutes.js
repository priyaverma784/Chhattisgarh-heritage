import express from "express";
import multer from "multer";
import { addMemory } from "../controllers/memoryController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), addMemory);

export default router;