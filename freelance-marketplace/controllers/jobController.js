import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const { title, description, category, budget, deadline } = req.body;
    const job = new Job({
      title,
      description,
      category,
      budget,
      client: req.user._id,
      deadline,
    });

    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("client", "name");
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("client", "name");
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
