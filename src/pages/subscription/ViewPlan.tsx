import { useLocation, useParams, Link } from "react-router-dom";

const ViewPlan = () => {
    useParams();
    const location = useLocation();
    const plan = location.state?.plan;

    if (!plan) {
        return (
            <div className="p-6">
                <h2 className="text-xl font-bold">Plan not found</h2>
                <Link to="/" className="text-blue-500 underline">Go Back</Link>
            </div>
        );
    }

    return (
        <div>
            <img src={plan.img} alt={plan.name} className="w-full h-60 object-cover rounded-lg mb-4" />

            <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-2xl font-bold text-[#68B39F] mb-6">
                {plan.price} <span className="text-sm font-normal">/ {plan.frequency}</span>
            </p>

            <div>
                <h3 className="text-xl font-semibold mb-3">Features:</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {Object.entries(plan.features).map(([feature, count]) => (
                        <li key={feature} className="text-gray-700">
                            {feature}: {count}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <Link
                    to="/add-institute"
                    className="bg-[#68B39F] text-white px-4 py-2 rounded-md shadow hover:bg-emerald-500"
                >
                    Back to Plans
                </Link>
            </div>
        </div>
    );
};

export default ViewPlan;
