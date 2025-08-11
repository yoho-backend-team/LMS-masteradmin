// Subscription.tsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import SubscriptionCard, { SubscriptionPlanProps } from "../../components/SubscriptionPlan/SubscriptionCard";
import AddSubscription from "../../pages/subscription/AddSubscription";
import ConfirmDeleteModal from "../../components/SubscriptionPlan/ConfirmDeleteModal";
import subcard1 from "../../assets/subcard1.png";

const ITEMS_PER_PAGE = 3;

const Subscription: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [plans, setPlans] = useState<SubscriptionPlanProps[]>([
    {
      title: "Basic Plan - Free",
      description: "The Plan is for everyone",
      price: "0",
      duration: "Monthly",
      image: subcard1,
      features: [
        { label: "Admins", value: 5 },
        { label: "Students", value: 5 },
        { label: "Teachers", value: 10 },
        { label: "Batches", value: 3 },
        { label: "Courses", value: 5 },
        { label: "Classes", value: 30 },
      ],
      active: true,
    },
    {
      title: "Basic Plan",
      description: "The Plan is for everyone",
      price: "5000",
      duration: "Monthly",
      image: subcard1,
      features: [
        { label: "Admins", value: 7 },
        { label: "Students", value: 50 },
        { label: "Teachers", value: 15 },
        { label: "Batches", value: 8 },
        { label: "Courses", value: 5 },
        { label: "Classes", value: 10 },
      ],
      active: true,
    },
    {
      title: "Premium Plan",
      description: "Full features",
      price: "10000",
      duration: "Monthly",
      image: subcard1,
      features: [
        { label: "Admins", value: 10 },
        { label: "Students", value: 100 },
        { label: "Teachers", value: 30 },
        { label: "Batches", value: 15 },
        { label: "Courses", value: 10 },
        { label: "Classes", value: 50 },
      ],
      active: true,
    },
  ]);

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddPlan = (newPlan: SubscriptionPlanProps) => {
    setPlans((prev) => [...prev, newPlan]);
    setShowForm(false);
  };

  const handleDeletePlan = () => {
    if (deleteIndex !== null) {
      setPlans((prev) => prev.filter((_, i) => i !== deleteIndex));
      setDeleteIndex(null);
    }
  };

  const totalPages = Math.ceil(plans.length / ITEMS_PER_PAGE);
  const paginatedPlans = plans.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6">
      {!showForm && (
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-semibold text-gray-800">
            Subscription Plan
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-[#68B39F] px-4 py-2 rounded-tl-xl rounded-br-xl text-white hover:bg-[#58a18e] transition"
          >
            <Plus size={18} /> Add Institute
          </button>
        </div>
      )}

      {showForm ? (
        <AddSubscription
          onCancel={() => setShowForm(false)}
          onSubmit={handleAddPlan}
        />
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPlans.map((plan, index) => (
              <SubscriptionCard
                key={index}
                {...plan}
                onDelete={() => setDeleteIndex(index)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 disabled:opacity-40"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center px-4 py-2 rounded-tl-xl rounded-br-xl 
                    ${
                      currentPage === i + 1
                        ? "bg-[#68B39F] text-white shadow-lg"
                        : "bg-white text-black border"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="p-2 disabled:opacity-40"
              >
                &gt;
              </button>
            </div>
          )}
        </>
      )}

      {deleteIndex !== null && (
        <ConfirmDeleteModal
          onConfirm={handleDeletePlan}
          onCancel={() => setDeleteIndex(null)}
        />
      )}
    </div>
  );
};

export default Subscription;
