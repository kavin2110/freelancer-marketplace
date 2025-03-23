import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    samples: [{ type: String }],
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
