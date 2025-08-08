import { Eye } from "lucide-react";

type PaymentRow = {
  id: string;
  institute: string;
  plan: string;
  issue: string;
  amount: string;
};

const data: PaymentRow[] = [
  {
    id: "#1",
    institute: "JD Institute",
    plan: "Basic Plan",
    issue: "2-24-2025 / 4-27-2025",
    amount: "$0",
  },
  {
    id: "#2",
    institute: "Green Valley High",
    plan: "Standard Plan",
    issue: "1-15-2025 / 4-15-2025",
    amount: "$99",
  },
  {
    id: "#3",
    institute: "Ocean View Academy",
    plan: "Premium Plan",
    issue: "3-10-2025 / 6-10-2025",
    amount: "$199",
  },
  {
    id: "#4",
    institute: "Techverse Institute",
    plan: "Basic Plan",
    issue: "2-01-2025 / 5-01-2025",
    amount: "$0",
  },
  {
    id: "#5",
    institute: "Bright Future School",
    plan: "Standard Plan",
    issue: "3-05-2025 / 6-05-2025",
    amount: "$99",
  },
  {
    id: "#6",
    institute: "Hilltop Academy",
    plan: "Premium Plan",
    issue: "2-28-2025 / 5-28-2025",
    amount: "$199",
  },
  {
    id: "#7",
    institute: "Metro High School",
    plan: "Basic Plan",
    issue: "1-10-2025 / 4-10-2025",
    amount: "$0",
  },
  {
    id: "#8",
    institute: "Evergreen College",
    plan: "Standard Plan",
    issue: "4-01-2025 / 7-01-2025",
    amount: "$99",
  },
  {
    id: "#9",
    institute: "New Era Academy",
    plan: "Basic Plan",
    issue: "3-18-2025 / 6-18-2025",
    amount: "$0",
  },
  {
    id: "#10",
    institute: "Skyline International",
    plan: "Premium Plan",
    issue: "5-01-2025 / 8-01-2025",
    amount: "$199",
  },
];

export default function PaymentsTable() {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Fees</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#1f4d36] text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Institute Name</th>
              <th className="px-4 py-2">Current Plan</th>
              <th className="px-4 py-2">Issue Date</th>
              <th className="px-4 py-2">Amount Paid</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.institute}</td>
                <td className="px-4 py-3">{row.plan}</td>
                <td className="px-4 py-3">{row.issue}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="px-4 py-3">
                  <Eye className="w-5 h-5 text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
