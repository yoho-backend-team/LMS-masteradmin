import React, { useState } from 'react';
import { COLORS, FONTS } from '../../constants/ui constants';
import AddHelpModal from '../../components/HelpCenter/AddHelpModal';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import HelpProfile from '../../assets/HelpCenter/HelpProfile.png';
import HelpImage1 from '../../assets/HelpCenter/HelpImage1.png';
import HelpImage2 from '../../assets/HelpCenter/HelpImage2.png';

const HelpcenterFaq: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    
      
     <div className="p-4">
 
  <div className="flex justify-between items-start gap-6">
       
        <div className="flex-1">
          
          <div className="flex items-center mb-4">
            <img
              src={HelpProfile}
              alt="User"
              className="w-14 h-14 rounded-full object-cover"
            />
            <h1
              style={FONTS.description}
              className="ml-4 text-[#4A4A4A]"
            >
              Hello, How can we help?
            </h1>
          </div>

          
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 w-full max-w-[400px] border border-gray-300 rounded-md focus:outline-none"
          />
          <p className="text-xs text-gray-500 mt-1" style={FONTS.description}>
            Common troubleshooting topics: eCommerce, Blogging to payment
          </p>
        </div>

      
       <div className="flex flex-col items-end gap-4">
  <div className="flex gap-4">
    <img
      src={HelpImage1}
      alt="Help 1"
      className="w-[160px] h-[140px] rounded-md object-cover"
    />
    <img
      src={HelpImage2}
      alt="Help 2"
      className="w-[160px] h-[140px] rounded-md object-cover"
    />
  </div>
  <button
    onClick={() => setShowModal(true)}
    className="flex items-center gap-1 px-4 py-2 text-sm text-white rounded-tl-[10px] rounded-br-[10px]"
    style={{ backgroundColor: COLORS.button }}
  >
    <span className="text-xl leading-3">+</span> Add New
  </button>
</div>
      </div>
      <div className="text-center py-10 rounded-md bg-white shadow-sm">
        <div className="inline-block mb-2 px-4 py-1 rounded-tl-[10px] rounded-br-[10px] bg-[#68B39F] text-white font-semibold">
          Questions
        </div>
        <h2
          style={{
            fontFamily: FONTS.card.fontFamily,
            fontWeight: FONTS.card.fontWeight,
            fontSize: FONTS.card.fontSize,
            color: FONTS.card.color,
          }}
        >
          You still have a question?
        </h2>
        <p
          style={{
            color: FONTS.card.text,
            fontSize: FONTS.card.fontsize,
            fontWeight: FONTS.card.fontweight,
          }}
          className="mb-6"
        >
          If you cannot find a question in our FAQ, you can always contact us.
          We will answer you shortly!
        </p>

        
        <div className="flex justify-between gap-16 flex-wrap">
          <div className="flex flex-col items-center text-sm text-gray-700">
            <div className="bg-[#68B39F] p-2 rounded-full mb-2 text-white">
              <IoCallOutline className="w-10 h-10" />
            </div>
            <p className="font-semibold">+ (810) 2548 2568</p>
            <p className="text-xs text-gray-500">We are always happy to help!</p>
          </div>

          <div className="flex flex-col items-center text-sm text-gray-700">
            <div className="bg-[#68B39F] p-2 rounded-full mb-2 text-white">
              <IoMailOutline className="w-10 h-10" />
            </div>
            <p className="font-semibold">hello@help.com</p>
            <p className="text-xs text-gray-500">Best way to get answers faster!</p>
          </div>
        </div>
      </div>

      
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 " />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <AddHelpModal onClose={() => setShowModal(false)} />
          </div>
        </>
      )}
    </div>
  );
};

export default HelpcenterFaq;
