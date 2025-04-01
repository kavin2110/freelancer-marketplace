import Contract from "../models/Contract.js";

export const createContract = async (req, res) => {
  try {
    const { freelancer, job, service, milestones, totalAmount } = req.body;
    const contract = new Contract({
      client: req.user._id,
      freelancer,
      job,
      service,
      milestones,
      totalAmount,
    });

    await contract.save();
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find({ $or: [{ client: req.user._id }, { freelancer: req.user._id }] })
      .populate("client", "name")
      .populate("freelancer", "name")
      .populate("job", "title")
      .populate("service", "title");
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateContractStatus = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) return res.status(404).json({ message: "Contract not found" });

    contract.status = req.body.status || contract.status;
    await contract.save();

    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
