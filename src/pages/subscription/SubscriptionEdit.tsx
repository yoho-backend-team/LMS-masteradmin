import { EditSubscription } from "@/features/subscription/services";
import { useState, useEffect, type ChangeEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubscriptionEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const incomingPlan = location.state?.plan;

    const [formData, setFormData] = useState<any>({
        name: "",
        description: "",
        price: "",
        duration: "",
        durationType: "Days",
        supportLevel: "",
        features: [],
        unlimited: {
            Students: "",
            Admins: "",
            Teachers: "",
            Batches: "",
            Courses: "",
            Classes: "",
        },
        image: null,
        imagePreview: null,
    });

    useEffect(() => {
        if (incomingPlan) {
            const mappedFeatures = incomingPlan.features.map((item: any) => ({
                featureName: item.feature?.identity || item.feature?.name,
                count: item?.count,
                unlimited: item?.count === "Unlimited",
            }));

            const initialUnlimited: any = {};
            mappedFeatures.forEach((feature: any) => {
                initialUnlimited[feature.featureName] = feature.unlimited;
            });

            setFormData({
                ...incomingPlan,
                features: mappedFeatures,
                unlimited: initialUnlimited,
                imagePreview: incomingPlan.image,
            });
        }
    }, [incomingPlan]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, key: string) => {
        const value = e.target.value;
        setFormData((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleFeatureChange = (e: ChangeEvent<HTMLInputElement>, label: string) => {
        const value = e.target.value;
        setFormData((prev: any) => ({
            ...prev,
            features: prev.features.map((f: any) =>
                f.featureName === label ? { ...f, count: value, unlimited: false } : f
            ),
            unlimited: { ...prev.unlimited, [label]: false },
        }));
    };

    const handleUnlimitedChange = (label: string) => {
        setFormData((prev: any) => ({
            ...prev,
            unlimited: {
                ...prev.unlimited,
                [label]: !prev.unlimited[label],
            },
            features: prev.features.map((f: any) =>
                f.featureName === label
                    ? { ...f, count: !prev.unlimited[label] ? "Unlimited" : "", unlimited: !prev.unlimited[label] }
                    : f
            ),
        }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev: any) => ({
                ...prev,
                image: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };

    const handleImageReset = () => {
        setFormData((prev: any) => ({
            ...prev,
            image: null,
            imagePreview: null,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...formData,
            features: formData.features.map((f: any) => ({
                featureName: f.featureName,
                count: f.count,
            })),
            image: formData.image,
        };

        console.log("Payload to send:", payload);

        try {
            const res = await EditSubscription(payload);
            console.log("Subscription Edited Successfully:", res);  
            if (res && res.data && res.data.success) {
                navigate("/subscriptions", { state: { updatedPlan: payload } });
            } else {
                console.error("Edit failed:", res?.data?.message || "Unknown error");
            }
        } catch (error) {
            console.error("Error Editing subscription:", error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="min-h-screen p-8 text-sm">
            <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-tl-xl mb-3 rounded-br-xl border border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white transition"
            >
                ← Back
            </button>

            <div className="p-6 mx-auto bg-white border rounded shadow-md max-w-7xl">
                {/* Image section */}
                <div className="flex flex-col items-start justify-between gap-6 my-6 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        {formData.imagePreview ? (
                            <img src={formData.imagePreview} alt="Preview" className="object-contain h-40" />
                        ) : (
                            <p className="text-gray-500">Upload a plan image</p>
                        )}
                        <small className="text-xs text-gray-500">
                            {formData.imagePreview ? "Image Preview" : "No image selected"}
                        </small>
                        <small className="text-xs text-gray-500">Allowed PNG or JPEG. Max size of 800k</small>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <label className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-white cursor-pointer">
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
                                className="px-4 py-2 text-white bg-red-500 rounded-tl-xl rounded-br-xl"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                {/* Plan info */}
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block mb-1 font-semibold">Plan Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={(e) => handleInputChange(e, "price")}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block mb-1 font-semibold">Plan Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange(e, "name")}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block mb-1 font-semibold">Support Level</label>
                        <input
                            name="supportLevel"
                            value={formData.supportLevel}
                            onChange={(e) => handleInputChange(e, "supportLevel")}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                <div className="my-4">
                    <label className="block mb-1 font-semibold">Plan Description</label>
                    <textarea
                        name="description"
                        rows={3}
                        placeholder="Enter plan description"
                        value={formData.description}
                        onChange={(e) => handleInputChange(e, "description")}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="block mb-1 font-semibold">Duration</label>
                        <input
                            name="duration"
                            value={formData.duration}
                            onChange={(e) => handleInputChange(e, "duration")}
                            className="w-full p-2 border rounded"
                        />

                        {["Students", "Teachers", "Courses"].map((label) => {
                            const feature = formData.features.find((f: any) => f.featureName  === label);
                            return (
                                <div key={label} className="mb-4">
                                    <label className="block mb-1 font-semibold">Number of {label}</label>
                                    <input
                                        type="text"
                                        placeholder={`Enter number of ${label.toLowerCase()}`}
                                        value={feature?.count || ""}
                                        disabled={formData.unlimited[label]}
                                        onChange={(e) => handleFeatureChange(e, label)}
                                        className="w-full p-2 border rounded"
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
                            );
                        })}
                    </div>

                    <div>
                        <label className="block mt-4 mb-1 font-semibold">Duration Type</label>
                        <select
                            name="durationType"
                            value={formData.durationType}
                            onChange={(e) => handleInputChange(e, "durationType")}
                            className="w-full p-2 border rounded"
                        >
                            <option>Days</option>
                            <option>Months</option>
                            <option>Years</option>
                        </select>

                        {["Admins", "Batches", "Classes"].map((label) => {
                            const feature = formData.features.find((f: any) => f.featureName === label);
                            return (
                                <div key={label} className="mt-4 mb-4">
                                    <label className="block mb-1 font-semibold">Number of {label}</label>
                                    <input
                                        type="text"
                                        placeholder={`Enter number of ${label.toLowerCase()}`}
                                        value={feature?.count || ""}
                                        disabled={formData.unlimited[label]}
                                        onChange={(e) => handleFeatureChange(e, label)}
                                        className="w-full p-2 border rounded"
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
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-tl-xl rounded-br-xl bg-[#68B39F] text-white"
                    >
                        Update/submit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SubscriptionEdit;
