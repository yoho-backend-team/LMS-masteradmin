// components/SubscriptionPlan/SubscriptionCard.tsx
import React, { useState, useRef, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Feature {
  label: string;
  value: number | string;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  image: string;
  features: Feature[];
  status?: "Active" | "Inactive";
}

interface Props {
  plan: SubscriptionPlan;
  onToggleStatus: () => void;
}

const SubscriptionCard: React.FC<Props> = ({ plan, onToggleStatus }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-80 border relative">
      <div className="m-4 border rounded-xl">
        <img src={plan.image} alt={plan.name} className="h-40 w-full object-cover" />
      </div>
      <div className="p-4 pb-2 pt-1">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        <p className="text-gray-500 text-sm">{plan.description}</p>
        <p className="text-green-600 font-bold text-xl text-center py-3">
          ₹{plan.price} <span className="text-gray-500 text-sm">/{plan.period}</span>
        </p>

        <div className="mt-3 border p-3 bg-white/20 backdrop-blur-md rounded-lg shadow-md">
          <h4 className="text-gray-700 font-semibold mb-2">Features</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {plan.features.map((f, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 flex items-center p-2 justify-center border border-green-600 rounded-full text-green-600 text-xs font-bold">
                  ✓
                </span>
                {f.label}: {f.value}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={onToggleStatus}
            className={`text-white text-xs rounded-tl-xl px-4 py-2 rounded-br-xl ${
              plan.status === "Active" ? "bg-[#68B39F]" : "bg-red-400"
            }`}
          >
            {plan.status}
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white cursor-pointer rounded-tl-xl px-2 py-2 rounded-br-xl bg-[#68B39F]"
            >
              <MoreVertical />
            </button>

            {menuOpen && (
              <div className="absolute right-full top-1/4 -translate-y-1/2 mr-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-1 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/subscription-view");
                    setMenuOpen(false);
                  }}
                >
                  View
                </button>
                <button
                  className="w-full text-left px-4 py-1 hover:bg-gray-100"
                  onClick={() => {
                    navigate("/subscription-Edit", { state: { plan } });
                    setMenuOpen(false);
                  }}
                >
                  Edit
                </button>
                <button className="w-full text-left px-4 py-1 hover:bg-gray-100">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
