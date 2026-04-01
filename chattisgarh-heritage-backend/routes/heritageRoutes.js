import express from "express";
import { 
  addHeritagePlace, 
  getHeritagePlaces, 
  getHeritageById
} from "../controllers/heritageController.js";

const router = express.Router();

router.post("/", addHeritagePlace);

// get single heritage item
router.get("/item/:id", getHeritageById);

// get heritage by category
router.get("/:category", getHeritagePlaces);

export default router;