import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createContract,
  getContracts,
  updateContractStatus,
} from "../controllers/contractController.js";

const router = express.Router();

router.post("/", protect, createContract);
router.get("/", protect, getContracts);
router.put("/:id", protect, updateContractStatus);

export default router;
