import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createService,
  getAllServices,
  getServiceById,
} from "../controllers/serviceController.js";

const router = express.Router();

router.post("/", protect, createService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);

export default router;
