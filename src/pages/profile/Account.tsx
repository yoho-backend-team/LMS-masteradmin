import React from 'react';
import { Link } from 'react-router-dom';
import elonmusk from '/src/assets/subscription/elonmusk.jpg';

const AccountTab: React.FC = () => {
  return (
    <div className="space-y-6">
   
      <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md space-y-6">
      
        <div className="flex items-center gap-4">
          <img
            src={elonmusk}
            alt="User"
            className="rounded-[10px] w-14 h-14 object-cover"
          />
          <h2 className="text-2xl font-semibold">Chandran R</h2>
        </div>

       
        <div>
          <h3 className="text-2xl font-semibold mb-4">Details</h3>
          <div className="grid grid-cols-3 gap-y-4">
            <div>
              <p className="text-xl">First Name</p>
              <p className="text-2xl font-semibold">Chandran R</p>
            </div>
            <div>
              <p className="text-xl">Last Name</p>
              <p className="text-2xl font-semibold">Doe</p>
            </div>
            <div>
              <p className="text-xl">User Name</p>
              <p className="text-2xl font-semibold">User 01</p>
            </div>
            <div>
              <p className="text-xl">Designation</p>
              <p className="text-2xl font-semibold">Student</p>
            </div>
            <div>
              <p className="text-xl">Email</p>
              <p className="text-2xl font-semibold">Chandran1@gmail.com</p>
            </div>
            <div>
              <p className="text-xl">Contact</p>
              <p className="text-2xl font-semibold">+91 98765656789</p>
            </div>
            <div>
              <p className="text-black text-xl">Status</p>
              <p className="text-green-600 text-2xl font-semibold">Active</p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-end">
          <Link
            to="/edit-detail"
            className="px-4 py-2 bg-[#68B39F] text-white text-lg rounded-tl-md rounded-br-md hover:bg-[#68B39F]/80 transition"
          >
            Edit Details
          </Link>
        </div>
      </div>

   
      <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md min-h-[180px]">
        <h3 className="text-2xl font-semibold mb-2">User Activity Timeline</h3>

        <p className="text-lg mt-5">No activity yet.</p>
      </div>
    </div>
  );
};

export default AccountTab;
