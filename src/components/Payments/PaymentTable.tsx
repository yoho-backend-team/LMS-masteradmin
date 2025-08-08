import { Eye } from "lucide-react";
import {
  Card,
  CardContent,
} from "../../components/ui/card";
import { FONTS } from "@/constants/ui constants";

type PaymentRow = {
  id: string;
  institute: string;
  plan: string;
  issue: string;
  amount: string;
};

const data: PaymentRow[] = [
  { id: "#1", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
  { id: "#2", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
  { id: "#3", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
  { id: "#4", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
  { id: "#5", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
  { id: "#6", institute: "JD", plan: "Basic Plan", issue: "2-24-2025 / 4-27-2025", amount: "$0" },
];

export default function PaymentsTable() {
  return (
    <div className="p-2 space-y-4">
      {/* Header */}
      <div className="mb-2"style={{...FONTS.bold_heading}}>Fees</div>

      {/* Table Header Card */}
      <Card className="bg-[#2d6974] text-white shadow-md">
        <CardContent className="grid grid-cols-6 gap-4 py-2 px-2 "style={{...FONTS.tableheader}}>
          <div className="px-2">ID</div>
          <div className="px-2">Institute Name</div>
          <div className="px-2">Current Plan</div>
          <div className="px-2">Issue Date</div>
          <div className="px-2">Amount Paid</div>
          <div className="px-2 text-right">Actions</div>
        </CardContent>
      </Card>

      {/* Data Rows as Compact Cards */}
      {data.map((row) => (
        <Card
          key={row.id}
          className="shadow-md hover:shadow-md transition-shadow duration-200"
        >
          <CardContent className="grid grid-cols-6 gap-6 py-2 px-2  items-center"style={{...FONTS.description}}>
            <div className="px-2">{row.id}</div>
            <div className="px-2">{row.institute}</div>
            <div className="px-2">{row.plan}</div>
            <div className="px-2">{row.issue}</div>
            <div className="px-2">{row.amount}</div>
            <div className="px-2 flex justify-end">
              <Eye className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
