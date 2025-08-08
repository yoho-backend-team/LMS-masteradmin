import { Eye } from "lucide-react";

const PaymentsTable = [
  {
    id: "#1",
    institute: "JD",
    plan: "Basic Plan",
    issueDate: "2-24-2025 / 4-27-2025",
    amount: "₹0",
  },
  {
    id: "#2",
    institute: "SRM",
    plan: "Standard Plan",
    issueDate: "3-01-2025 / 6-01-2025",
    amount: "₹500",
  },
  {
    id: "#3",
    institute: "VIT",
    plan: "Premium Plan",
    issueDate: "4-15-2025 / 7-15-2025",
    amount: "₹1000",
  },
  {
    id: "#4",
    institute: "PSG",
    plan: "Basic Plan",
    issueDate: "5-10-2025 / 8-10-2025",
    amount: "₹0",
  },
  {
    id: "#5",
    institute: "KCT",
    plan: "Standard Plan",
    issueDate: "6-20-2025 / 9-20-2025",
    amount: "₹500",
  },
  {
    id: "#6",
    institute: "Anna University",
    plan: "Premium Plan",
    issueDate: "7-30-2025 / 10-30-2025",
    amount: "₹1500",
  },
];

const Payments = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-[#0E2B56]">Fees</h2>

      <div>
        <div className="bg-[#2D6974] text-white rounded-md px-3 py-3 grid grid-cols-6 font-medium text-center place-items-center">
          <span>ID</span>
          <span>Institute Name</span>
          <span>Current Plan</span>
          <span>Issue Date</span>
          <span>Amount Paid</span>
          <span>Actions</span>
        </div>

        <div className="mt-4 flex flex-col gap-5">
          {PaymentsTable.map((item, idx) => (
            <div
              key={idx}
              className="rounded-md px-2 py-3 grid grid-cols-6 text-[#0E2B56] bg-white shadow-sm text-center place-items-center"
            >
              <span>{item.id}</span>
              <span>{item.institute}</span>
              <span>{item.plan}</span>
              <span>{item.issueDate}</span>
              <span>{item.amount}</span>
              <span>
                <Eye className="w-5 h-5 mx-auto cursor-pointer" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payments;
