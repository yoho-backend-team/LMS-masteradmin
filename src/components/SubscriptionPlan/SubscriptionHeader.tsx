import React from "react";
import { Plus } from "lucide-react";

interface HeaderProps {
  onAddClick: () => void;
}

const SubscriptionHeader: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">Subscription Plan</h1>
      <button
        onClick={onAddClick}
        className="text-white px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] flex items-center gap-2"
      >
        <Plus size={18} /> Add Institute
      </button>
    </div>
  );
};

export default SubscriptionHeader;
