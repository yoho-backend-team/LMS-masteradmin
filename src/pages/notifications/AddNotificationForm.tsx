import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Props {
  onClose: () => void;
}

const AddNotificationForm: React.FC<Props> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success('Notification submitted successfully!');

    onClose();
  };

  return (
    <div className="w-[350px] bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Notification</h2>
        <button onClick={onClose} className="text-black text-xl font-bold">
          &times;
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium">Institute List</label>
          <select className="w-full border border-black rounded px-3 py-2">
            <option value="">Select Institute</option>
            <option value="institute1">Institute 1</option>
            <option value="institute2">Institute 2</option>
            <option value="institute3">Institute 3</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Branch List</label>
          <select className="w-full border border-black rounded px-3 py-2">
            <option value="">Select Branch</option>
            <option value="cse">Computer Science</option>
            <option value="eee">Electrical</option>
            <option value="mech">Mechanical</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Title</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Body</label>
          <textarea className="w-full border border-black rounded px-3 py-2" rows={3}></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Link</label>
          <input type="text" className="w-full border border-black rounded px-3 py-2" />
        </div>

        <div className="relative">
          <label className="block mb-1 text-sm font-medium">Confirm Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full border border-black rounded px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] text-sm text-gray-600"
          >
            {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-[#68B39F] text-[#68B39F] rounded-tl-md rounded-br-md hover:bg-green-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#68B39F] text-white rounded-tl-md rounded-br-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNotificationForm;
