import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddSubscription = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    plan: "",
    price: "",
    supportLevel: "",
    description: "",
    duration: "",
    durationType: "",
    image: "",
    features: [
      { label: "Students", value: "", unlimited: false },
      { label: "Admins", value: "", unlimited: false },
      { label: "Teachers", value: "", unlimited: false },
      { label: "Batches", value: "", unlimited: false },
      { label: "Courses", value: "", unlimited: false },
      { label: "Classes", value: "", unlimited: false },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, field, value) => {
    const updated = [...formData.features];
    updated[index][field] = value;
    setFormData({ ...formData, features: updated });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCancel = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      id: Date.now(),
      name: formData.plan,
      description: formData.description,
      price: Number(formData.price),
      period: formData.durationType,
      image: formData.image || "https://via.placeholder.com/150",
      features: formData.features.map((f) => ({
        label: f.label,
        value: f.unlimited ? "Unlimited" : f.value,
      })),
    };
    navigate("/subscriptions", { state: { newPlan } });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 border rounded-lg shadow-lg w-full space-y-6">
        <div className="w-full max-w-5xl flex justify-start">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-tl-xl rounded-br-xl border border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white transition"
        >
          ← Back
        </button>
      </div>
      <h2 className="text-xl font-semibold">Subscription Plan</h2>

      <div className="flex items-center gap-4">
        <img
          src={formData.image || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <label className="block text-[#68B39F] font-semibold cursor-pointer">
            Upload Profile Picture
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
          <p className="text-xs text-gray-500">PNG or JPEG (Max 800KB)</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <input name="plan" placeholder="Plan" value={formData.plan} onChange={handleChange} className="border p-2 rounded" />
        <input name="price" placeholder="Plan Price" value={formData.price} onChange={handleChange} className="border p-2 rounded" />
        <select name="supportLevel" value={formData.supportLevel} onChange={handleChange} className="border p-2 rounded">
          <option value="">Select Support Level</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>

      <textarea
        name="description"
        placeholder="Plan Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <div className="grid grid-cols-2 gap-4">
        <input name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} className="border p-2 rounded" />
        <input name="durationType" placeholder="Duration Type" value={formData.durationType} onChange={handleChange} className="border p-2 rounded" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {formData.features.map((f, idx) => (
          <div key={idx}>
            <input
              placeholder={`Number of ${f.label}`}
              value={f.value}
              onChange={(e) => handleFeatureChange(idx, "value", e.target.value)}
              className="border p-2 rounded w-full"
            />
            <label className="text-sm flex items-center gap-2 mt-1">
              <input
                type="checkbox"
                checked={f.unlimited}
                onChange={(e) => handleFeatureChange(idx, "unlimited", e.target.checked)}
              />
              Check for Unlimited {f.label}
            </label>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button type="button" onClick={handleCancel} className="px-4 py-2 rounded-tl-xl rounded-br-xl border border-[#68B39F] text-green-500">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddSubscription;
