import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubscriptionForm = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      toast.error("Only PNG or JPEG files are allowed!");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    toast.success("Subscription plan submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-[#0E2B56]">Subscription Plan</h1>
        <a
          href="/add-institute"
          className="bg-[#68B39F] text-white px-4 py-2 rounded-tl-md rounded-br-md text-sm font-medium"
        >
          + Add Institute
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-xl p-6 space-y-6 border border-gray-300"
      >
        <p className="text-[#2186c4] text-sm font-medium">Enter your Address Information Here</p>

        <div className="flex items-center space-x-4">
          <img
            src={imagePreview || "https://i.pravatar.cc/100"}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Upload Profile Picture</p>
            <p className="text-xs text-gray-500">PNG or JPEG (Max 800k)</p>
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="mt-2 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium mb-1">Plan</label>
            <input className="w-full border border-black rounded-md p-2" type="text" />
          </div>
          <div>
            <label className="block font-medium mb-1">Plan Price</label>
            <input className="w-full border border-black rounded-md p-2" type="number" />
          </div>
          <div>
            <label className="block font-medium mb-1">Support Level</label>
            <select className="w-full border border-black rounded-md p-2">
              <option>Basic</option>
              <option>Premium</option>
              <option>Enterprise</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Plan Description</label>
          <textarea className="w-full border border-black rounded-md p-2" rows={3}></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Duration</label>
            <input className="w-full border border-black rounded-md p-2" type="text" />
          </div>
          <div>
            <label className="block font-medium mb-1">Duration Type</label>
            <input className="w-full border border-black rounded-md p-2" type="text" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Number of Students',
            'Number of Admins',
            'Number of Teachers',
            'Number of Batches',
            'Number of Courses',
            'Number of Classes',
          ].map((label) => (
            <div key={label}>
              <label className="block font-medium mb-1">{label}</label>
              <input className="w-full border border-black rounded-md p-2" type="number" />
              <div className="mt-2">
                <label className="text-sm">
                  <input type="checkbox" className="mr-2" /> Check for Unlimited {label.split(' ')[2]}
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            className="px-6 py-2 rounded-tl-md rounded-br-md border border-[#68B39F] text-[#68B39F] font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#68B39F] text-white px-6 py-2 rounded-tl-md rounded-br-md font-medium"
          >
            Submit
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SubscriptionForm;
