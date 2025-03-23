import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../redux/slices/notificationSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, loading } = useSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {loading ? <p>Loading...</p> : notifications.length === 0 ? <p>No notifications</p> : (
        notifications.map((notification) => (
          <div key={notification._id} className={`p-3 border mb-2 ${notification.read ? "bg-gray-100" : "bg-yellow-100"}`}>
            {notification.message}
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;
