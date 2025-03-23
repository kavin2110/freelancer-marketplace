import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">FreelanceHub</Link>
      
      <div className="space-x-4">
        <Link to="/jobs">Jobs</Link>
        <Link to="/services">Services</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="mr-4">Dashboard</Link>
            <Link to="/notifications" className="mr-4">Notifications</Link>
            
            <button onClick={() => dispatch(logout())} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
