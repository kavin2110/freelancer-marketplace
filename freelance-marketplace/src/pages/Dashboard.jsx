import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({ contracts: 0, payments: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStats(response.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 border shadow-lg">
          <h3 className="text-xl font-semibold">Contracts</h3>
          <p className="text-2xl">{stats.contracts}</p>
        </div>
        <div className="p-4 border shadow-lg">
          <h3 className="text-xl font-semibold">Payments</h3>
          <p className="text-2xl">{stats.payments}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
