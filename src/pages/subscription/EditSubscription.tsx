import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditSubscription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const editPlan = location.state?.editPlan;

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        supportLevel: "",
        description: "",
        duration: "",
        durationType: "",
        features: {
            Students: "",
            Admins: "",
            Teachers: "",
            Batches: "",
            Courses: "",
            Classes: ""
        },
        unlimited: {
            Students: false,
            Admins: false,
            Teachers: false,
            Batches: false,
            Courses: false,
            Classes: false
        },
        img: ""
    });

    useEffect(() => {
        if (editPlan) {
            setFormData({
                ...editPlan,
                unlimited: {
                    Students: editPlan.features.Students === "Unlimited",
                    Admins: editPlan.features.Admins === "Unlimited",
                    Teachers: editPlan.features.Teachers === "Unlimited",
                    Batches: editPlan.features.Batches === "Unlimited",
                    Courses: editPlan.features.Courses === "Unlimited",
                    Classes: editPlan.features.Classes === "Unlimited"
                }
            });
        }
    }, [editPlan]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.startsWith("features.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                features: { ...prev.features, [key]: value }
            }));
        } else if (name.startsWith("unlimited.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                unlimited: { ...prev.unlimited, [key]: checked },
                features: {
                    ...prev.features,
                    [key]: checked ? "Unlimited" : ""
                }
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedPlans = JSON.parse(localStorage.getItem("plans")) || [];
        const updatedPlans = savedPlans.map((p) =>
            p.name === editPlan.name ? formData : p
        );
        localStorage.setItem("plans", JSON.stringify(updatedPlans));
        navigate("/subscription-list");
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Edit Subscription Plan</h2>
            <form
                onSubmit={handleSubmit}
                className="w-full"
            >
                {/* Image Upload */}
                <div className="flex justify-between p-4">
                    <div>
                        <img
                            src={formData.img || "/placeholder.png"}
                            alt="Upload"
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    img: URL.createObjectURL(e.target.files[0])
                                })
                            }
                        />
                    </div>
                    <div className="space-x-2 m-4">
                        {/* Upload Button */}
                        <Link
                            to="/upload"
                            className="bg-[#62A89C] hover:bg-[#4f9084] text-white px-4 py-2 rounded shadow transition duration-200"
                        >
                            Upload
                        </Link>

                        {/* Reset Button */}
                        <button
                            type="button"
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded shadow transition duration-200"
                            onClick={() => console.log("Reset clicked")}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Plan Name */}
                <div className="grid grid-cols-3 gap-8 my-8">
                    <div>
                        <label className="block mb-1">Plan</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Plan"
                            className="border p-2 rounded w-full"
                        />
                    </div>

                    {/* Plan Price */}
                    <div>
                        <label className="block mb-1">Plan Price</label>
                        <input
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Plan Price"
                            className="border p-2 rounded w-full"
                        />
                    </div>

                    {/* Support Level */}
                    <div>
                        <label className="block mb-1">Support Level</label>
                        <input
                            name="supportLevel"
                            value={formData.supportLevel}
                            onChange={handleChange}
                            placeholder="Support Level"
                            className="border p-2 rounded w-full"
                        />
                    </div>
                </div>

                {/* Plan Description */}
                <div className="md:col-span-2">
                    <label className="block mb-1">Plan Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Plan Description"
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Duration */}
                <div>
                    <label className="block mb-1">Duration</label>
                    <input
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="Duration"
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Duration Type */}
                <div>
                    <label className="block mb-1">Duration Type</label>
                    <input
                        name="durationType"
                        value={formData.durationType}
                        onChange={handleChange}
                        placeholder="Duration Type"
                        className="border p-2 rounded w-full"
                    />
                </div>

                {/* Features */}
                {Object.keys(formData.features).map((feature) => (
                    <div key={feature}>
                        <label className="block mb-1">{`Number of ${feature}`}</label>
                        <input
                            name={`features.${feature}`}
                            value={
                                formData.unlimited[feature] ? "" : formData.features[feature]
                            }
                            onChange={handleChange}
                            placeholder={`Number of ${feature}`}
                            disabled={formData.unlimited[feature]}
                            className="border p-2 rounded w-full"
                        />
                        <label className="mt-1 flex items-center gap-2">
                            <input
                                type="checkbox"
                                name={`unlimited.${feature}`}
                                checked={formData.unlimited[feature]}
                                onChange={handleChange}
                            />
                            Check for Unlimited {feature}
                        </label>
                    </div>
                ))}

                {/* Buttons */}
                <div className="flex justify-between md:col-span-2 mt-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditSubscription;
