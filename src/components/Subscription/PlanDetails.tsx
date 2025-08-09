import React from "react";

export interface PlanDetailsProps {
  name: string;
  description: string;
  price: string;
  status: string;
  maxUsers: string;
  billingCycle: string;
  createdOn?: string;
  features: {
    admins: number;
    students: number;
    teachers: number;
    batches: number;
    classes: number;
    extraClasses?: number;
  };
  whyChoose: string;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({
  name,
  description,
  price,
  status,
  maxUsers,
  billingCycle,
  createdOn,
  features,
  whyChoose,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{description}</p>

      {/* Plan Overview */}
      <section className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-lg font-semibold">Plan Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 mt-3 text-sm">
          <div>
            <p className="font-semibold">Price</p>
            <p>{price}</p>
          </div>
          <div>
            <p className="font-semibold">Status</p>
            <p>{status}</p>
          </div>
          <div>
            <p className="font-semibold">Max Users</p>
            <p>{maxUsers}</p>
          </div>
          <div>
            <p className="font-semibold">Billing Cycle</p>
            <p>{billingCycle}</p>
          </div>
          <div>
            <p className="font-semibold">Created On</p>
            <p>{createdOn || "N/A"}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-lg font-semibold">Features Included</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 mt-3 text-sm">
          <p><span className="font-semibold">Admins:</span> {features.admins}</p>
          <p><span className="font-semibold">Students:</span> {features.students}</p>
          <p><span className="font-semibold">Teachers:</span> {features.teachers}</p>
          <p><span className="font-semibold">Batches:</span> {features.batches}</p>
          <p><span className="font-semibold">Classes:</span> {features.classes}</p>
          {features.extraClasses && (
            <p><span className="font-semibold">Extra Classes:</span> {features.extraClasses}</p>
          )}
        </div>
      </section>

      {/* Why Choose */}
      <section className="mt-6 border-t border-gray-200 pt-4">
        <h3 className="text-lg font-semibold">Why Choose This Plan?</h3>
        <p className="text-gray-600 text-sm mt-2">{whyChoose}</p>
      </section>
    </div>
  );
};

export default PlanDetails;
