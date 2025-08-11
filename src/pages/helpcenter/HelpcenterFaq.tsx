
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import prfimg from '../../assets/profileimg.png';
import backimg1 from '../../assets/image1.png';
import backimg2 from '../../assets/image2.png';
import addimg from '../../assets/Add.png';
import callimg from '../../assets/callicon.png';
import smsimg from '../../assets/smsicon.png';
import clsimg from '../../assets/clsimg.png';

const HelpcenterFaq: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-[300px] w-auto bg-white p-2 font-Montserrat text-[#999999] flex flex-col">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-7">
        {/* Left Section */}
        <div className="w-auto max-w-2xl">
          {/* Row 1: Two Columns */}
          <div className="flex items-center space-x-3">
            <img
              src={prfimg}
              alt="User Avatar"
              className="w-[70px] h-[70px] rounded-full"
            />
            <h1 className="text-xl font-semibold text-gray-700">
              Hello, How can we help?
            </h1>
          </div>

          {/* Row 2: Full-width input below both columns */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none font-Poppins" />
          </div>

          {/* Row 3: Full-width text */}
          <div className="mt-2">
            <p className="text-sm text-left text-gray-400 font-Montserrat">
              Common troubleshooting topics: eCommerce, Blogging to payment
            </p>
          </div>
        </div>

        {/* Right Section: Support Images */}
        <div className="flex space-x-5">
          <img
            src={backimg1}
            alt="Support 1"
            className="rounded-lg w-[160px] h-[160px] object-cover"
          />
          <img
            src={backimg2}
            alt="Support 2"
            className="rounded-lg w-[160px] h-[160px] object-cover"
          />
        </div>
      </div>



      {/* Button */}

      <div className="flex justify-end mb-4">
        <button onClick={() => {
          setShowModal(true);

        }} className="bg-teal-500 text-white px-3 py-1 rounded-tl-xl rounded-br-xl hover:bg-teal-600">
          <span className="flex items-center font-Montserrat">
            <img src={addimg} alt="plus icon" className="mr-2" />
            Add New
          </span>

        </button>
      </div>



      {/* Add New ---> Start */}
      {
        showModal && (

          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
              {/* Close Button */}
              <button
                // onClick={onClose}
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black" >
                <img src={clsimg} />
              </button>

              <h2 className="text-teal-700 font-semibold text-lg mb-6">
                Add Help Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Modules
                  </label>
                  <input
                    type="text"
                    // value={modules}
                    // onChange={(e) => setModules(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex justify-between">
                <button
                  // onClick={onClose}
                  onClick={() => setShowModal(false)}
                  className="border border-teal-500 text-teal-500 px-4 py-2  rounded-tl-2xl rounded-br-2xl hover:bg-teal-50"
                >
                  Cancel
                </button>
                <button
                  // onClick={handleSubmit}
                  className="bg-teal-500 text-white px-6 py-2 rounded-tl-2xl rounded-br-2xl hover:bg-teal-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      {/* Add New ---> End */}

      {/* Questions Section */}
      <div className="text-center">
        <button className="bg-teal-700 text-white px-3 py-1 rounded-tl-xl rounded-br-xl mb-4 font-Montserrat">
          Questions
        </button>
        <h2 className="text-md font-semibold text-gray-700 mb-1">You still have a questions?</h2>
        <p className="text-gray-500 mb-4 mx-auto">
          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center text-center space-y-2 mb-1">

            <div className="p-3">
              <img
                src={callimg} className='h-[30px]' />
            </div>
            <div>
              <p className="font-semibold text-[#999999]">+ (810) 2548 2568</p>
              <p className="text-sm text-gray-500 mb-1 ">We are always happy to help!</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4 space-y-2 mb-1">
            <div className="text-green-700 p-2">

              <img
                src={smsimg} className='h-[30px]' />
            </div>
            <div>
              <p className="font-semibold text-[#999999]">hello@help.com</p>
              <p className="text-sm text-gray-500 mb-1 ">Best way to get answer faster!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpcenterFaq;





