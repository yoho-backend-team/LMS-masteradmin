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
          <h2 className="text-2xl font-semibold text-[#0E2B56]">Chandran R</h2>
        </div>

       
        <div>
          <h3 className="text-2xl font-semibold text-[#0E2B56] mb-4">Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm text-[#0E2B56]">
            <div>
              <p className="text-black text-2xl font-semibold">First Name</p>
              <p className=" text-2xl">Chandran R</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold">Last Name</p>
              <p className="text-2xl">Doe</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold ">User Name</p>
              <p className=" text-2xl">User 01</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold">Designation</p>
              <p className="text-2xl">Student</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold">Email</p>
              <p className=" text-2xl">Chandran1@gmail.com</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold">Contact</p>
              <p className="text-2xl">+91 98765656789</p>
            </div>
            <div>
              <p className="text-black text-2xl font-semibold">Status</p>
              <p className=" text-green-600 text-2xl">Active</p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-end">
          <Link
            to="/edit-detail"
            className="px-4 py-2 bg-blue-900 text-white text-lg rounded-md hover:bg-blue-700 transition"
          >
            Edit Details
          </Link>
        </div>
      </div>

   
      <div className="rounded-xl bg-white/20 backdrop-blur-md p-6 shadow-md min-h-[180px]">
        <h3 className="text-2xl font-semibold text-[#0E2B56] mb-2">User Activity Timeline</h3>
       
        <p className="text-lg text-[#0E2B56]">No activity yet.</p>
      </div>
    </div>
  );
};

export default AccountTab;
