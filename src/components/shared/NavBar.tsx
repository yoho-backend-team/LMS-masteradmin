import React, { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Profileicon from "../../assets/profileicon.png";
import icon from "../../assets/masteradminicon.png";
import notification from "../../assets/notification.png";

export default function Navbar() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  // ✅ Explicit typing for useRef
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
        setShowNotificationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleViewNotification = () => {
    setShowNotificationDropdown(false);
    navigate('/notifications');
  };

  return (
    <nav className="flex h-16 items-center justify-between px-4 md:px-6 bg-[#E0ECDE] relative">
      {/* Left section: Logo + Search */}
      <div className="flex items-center gap-32">
        <img src={icon} alt="logo" className="h-12 w-18 ml-4" />

        {/* Search */}
        <div className="relative flex-1 mx-4 w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search or type"
            className="w-full pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Right section: Notification and Profile */}
      <div className="flex items-center gap-6 relative">
        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <img
            src={notification}
            alt="notifications"
            className="h-[24px] w-[20px] cursor-pointer"
            onClick={() => {
              setShowNotificationDropdown(!showNotificationDropdown);
              setShowProfileDropdown(false);
            }}
          />
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 w-[300px] bg-white rounded-md shadow-lg z-20 p-4">
              <h3 className="font-semibold text-sm mb-2">All Notifications</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Chendran",
                    message: "It is a long established fact that...",
                    time: "2 minutes ago",
                  },
                  {
                    name: "Store Verification Done",
                    message: "We have successfully received your request.",
                    time: "1 Month Ago",
                  },
                  {
                    name: "Check Your Mail",
                    message: "All done! Now check your inbox...",
                    time: "4 Months Ago",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b pb-2">
                    <div className="text-sm font-medium">{item.name}</div>
                    <p className="text-xs text-gray-600">{item.message}</p>
                    <div className="text-[10px] text-gray-400">{item.time}</div>
                  </div>
                ))}
              </div>
              <p
                onClick={handleViewNotification}
                className="cursor-pointer block mt-4 text-center text-[#68B39F] text-sm font-medium"
              >
                View All
              </p>
            </div>
          )}
        </div>

      {/* profile */}
      <Link
  to="/profile"
  className="h-[48px] w-[48px] rounded-full overflow-hidden cursor-pointer block"
>
  <img src={Profileicon} alt="profile" className="h-full w-full object-cover" />
</Link>

       
      </div>
    </nav>
  );
}
