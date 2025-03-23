import mongoose from "mongoose";

const contractSchema = new mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    status: {
      type: String,
      enum: ["pending", "active", "completed", "cancelled"],
      default: "pending",
    },
    milestones: [
      {
        description: String,
        amount: Number,
        dueDate: Date,
        paid: { type: Boolean, default: false },
      },
    ],
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

const Contract = mongoose.model("Contract", contractSchema);
export default Contract;
