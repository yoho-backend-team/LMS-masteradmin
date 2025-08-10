import { useState } from "react";
import Subscription from "./Subscription";
import SubscriptionForm from "./SubscriptionForm";

const SubscriptionPage = () => {
  const [plans, setPlans] = useState([
    {
      name: "Basic Plan - Free",
      description: "The Plan is for everyone",
      price: "₹10000",
      frequency: "Monthly",
      features: { Admins: 5, Students: 5, Teachers: 10, Batches: 3, Courses: 5, Classes: 30 },
      img: "/src/assets/subscription/image1.png",
      bg: "bg-white",
    },
    {
      name: "Premium",
      description: "The Plan is for premium users",
      price: "₹15000",
      frequency: "Monthly",
      features: { Admins: 700, Students: 1, Teachers: 1, Batches: 3, Courses: 45, Classes: 50 },
      img: "/src/assets/subscription/image2.png",
      bg: "bg-white",
    },
  ]);

  const addPlan = (newPlan) => {
    setPlans((prev) => [...prev, newPlan]);
  };

  return (
    <div className="p-6 space-y-10">
      <Subscription plans={plans} />
      <SubscriptionForm onAddPlan={addPlan} />
    </div>
  );
};

export default SubscriptionPage;
