import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SecurityTab: React.FC = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md space-y-6 ">
      
      <h2 className="text-xl font-semibold text-[#0E2B56]">Change Password</h2>

      
      <div className="bg-white/40 p-4 rounded-md shadow">
        <p className="text-lg font-semibold text-gray-700">
          Ensure That These Requirements Are Met
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Minimum 8 Characters Long, Uppercase & Symbol
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type={showNew ? 'text' : 'password'}
            placeholder="New Password"
            className="w-full p-3 pr-10 text-lg rounded-md bg-white/40 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Confirm New Password"
            className="w-full p-3 pr-10 text-lg rounded-md bg-white/40 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
