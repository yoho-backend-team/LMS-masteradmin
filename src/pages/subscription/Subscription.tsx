// pages/Subscription/Subscription.tsx
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SubscriptionHeader from "../../components/SubscriptionPlan/SubscriptionHeader";
import SubscriptionCard, { SubscriptionPlan } from "../../components/SubscriptionPlan/SubscriptionCard";
import subcard1 from "../../assets/subcard1.png";

const Subscription = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [plans, setPlans] = useState<SubscriptionPlan[]>([
    {
      id: 1,
      name: "Basic Plan - Free",
      description: "The Plan is for everyone",
      price: 0,
      period: "Monthly",
      image: subcard1,
      status: "Active",
      features: [
        { label: "Admins", value: 5 },
        { label: "Students", value: 5 },
        { label: "Teachers", value: 10 },
        { label: "Batches", value: 3 },
        { label: "Courses", value: 5 },
        { label: "Classes", value: 30 },
      ],
    },
    {
      id: 2,
      name: "Basic Plan",
      description: "The Plan is for everyone",
      price: 0,
      period: "Monthly",
      image: subcard1,
      status: "Inactive",
      features: [
        { label: "Admins", value: 5 },
        { label: "Students", value: 5 },
        { label: "Teachers", value: 10 },
        { label: "Batches", value: 3 },
        { label: "Courses", value: 5 },
        { label: "Classes", value: 30 },
      ],
    },
  ]);

  // Toggle Active/Inactive
  const handleToggleStatus = (id: number) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id
          ? {
              ...plan,
              status: plan.status === "Active" ? "Inactive" : "Active",
            }
          : plan
      )
    );
  };

  useEffect(() => {
    const newPlan = location.state?.newPlan;
    const updatedPlan = location.state?.updatedPlan;

    if (newPlan) {
      setPlans((prev) => {
        const alreadyExists = prev.some((p) => p.id === newPlan.id);
        return alreadyExists ? prev : [...prev, newPlan];
      });
      window.history.replaceState({}, document.title);
    }

    if (updatedPlan) {
      setPlans((prev) =>
        prev.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
      );
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="pl-6 pr-6 overflow-hidden">
      <SubscriptionHeader onAddClick={() => navigate("/add-subscription")} />
      <div className="flex flex-wrap gap-6">
        {plans.map((plan) => (
          <SubscriptionCard
            key={plan.id}
            plan={plan}
            onToggleStatus={() => handleToggleStatus(plan.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
