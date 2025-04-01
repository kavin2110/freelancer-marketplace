import Service from "../models/Service.js";

export const createService = async (req, res) => {
  try {
    const { title, description, category, price, samples } = req.body;
    const service = new Service({
      title,
      description,
      category,
      price,
      freelancer: req.user._id,
      samples,
    });

    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate("freelancer", "name");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("freelancer", "name");
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
