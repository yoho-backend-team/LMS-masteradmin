import React from "react";
import { useNavigate } from "react-router-dom";
import subcard1 from "../../assets/subcard1.png";

const SubscriptionView = () => {
  const navigate = useNavigate();

  const plan = {
    name: "Basic Plan - Free",
    description: "This plan is for everyone",
    image: subcard1,
    price: 0,
    period: "month",
    status: "Active",
    billingCycle: "Monthly",
    maxUsers: "Unlimited",
    createdOn: "N/A",
    features: {
      Admins: 500,
      Teachers: 100,
      Courses: 500,
      Students: 500,
      Batches: 200,
      Classes: 300,
    },
    why: `This subscription plan is designed for users looking for flexibility and efficiency.
With a Monthly billing cycle, it ensures predictable payments while providing scalable features.
The plan supports up to Unlimited users, allowing for structured and efficient management.
This plan is completely free, making it an excellent choice for those looking to explore the platform without financial commitment.`,
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center space-y-6 overflow-hidden">
      <div className="w-full max-w-5xl flex justify-start">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-tl-xl rounded-br-xl border border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white transition"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white shadow rounded-xl max-w-5xl w-full border">
        <div className="bg-gray-100 flex justify-center items-center h-56">
          <img
            src={plan.image}
            alt={plan.name}
            className="h-full max-w-full object-contain"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-1">{plan.name}</h2>
          <p className="text-gray-600 mb-4">{plan.description}</p>
          <hr className="mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm mb-4">
            <div>
              <span className="font-semibold">Price:</span> ${plan.price} / {plan.period}
            </div>
            <div>
              <span className="font-semibold">Status:</span>{" "}
              <span className="text-green-600">{plan.status}</span>
            </div>
            <div>
              <span className="font-semibold">Max Users:</span> {plan.maxUsers}
            </div>
            <div>
              <span className="font-semibold">Billing Cycle:</span> {plan.billingCycle}
            </div>
            <div>
              <span className="font-semibold">Created On:</span> {plan.createdOn}
            </div>
          </div>
          <hr className="mb-4" />
          <h4 className="text-md font-semibold mb-2">Features Included</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm mb-4">
            {Object.entries(plan.features).map(([key, value]) => (
              <div key={key} className="text-[#68B39F] flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center border border-[#68B39F] rounded-full text-xs font-bold">
                  ✓
                </span>
                <span>
                  <span className="font-semibold">{key}:</span> {value}
                </span>
              </div>
            ))}
          </div>
          <hr className="mb-4" />
          <h3 className="font-semibold mb-2">Why Choose This Plan?</h3>
          <p className="text-sm text-gray-700 whitespace-pre-line">{plan.why}</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionView;
