import React from 'react';
import { COLORS, FONTS } from '../../constants/ui constants';
import toast from 'react-hot-toast';

interface Props {
  onClose: () => void;
}

const AddHelpModal: React.FC<Props> = ({ onClose }) => {
  const handleSubmit = () => {
    toast.success('Help information added successfully!');
    onClose();
  };

  return (
    <div className="fixed flex items-center justify-center z-50">
    
      <div className="absolute opacity-10" onClick={onClose}></div>

      <div className="relative bg-white p-6 rounded-lg w-full max-w-md z-10 shadow-lg">
        <h2
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '22px',
            color: FONTS.models.header,
          }}
          className="mb-4"
        >
          Add Help Information
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Module"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none"
            rows={3}
          ></textarea>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded-tl-[10px] rounded-br-[10px]"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: COLORS.button,
              fontFamily: 'Montserrat',
              fontWeight: 600,
            }}
            className="px-4 py-2 text-white rounded-tl-[10px] rounded-br-[10px]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddHelpModal;
