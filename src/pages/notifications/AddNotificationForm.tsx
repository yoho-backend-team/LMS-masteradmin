import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Props {
  onClose: () => void;
  onAdd: (notification: any) => void;
}

const AddNotificationForm: React.FC<Props> = ({ onClose, onAdd }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    institute: '',
    branch: '',
    title: '',
    body: '',
    link: '',
    password: '',
  });

  const [newNotification, setNewNotification] = useState<any>(null);

  useEffect(() => {
    if (newNotification) {
      const timer = setTimeout(() => {
        onAdd({
          ...newNotification,
          status: 'Sent',
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [newNotification, onAdd]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const notification = {
      title: formData.title,
      body: formData.body,
      institute: formData.institute,
      status: 'Pending',
    };

    onAdd(notification);

    setNewNotification(notification);

    toast.success('Notification submitted successfully!');
    onClose();
  };

  return (
    <div className="w-[350px] bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Notification</h2>
        <button
          onClick={onClose}
          className="text-black text-xl font-bold"
        >
          &times;
        </button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-sm font-medium">Institute List</label>
          <select
            name="institute"
            onChange={handleChange}
            className="w-full border border-black rounded px-3 py-2"
          >
            <option value="">Select Institute</option>
            <option value="Bharathidasan Uni">Bharathidasan Uni</option>
            <option value="Anna university">Anna university</option>
            <option value="SRM University">SRM University</option>
            <option value="VIT University">VIT University</option>
            <option value="IIT Madras">IIT Madras</option>
            <option value="KKIT">KKIT</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Branch List</label>
          <select
            name="branch"
            onChange={handleChange}
            className="w-full border border-black rounded px-3 py-2"
          >
            <option value="">Select Branch</option>
            <option value="CSE">Computer Science</option>
            <option value="EEE">Electrical</option>
            <option value="MECH">Mechanical</option>
            <option value="CIVIL">Civil</option>
            <option value="BIO">Biotechnology</option>
            <option value="IT">Information Technology</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Title</label>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            className="w-full border border-black rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Body</label>
          <textarea
            name="body"
            onChange={handleChange}
            className="w-full border border-black rounded px-3 py-2"
            rows={3}
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Link</label>
          <input
            name="link"
            onChange={handleChange}
            type="text"
            className="w-full border border-black rounded px-3 py-2"
          />
        </div>

        <div className="relative">
          <label className="block mb-1 text-sm font-medium">Confirm Password</label>
          <input
            name="password"
            onChange={handleChange}
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
