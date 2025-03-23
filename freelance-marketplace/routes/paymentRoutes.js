import express from "express";
import Razorpay from "razorpay";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/create-order", protect, async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const options = { amount: amount * 100, currency, payment_capture: 1 };
    const order = await razorpay.orders.create(options);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
