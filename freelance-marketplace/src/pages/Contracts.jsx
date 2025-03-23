import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContracts } from "../redux/slices/contractSlice";

const Contracts = () => {
  const dispatch = useDispatch();
  const { contracts, loading } = useSelector((state) => state.contracts);

  useEffect(() => {
    dispatch(fetchContracts());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Contracts</h2>
      {loading ? <p>Loading...</p> : contracts.map((contract) => (
        <div key={contract._id} className="border p-4 mb-4 shadow">
          <h3 className="text-xl font-semibold">Contract #{contract._id}</h3>
          <p>Freelancer: {contract.freelancer.name}</p>
          <p>Client: {contract.client.name}</p>
          <p>Status: {contract.status}</p>
          <p>Total Amount: ${contract.totalAmount}</p>
        </div>
      ))}
    </div>
  );
};

export default Contracts;
