// SubscriptionCard.tsx
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
    const [active, setActive] = useState(initialActive);
    const navigate = useNavigate();

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActive(e.target.value === "active");
    };

    return (
        <div
            className={`bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col relative transition-colors duration-300 
                ${active ? "border-green-500" : "border-gray-300"} 
                hover:bg-[#68B39F] hover:text-white`}
        >
            <div className="p-3">
                <img
                    src={image}
                    alt={title}
                    className="h-40 w-full object-cover rounded-md"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{description}</p>

                <div className="mt-2 font-bold text-xl flex justify-center items-center">
                    ₹{price}
                    <span className="font-normal text-base">/{duration}</span>
                </div>

                <div className="mt-4 border p-3 rounded-md hover:border-white transition-colors">
                    <h4 className="text-sm font-semibold mb-2">FEATURES</h4>
                    <ul className="space-y-1">
                        {features.map((f, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                                <span className="flex items-center justify-center w-3 h-3 rounded-full bg-white text-[#68B39F] mr-2">
                                    <Check size={12} strokeWidth={3} />
                                </span>
                                {f.label}: {f.value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-between mt-4 relative">
                    <select
                        value={active ? "active" : "inactive"}
                        onChange={handleStatusChange}
                        className={`px-4 py-2 rounded-tl-xl rounded-br-xl text-sm font-medium border focus:outline-none transition-colors ${active
                                ? "bg-green-100 text-green-700 border-green-500"
                                : "bg-gray-100 text-gray-700 border-gray-400"
                            }`}>
                        <option value="active" className="bg-[#68B39F] text-white">
                            Active
                        </option>
                        <option value="inactive" className="bg-white-500 text-black">
                            Inactive
                        </option>
                    </select>

                    <div className="relative">
                        <MoreVertical
                            className="cursor-pointer bg-white text-[#68B39F] px-2 py-2 rounded-tl-xl rounded-br-xl"
                            onClick={() => setShowActions((prev) => !prev)}
                        />

                        {showActions && (
                            <div className="absolute bottom-full mb-2 right-0 bg-white p-3 rounded-xl shadow-lg flex flex-col gap-3 text-sm z-10 w-32 border-2 border-white">
                                <button
                                    className="bg-[#68B39F] text-white font-semibold px-4 py-2 rounded-tl-xl rounded-br-xl hover:opacity-90 transition"
                                    onClick={() => navigate("/subscription-view")}
                                >
                                    View
                                </button>
                                <button
                                    className="text-white bg-[#68B39F] font-semibold px-4 py-2 rounded-tl-xl rounded-br-xl hover:opacity-90 transition"
                                    onClick={() => navigate("/subscription-Edit")}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-white bg-[#68B39F] font-semibold px-4 py-2 rounded-tl-xl rounded-br-xl hover:opacity-90 transition"
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
