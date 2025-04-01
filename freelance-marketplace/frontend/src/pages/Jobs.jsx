import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slices/jobSlice";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Available Jobs</h2>
      {loading ? <p>Loading...</p> : jobs.map((job) => (
        <div key={job._id} className="border p-4 mb-4 shadow">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p>{job.description}</p>
          <p className="text-gray-500">Budget: ${job.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
