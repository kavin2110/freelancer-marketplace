import Contract from "../models/Contract.js";
import Payment from "../models/Payment.js";

export const getDashboardStats = async (req, res) => {
  try {
    const contracts = await Contract.countDocuments({ freelancer: req.user._id });
    const payments = await Payment.countDocuments({ freelancer: req.user._id });

    res.json({ contracts, payments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
