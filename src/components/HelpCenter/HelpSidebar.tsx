import React from "react";
import Profileimage from "../../assets/HelpCenter/HelpProfile.png";
import { FONTS } from "../../constants/ui constants";

interface HelpSidebarProps {
  onSelect: () => void;
}

const users = [
  {
    name: "Chandran",
    time: "4 Months Ago",
    message: "Testing Purpose",
    image: Profileimage,
    status: "Opened",
    priority: "Low",
  },
  {
    name: "Chandran",
    time: "2 Weeks Ago",
    message: "Test the ticket management system",
    image: Profileimage,
    status: "Opened",
    priority: "High",
  },
  {
    name: "Chandran",
    time: "Yesterday",
    message: "Testing Purpose",
    image: Profileimage,
    status: "Opened",
    priority: "Medium",
  },
  {
    name: "Chandran",
    time: "1 Day Ago",
    message: "Testing Purpose",
    image: Profileimage,
    status: "Opened",
    priority: "High",
  },
  {
    name: "Chandran",
    time: "5 Days Ago",
    message: "Testing Purpose",
    image: Profileimage,
    status: "Opened",
    priority: "Low",
  },
];

const HelpSidebar: React.FC<HelpSidebarProps> = ({ onSelect }) => {
  return (
    <aside
      className="w-full h-full flex flex-col shadow-xl">
 
      <div className="p-4 shrink-0">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded outline-none"
          style={FONTS.description}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {users.map((user, i) => (
          <div
            key={i}
            className="p-4 rounded shadow border cursor-pointer hover:shadow-md transition"
            style={{ backgroundColor: "#fff" }}
            onClick={onSelect}
          >
           
            <div className="flex items-center gap-3 mb-2">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full object-cover"
                alt={user.name}
              />
              <div>
               <p style={{ ...FONTS.bold_heading, fontSize: "18px" }}>{user.name}</p>
                <p
                  style={{
                    ...FONTS.description,
                    fontSize: "14px",
                    color: "#999999",
                  }}
                >
                  {user.time}
                </p>
              </div>
            </div>

           
            <p
              className="mb-2"
              style={{
                ...FONTS.description,
                fontSize: "16px",
                color: "#242731",
              }}
            >
              {user.message}
            </p>

         
            <div className="flex justify-end gap-2 text-xs">
              <span
                className="px-2 py-1 rounded-tl-[10px] rounded-br-[10px]"
                style={{
                  backgroundColor: "#D1FAE5", 
                  color: "#047857",
                  fontSize: "12px",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
              >
                {user.status}
              </span>
              <span
                className="px-2 py-1 rounded-tl-[10px] rounded-br-[10px]"
                style={{
                  backgroundColor: "#E5E7EB", 
                  color: "#6B7280", 
                  fontSize: "12px",
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                }}
              >
                {user.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default HelpSidebar;
