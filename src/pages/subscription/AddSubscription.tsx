import React, { useState } from "react";
import { SubscriptionPlanProps } from "../../components/SubscriptionPlan/SubscriptionCard";
import subcard1 from "../../assets/subcard1.png"

interface AddSubscriptionProps {
  onCancel: () => void;
  onSubmit: (plan: SubscriptionPlanProps) => void;
}

const AddSubscription: React.FC<AddSubscriptionProps> = ({ onCancel, onSubmit }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    supportLevel: "",
    description: "",
    duration: "",
    durationType: "",
    students: "",
    unlimitedStudents: false,
    admins: "",
    unlimitedAdmins: false,
    teachers: "",
    unlimitedTeachers: false,
    batches: "",
    unlimitedBatches: false,
    courses: "",
    unlimitedCourses: false,
    classes: "",
    unlimitedClasses: false,
    image: subcard1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    const features = [
      { label: "Students", value: form.unlimitedStudents ? "Unlimited" : form.students },
      { label: "Admins", value: form.unlimitedAdmins ? "Unlimited" : form.admins },
      { label: "Teachers", value: form.unlimitedTeachers ? "Unlimited" : form.teachers },
      { label: "Batches", value: form.unlimitedBatches ? "Unlimited" : form.batches },
      { label: "Courses", value: form.unlimitedCourses ? "Unlimited" : form.courses },
      { label: "Classes", value: form.unlimitedClasses ? "Unlimited" : form.classes },
    ];

    const newPlan: SubscriptionPlanProps = {
      title: form.title,
      description: form.description,
      price: form.price,
      duration: `${form.duration} ${form.durationType}`,
      image: form.image,
      features,
      active: true,
    };

    onSubmit(newPlan);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-teal-700 text-lg font-semibold mb-6">
        Enter your Address Information Here
      </h2>
      <div className="flex items-center mb-6">
        <img
          src={form.image}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <p
            className="font-semibold text-green-800 cursor-pointer"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Upload Profile Picture
          </p>
          <p className="text-sm text-gray-500">PNG or JPEG (Max 800KB)</p>

          <input
            id="fileInput"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const previewUrl = URL.createObjectURL(file);
                setForm((prev) => ({ ...prev, image: previewUrl }));
              }
            }}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">
            Plan
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1">
            Plan Price
          </label>
          <input
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="supportLevel" className="text-sm font-medium text-gray-700 mb-1">
            Support Level
          </label>
          <select
            id="supportLevel"
            name="supportLevel"
            value={form.supportLevel}
            onChange={handleChange}
            className="border rounded p-2"
          >
            <option value="">Select Support Level</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">
          Plan Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <input
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="durationType" className="text-sm font-medium text-gray-700 mb-1">
            Duration Type
          </label>
          <input
            id="durationType"
            name="durationType"
            value={form.durationType}
            onChange={handleChange}
            className="border rounded p-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {[
          { name: "students", unlimited: "unlimitedStudents", label: "Students" },
          { name: "admins", unlimited: "unlimitedAdmins", label: "Admins" },
          { name: "teachers", unlimited: "unlimitedTeachers", label: "Teachers" },
          { name: "batches", unlimited: "unlimitedBatches", label: "Batches" },
          { name: "courses", unlimited: "unlimitedCourses", label: "Courses" },
          { name: "classes", unlimited: "unlimitedClasses", label: "Classes" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col">
            <label
              htmlFor={item.name}
              className="text-sm font-medium text-gray-700 mb-1"
            >
              {item.label}
            </label>
            <input
              id={item.name}
              name={item.name}
              value={(form as any)[item.name]}
              onChange={handleChange}
              className="border rounded p-2 w-full"
            />
            <label className="flex items-center mt-2 text-sm">
              <input
                type="checkbox"
                name={item.unlimited}
                checked={(form as any)[item.unlimited]}
                onChange={handleChange}
                className="mr-2"
              />
              Unlimited {item.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-white hover:bg-[#58a18e]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddSubscription;
