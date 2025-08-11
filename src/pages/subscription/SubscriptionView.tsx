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
    <div className="min-h-screen py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded-tl-xl rounded-br-xl border border-[#68B39F] text-[#68B39F] hover:bg-[#68B39F] hover:text-white transition"
        >
          ← Back
        </button>
      </div>
      <div className="bg-white shadow-lg rounded-xl max-w-6xl w-full overflow-hidden border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 flex justify-center items-center p-6">
            <img
              src={plan.image}
              alt={plan.name}
              className="rounded-lg shadow-sm object-contain max-h-72"
            />
          </div>
          <div className="p-6 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800">{plan.name}</h2>
            <p className="text-gray-600 mt-1 mb-4">{plan.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-[#68B39F] text-white rounded-md text-sm">
                ₹{plan.price} / {plan.period}
              </span>
              <span
                className={`px-3 py-1 rounded-md text-sm ${
                  plan.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {plan.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm mb-6">
              <div>
                <span className="font-semibold">Max Users:</span>{" "}
                {plan.maxUsers}
              </div>
              <div>
                <span className="font-semibold">Billing Cycle:</span>{" "}
                {plan.billingCycle}
              </div>
              <div>
                <span className="font-semibold">Created On:</span>{" "}
                {plan.createdOn}
              </div>
            </div>
            <h4 className="text-md font-semibold mb-2">Features Included</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(plan.features).map(([key, value]) => (
                <span
                  key={key}
                  className="px-3 py-1  text-sm border border-[#68B39F] text-[#68B39F] rounded-md bg-green-50"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
            <h3 className="font-semibold mb-2">Why Choose This Plan?</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {plan.why}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionView;
