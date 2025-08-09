import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const EditDetail: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-2 relative">

      <button className="absolute top-2 right-4 text-gray-700 hover:text-black">
        <FiX size={20} />
      </button>

      <h2 className="text-xl font-semibold text-[#0E2B56]">Edit User Information</h2>
     
      <div className="flex items-center gap-4">
        <img
          src={profileImage}
          alt="User"
          className="w-16 h-16 rounded-[10px] "
        />
        <label className="relative cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <span className="inline-block px-4 py-1 bg-[#68B39F] text-white text-lg rounded-md hover:bg-[#68B39F]/80 transition">
            Upload New Image
          </span>
        </label>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <div>
          <label className="block mb-1 text-[#0E2B56]">First Name</label>
          <input type="text" className="w-full p-2 border border-[#0E2B56] rounded-md focus:outline-none" />
        </div>
        <div>
          <label className="block mb-1 text-[#0E2B56]">Last Name</label>
          <input type="text" className="w-full p-2 border border-[#0E2B56] rounded-md  focus:outline-none" />
        </div>
        <div>
          <label className="block mb-1 text-[#0E2B56]">User Name</label>
          <input type="text" className="w-full p-2 border border-[#0E2B56] rounded-md  focus:outline-none" />
        </div>
        <div>
          <label className="block mb-1 text-[#0E2B56]">Email</label>
          <input type="email" className="w-full p-2 border border-[#0E2B56] rounded-md  focus:outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 text-[#0E2B56]">Phone Number</label>
          <input type="text" className="w-full p-2 border border-[#0E2B56] rounded-md focus:outline-none" />
        </div>
      </div>

      
      <div className="flex justify-between pt-4">
        <Link
  to="/profile"
  className="px-4 py-2 bg-white text-gray-800 rounded-tl-md rounded-br-md border-2 border-[#68B39F] hover:bg-[#68B39F] hover:text-white"
>
  Cancel
</Link>

<Link
  to="/profile"
  className="px-5 py-2 bg-[#68B39F] text-white rounded-tl-md rounded-br-md hover:bg-[#68B39F]/80 transition"
>
  Submit
</Link>
      </div>
    </div>
  );
};

export default EditDetail;
