import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../redux/slices/serviceSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Freelancer Services</h2>
      {loading ? <p>Loading...</p> : services.map((service) => (
        <div key={service._id} className="border p-4 mb-4 shadow">
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p>{service.description}</p>
          <p className="text-gray-500">Price: ${service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
