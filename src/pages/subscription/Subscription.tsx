import { Link } from "react-router-dom";
import { useState, useEffect, type SetStateAction } from "react";
import { TbSquareRoundedCheck } from "react-icons/tb";

const Subscription = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showStatusChanged, setShowStatusChanged] = useState(false);
  const [planToDelete, setPlanToDelete] = useState<string | null>(null);

  const itemsPerPage = 3;

  const defaultPlans = [
    {
      name: "Basic Plan - Free",
      description: "The Plan is for everyone",
      price: "₹10000",
      frequency: "Monthly",
      features: {
        Admins: 5,
        Students: 5,
        Teachers: 10,
        Batches: 3,
        Courses: 5,
        Classes: 30,
      },
      img: "/src/assets/subscription/image1.png",
      bg: "bg-white",
    },
    {
      name: "Premium",
      description: "The Plan is for premium users",
      price: "₹15000",
      frequency: "Monthly",
      features: {
        Admins: 700,
        Students: 1,
        Teachers: 1,
        Batches: 3,
        Courses: 45,
        Classes: 50,
      },
      img: "/src/assets/subscription/image2.png",
      bg: "bg-white",
    },
    {
      name: "Exclusive Plan",
      description: "The Plan is for exclusive members",
      price: "₹12000",
      frequency: "Monthly",
      features: {
        Admins: 5,
        Students: 5,
        Teachers: 10,
        Batches: 3,
        Courses: 5,
        Classes: 30,
      },
      img: "/src/assets/subscription/image3.png",
      bg: "bg-white",
    },
    {
      name: "Enterprise Plan",
      description: "The Plan is for large institutions",
      price: "₹25000",
      frequency: "Monthly",
      features: {
        Admins: 1000,
        Students: 500,
        Teachers: 100,
        Batches: 50,
        Courses: 100,
        Classes: 300,
      },
      img: "/src/assets/subscription/image2.png",
      bg: "bg-white",
    },
    {
      name: "Starter Plan",
      description: "Ideal for small teams",
      price: "₹8000",
      frequency: "Monthly",
      features: {
        Admins: 3,
        Students: 20,
        Teachers: 5,
        Batches: 2,
        Courses: 3,
        Classes: 15,
      },
      img: "/src/assets/subscription/image1.png",
      bg: "bg-white",
    },
    {
      name: "Pro Plan",
      description: "Perfect for growing institutions",
      price: "₹18000",
      frequency: "Monthly",
      features: {
        Admins: 20,
        Students: 200,
        Teachers: 20,
        Batches: 10,
        Courses: 20,
        Classes: 60,
      },
      img: "/src/assets/subscription/image3.png",
      bg: "bg-white",
    },
  ];

  const [plans, setPlans] = useState(defaultPlans);

  useEffect(() => {
    const savedPlans = localStorage.getItem("plans");
    if (savedPlans) {
      try {
        const parsedPlans = JSON.parse(savedPlans);
        if (Array.isArray(parsedPlans)) {
          setPlans([...defaultPlans, ...parsedPlans]);
        }
      } catch (error) {
        console.error("Error parsing plans from localStorage:", error);
      }
    }
  }, []);

  const handleDelete = (planName: string) => {
    setPlans((prevPlans) => prevPlans.filter((p) => p.name !== planName));

    const savedPlans = JSON.parse(localStorage.getItem("plans") || "[]");
    const updatedPlans = savedPlans.filter((p: { name: string }) => p.name !== planName);
    localStorage.setItem("plans", JSON.stringify(updatedPlans));

    setShowConfirm(false);
    setShowStatusChanged(true);
  };

  const totalPages = Math.ceil(plans.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlans = plans.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageClick = (page: SetStateAction<number>) => setCurrentPage(page);
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Subscription Plan</h2>
        <Link
          to="/add-institute"
          className="bg-[#68B39F] hover:bg-emerald-500 text-white px-4 py-2 rounded-tl-md rounded-br-md shadow inline-block"
        >
          + Add Institute
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md border hover:bg-[#68B39F] hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ${plan.bg}`}
          >
            <div className="p-4">
              <img src={plan.img} alt={plan.name} className="rounded-lg h-50 w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm mb-3">{plan.description}</p>
              <p className="text-2xl font-bold">
                {plan.price}
                <span className="text-sm font-normal"> / {plan.frequency}</span>
              </p>

              <div className="mt-4 p-4 rounded-md shadow-2xl">
                <p className="text-sm font-semibold mb-2">FEATURES</p>
                <ul className="text-sm space-y-1">
                  {Object.entries(plan.features).map(([feature, count]) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-gray-600">
                        <TbSquareRoundedCheck />
                      </span>
                      {feature}: {count}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <Link
                  to={`/plan/${plan.name}`}
                  className="bg-[#68B39F] text-white px-4 py-1 rounded-tl-md rounded-br-md shadow-sm border border-emerald-400 hover:bg-white hover:text-[#68B39F]"
                >
                  Active
                </Link>

                <div className="relative inline-block z-50">
                  <button
                    onClick={() => setIsOpen(isOpen === index ? null : index)}
                    className="bg-[#68B39F] text-white text-2xl rounded-tl-md rounded-br-md font-bold w-8 h-8 hover:bg-white hover:text-[#68B39F]"
                  >
                    ⋮
                  </button>

                  {isOpen === index && (
                    <div className="absolute bottom-15 right-5 bg-[#68B39F] shadow-2xl p-3 rounded-md w-28 flex flex-col gap-4">
                      <Link
                        to={`/view/${encodeURIComponent(plan.name)}`}
                        state={{ plan }}
                        className="bg-white text-[#68B39F] px-4 py-2 rounded-md w-full hover:bg-[#559d88] hover:text-white"
                      >
                        View
                      </Link>
                      <Link
                        to="/edit-subscription"
                        state={{ editPlan: plan }}
                        className="bg-white text-[#68B39F] px-4 py-2 rounded-md w-full hover:bg-[#559d88] hover:text-white"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setPlanToDelete(plan.name);
                          setShowConfirm(true);
                        }}
                        className="bg-white text-[#68B39F] px-4 py-2 rounded-md w-full hover:bg-[#559d88] hover:text-white"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 py-10 flex justify-center items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-black"
            }`}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 border rounded-md ${page === currentPage ? "bg-[#68B39F] text-white font-semibold" : "bg-white text-black"
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-black"
            }`}
        >
          Next
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <div className="mb-4">
              <div className="text-red-500 text-6xl">⚠️</div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Are You Sure?</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this plan?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDelete(planToDelete!)}
                className="bg-[#68B39F] text-white px-4 py-2 rounded-md hover:bg-emerald-500"
              >
                Change
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showStatusChanged && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <div className="mb-6">
              <div className="text-green-500 text-6xl">✅</div>
            </div>
            <h2 className="text-2xl font-bold mb-6">Status Changed</h2>
            <button
              onClick={() => setShowStatusChanged(false)}
              className="bg-[#68B39F] text-white px-6 py-2 rounded-md hover:bg-emerald-500"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
