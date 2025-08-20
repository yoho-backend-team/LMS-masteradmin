import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface EditInstituteFormProps {
  onCancel: () => void;
}

const validationSchema = Yup.object({
  instituteName: Yup.string().required("Institute Name is required"),
  registeredDate: Yup.date().required("Registered Date is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pin Code must be 6 digits")
    .required("Pin Code is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  officialEmail: Yup.string()
    .email("Invalid email format")
    .required("Official Email is required"),
  officialWebsite: Yup.string().url("Invalid URL"),
  description: Yup.string().max(300, "Description can’t be longer than 300 characters"),
  instagram: Yup.string().url("Invalid Instagram URL"),
  facebook: Yup.string().url("Invalid Facebook URL"),
  linkedin: Yup.string().url("Invalid LinkedIn URL"),
  twitter: Yup.string().url("Invalid Twitter URL"),
  pinterest: Yup.string().url("Invalid Pinterest URL"),
});

const EditInstituteForm: React.FC<EditInstituteFormProps> = ({ onCancel }) => {
  const formik = useFormik({
    initialValues: {
      instituteName: "",
      registeredDate: "",
      state: "",
      city: "",
      pinCode: "",
      addressLine1: "",
      addressLine2: "",
      phoneNumber: "",
      altPhoneNumber: "",
      officialEmail: "",
      officialWebsite: "",
      description: "",
      instagram: "",
      facebook: "",
      linkedin: "",
      email: "",
      twitter: "",
      pinterest: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      // Optional: Go back to view mode after save
      onCancel();
    },
  });

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4  max-h-[80vh]"
    >
      {/* Basic fields */}
      {[
        { name: "instituteName", placeholder: "Institute Name" },
        { name: "registeredDate", placeholder: "Registered Date", type: "date" },
        { name: "state", placeholder: "State" },
        { name: "city", placeholder: "City" },
        { name: "pinCode", placeholder: "Pin Code" },
        { name: "addressLine1", placeholder: "Address Line 1" },
        { name: "addressLine2", placeholder: "Address Line 2" },
        { name: "phoneNumber", placeholder: "Phone Number" },
        { name: "altPhoneNumber", placeholder: "Alt Phone Number" },
        { name: "officialEmail", placeholder: "Official Email", type: "email" },
        { name: "officialWebsite", placeholder: "Official Website" },
      ].map((field) => (
        <div key={field.name}>
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={(formik.values as any)[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass}
          />
          {formik.touched[field.name as keyof typeof formik.touched] &&
            formik.errors[field.name as keyof typeof formik.errors] && (
              <p className="text-red-500 text-sm">
                {formik.errors[field.name as keyof typeof formik.errors]}
              </p>
            )}
        </div>
      ))}

      {/* Description */}
      <div className="md:col-span-2">
        <textarea
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`${inputClass} h-24`}
        />
        {formik.touched.description && formik.errors.description && (
          <p className="text-red-500 text-sm">{formik.errors.description}</p>
        )}
      </div>

      {/* Social Links */}
      {[
        { name: "instagram", placeholder: "Instagram URL" },
        { name: "facebook", placeholder: "Facebook URL" },
        { name: "linkedin", placeholder: "LinkedIn URL" },
        { name: "email", placeholder: "Email", type: "email" },
        { name: "twitter", placeholder: "Twitter URL" },
        { name: "pinterest", placeholder: "Pinterest URL" },
      ].map((field) => (
        <div key={field.name}>
          <input
            type={field.type || "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={(formik.values as any)[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={inputClass}
          />
          {formik.touched[field.name as keyof typeof formik.touched] &&
            formik.errors[field.name as keyof typeof formik.errors] && (
              <p className="text-red-500 text-sm">
                {formik.errors[field.name as keyof typeof formik.errors]}
              </p>
            )}
        </div>
      ))}

      {/* Buttons */}
      <div className="flex gap-4 md:col-span-2 mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            formik.resetForm();
            onCancel();
          }}
          className="px-4 py-2 justify-end bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditInstituteForm;
