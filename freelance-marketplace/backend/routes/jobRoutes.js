import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createJob,
  getAllJobs,
  getJobById,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/", protect, createJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);

export default router;
