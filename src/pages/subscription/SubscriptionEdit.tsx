import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubscriptionEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const incomingPlan = location.state?.plan;

    const [formData, setFormData] = useState({
        name: "Basic Plan - Free",
        description: "",
        price: 0,
        duration: 100,
        durationType: "Months",
        supportLevel: "Basic",
        features: {
            Students: "",
            Admins: "",
            Teachers: "",
            Batches: "",
            Courses: "",
            Classes: "",
        },
        unlimited: {
            Students: false,
            Admins: false,
            Teachers: false,
            Batches: false,
            Courses: false,
            Classes: false,
        },
        image: null,
        imagePreview: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFeatureChange = (e, key) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            features: {
                ...prev.features,
                [key]: value,
            },
        }));
    };

    const handleUnlimitedChange = (key) => {
        setFormData((prev) => ({
            ...prev,
            unlimited: {
                ...prev.unlimited,
                [key]: !prev.unlimited[key],
            },
            features: {
                ...prev.features,
                [key]: !prev.unlimited[key] ? "Unlimited" : "",
            },
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                image: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };

    const handleImageReset = () => {
        setFormData((prev) => ({
            ...prev,
            image: null,
            imagePreview: null,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedFeatures = Object.entries(formData.features).map(([label, value]) => ({
            label,
            value: formData.unlimited[label] ? "Unlimited" : value,
        }));

        const updatedPlan = {
            ...formData,
            features: updatedFeatures,
            image: formData.imagePreview, // Or handle file upload if needed
        };

        navigate("/subscriptions", { state: { updatedPlan } }); // ✅ Send updated plan back
    };


    useEffect(() => {
        if (incomingPlan) {
            const initialFeatures = {};
            const initialUnlimited = {};

            incomingPlan.features.forEach(({ label, value }) => {
                initialFeatures[label] = value === "Unlimited" ? "" : value;
                initialUnlimited[label] = value === "Unlimited";
            });

            setFormData({
                ...incomingPlan,
                features: initialFeatures,
                unlimited: initialUnlimited,
                imagePreview: incomingPlan.image,
            });
        }
    }, [incomingPlan]);
    return (
        <form
            onSubmit={handleSubmit}
            className="min-h-screen p-8 text-sm"
        >
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-tl-xl mb-3 rounded-br-xl border border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white transition"
            >
                ← Back
            </button>

            <div className="max-w-7xl mx-auto bg-white p-6 border shadow-md rounded">

                <div className="my-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="border-2 border-dashed rounded-md p-4 text-center">
                        {formData.imagePreview ? (
                            <img
                                src={formData.imagePreview}
                                alt="Preview"
                                className="h-40 object-contain mx-auto"
                            />
                        ) : (
                            <p className="text-gray-500">Upload a plan image</p>
                        )}
                        <div className="flex gap-2 mt-2 justify-center">
                            <label className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-whitecursor-pointer">
                                Upload
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                            <button
                                type="button"
                                onClick={handleImageReset}
                                className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-red-200 text-white"
                            >
                                Reset
                            </button>
                        </div>
                        <small className="text-gray-500 text-xs block mt-1">
                            Allowed PNG or JPEG. Max size of 800k
                        </small>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold block mb-1">Plan Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                        />

                        <div className="my-4">
                            <label className="font-semibold block mb-1">
                                Plan Description
                            </label>
                            <textarea
                                name="description"
                                rows="3"
                                placeholder="Enter plan description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full border rounded p-2"
                            />
                        </div>

                        <label className="font-semibold block mb-1">Duration</label>
                        <input
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                        />

                        {["Students", "Teachers", "Courses"].map((label) => (
                            <div key={label} className="mb-4">
                                <label className="font-semibold block mb-1">
                                    Number of {label}
                                </label>
                                <input
                                    type="text"
                                    placeholder={`Enter number of ${label.toLowerCase()}`}
                                    value={formData.features[label]}
                                    disabled={formData.unlimited[label]}
                                    onChange={(e) => handleFeatureChange(e, label)}
                                    className="w-full border rounded p-2"
                                />
                                <label className="block mt-1">
                                    <input
                                        type="checkbox"
                                        checked={formData.unlimited[label]}
                                        onChange={() => handleUnlimitedChange(label)}
                                        className="mr-2"
                                    />
                                    Check for Unlimited {label}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="font-semibold block mb-1">Plan Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                        />

                        <label className="font-semibold block mt-4 mb-1">
                            Support Level
                        </label>
                        <input
                            name="supportLevel"
                            value={formData.supportLevel}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                        />

                        <label className="font-semibold block mt-4 mb-1">
                            Duration Type
                        </label>
                        <select
                            name="durationType"
                            value={formData.durationType}
                            onChange={handleInputChange}
                            className="w-full border rounded p-2"
                        >
                            <option>Days</option>
                            <option>Months</option>
                            <option>Years</option>
                        </select>

                        {["Admins", "Batches", "Classes"].map((label) => (
                            <div key={label} className="mb-4 mt-4">
                                <label className="font-semibold block mb-1">
                                    Number of {label}
                                </label>
                                <input
                                    type="text"
                                    placeholder={`Enter number of ${label.toLowerCase()}`}
                                    value={formData.features[label]}
                                    disabled={formData.unlimited[label]}
                                    onChange={(e) => handleFeatureChange(e, label)}
                                    className="w-full border rounded p-2"
                                />
                                <label className="block mt-1">
                                    <input
                                        type="checkbox"
                                        checked={formData.unlimited[label]}
                                        onChange={() => handleUnlimitedChange(label)}
                                        className="mr-2"
                                    />
                                    Check for Unlimited {label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-white"
                    >
                        Update
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SubscriptionEdit;
