import React, { useState } from "react";
import { MoreVertical, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface Feature {
  label: string;
  value: string | number;
}

export interface SubscriptionPlanProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: Feature[];
  active: boolean;
  onDelete?: () => void;
}

const SubscriptionCard: React.FC<SubscriptionPlanProps> = ({
  title,
  description,
  price,
  duration,
  image,
  features,
  active: initialActive,
  onDelete,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [active, setActive] = useState(initialActive); // 🔹 Local state for toggle
  const navigate = useNavigate();

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden border-gray-200 flex flex-col relative">
      <div className="p-3">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded-md"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>

        <div className="mt-2 text-[#1D3A4E] font-bold text-xl flex justify-center items-center">
          ₹{price}
          <span className="text-gray-500 font-normal text-base">
            /{duration}
          </span>
        </div>

        <div className="mt-4 border p-3 rounded-md">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">FEATURES</h4>
          <ul className="space-y-1">
            {features.map((f, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-gray-600"
              >
                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-[#68B39F] text-white mr-2">
                  <Check size={12} strokeWidth={3} />
                </span>
                {f.label}: {f.value}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-4 relative">
          <button
            onClick={toggleActive}
            className={`px-4 py-2 rounded-tl-xl rounded-br-xl text-sm font-medium transition-colors ${
              active
                ? "bg-[#68B39F] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {active ? "Active" : "Inactive"}
          </button>

          <div className="relative">
            <MoreVertical
              className="cursor-pointer bg-[#68B39F] text-white px-2 py-2 rounded-tl-xl rounded-br-xl"
              onClick={() => setShowActions((prev) => !prev)}
            />

            {showActions && (
              <div className="absolute bottom-full mb-2 right-0 bg-white border rounded-md shadow-md flex flex-col text-sm z-10">
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => navigate("/subscription-view")}
                >
                  View
                </button>
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => navigate("/subscription-Edit")}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-left text-red-500"
                  onClick={onDelete}
                >
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
