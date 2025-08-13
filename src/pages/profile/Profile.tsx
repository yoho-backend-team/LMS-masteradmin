import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import Account from './Account';
import Security from './Security';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'account' | 'security'>('account');

  return (
    <div className="flex gap-4">
     
      <div className="w-60 rounded-lg bg-white/20 backdrop-blur-md p-2 shadow-lg flex flex-col gap-2">
        <button
          onClick={() => setActiveTab('account')}
          className={`flex items-center gap-2 p-2 rounded-tl-md rounded-br-md border  border-[#68B39F] ${
            activeTab === 'account' ? 'bg-[#68B39F] text-white' : 'hover:bg-blue-100'
          }`}
        >
          <span className=""><FaUser /></span> Account
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 p-2 rounded-tl-md rounded-br-md border  border-[#68B39F] ${
            activeTab === 'security' ? 'bg-[#68B39F] text-white' : 'hover:bg-blue-100'
          }`}
        >
          <span className=""><MdOutlineSecurity /></span> Security
        </button>
      </div>

      <div className="flex-1 rounded-lg ">
        {activeTab === 'account' ? <Account /> : <Security />}
      </div>
    </div>
  );
};

export default Profile;

export default Profile;
