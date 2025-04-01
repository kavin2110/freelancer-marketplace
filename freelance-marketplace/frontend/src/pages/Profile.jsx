import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUserProfile } from "../api/userApi";
import { updateProfile } from "../redux/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "client",
    skills: "",
    portfolio: "",
    businessDetails: "",
  });

  useEffect(() => {
    if (token) {
      getUserProfile(token).then((data) => setProfile(data));
    }
  }, [token]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = await updateUserProfile(token, profile);
    dispatch(updateProfile(updatedProfile));
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <label className="block mb-2">Email (Read-Only)</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          disabled
          className="border p-2 w-full mb-4 bg-gray-100"
        />

        <label className="block mb-2">Role</label>
        <select
          name="role"
          value={profile.role}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        >
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>

        {profile.role === "freelancer" && (
          <>
            <label className="block mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />

            <label className="block mb-2">Portfolio URL</label>
            <input
              type="text"
              name="portfolio"
              value={profile.portfolio}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </>
        )}

        {profile.role === "client" && (
          <>
            <label className="block mb-2">Business Details</label>
            <textarea
              name="businessDetails"
              value={profile.businessDetails}
              onChange={handleChange}
              className="border p-2 w-full mb-4"
            />
          </>
        )}

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
