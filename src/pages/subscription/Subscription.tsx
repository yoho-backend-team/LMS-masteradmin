import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import image1 from "../../assets/img 1.png";
import image2 from "../../assets/img 2.png";
import image3 from "../../assets/img 3.png";
import { useState } from "react";
import tickicon from "../../assets/circle-check.png";
import { MoreVertical } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SubscriptionPlanForm from "@/components/Subscription/form";
import { FONTS } from "@/constants/ui constants";
import { Button } from "@/components/ui/button";


type Plan = {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  status: "Active" | "Inactive";
};

const initialPlans: Plan[] = [
  {
    name: "Basic Plan - Free",
    description: "The Plan is for everyone",
    price: "₹0",
    image: image1,
    features: ["Admins: 5", "Students: 5", "Teachers: 10", "Batches: 3", "Courses: 5", "Classes: 30"],
    status: "Active",
  },
  {
    name: "Premium",
    description: "The Plan is for premium plan",
    price: "₹15000",
    image: image2,
    features: ["Admins: 700", "Students: 120", "Teachers: 01", "Batches: 60", "Courses: 45", "Classes: 50"],
    status: "Active",
  },
  {
    name: "Basic Plan - Free",
    description: "The Plan is for exclusive plan",
    price: "₹12000",
    image: image3,
    features: ["Admins: 5", "Students: 5", "Teachers: 10", "Batches: 3", "Courses: 5", "Classes: 30"],
    status: "Inactive",
  },
];

export default function Subscription() {
  const [plans, setPlans] = useState(initialPlans);
  const [open, setOpen] = useState(false);
   const [currentStatus, setCurrentStatus] = useState("Active");

   const handleStatusChange = (status: string) => {
    setCurrentStatus(status);
  };


  const toggleStatus = (index: number, newStatus: "Active" | "Inactive") => {
    const updated = [...plans];
    updated[index].status = newStatus;
    setPlans(updated);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2  style={{...FONTS.bold_heading}}>Subscription Plan</h2>
       <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <button
      onClick={() => setOpen(true)}
      className="bg-[#6bc1a3] px-4 py-2 rounded-tl-md rounded-br-xl hover:bg-[#57ab90] "style={{...FONTS.button}}
    >
      + Add Institute
    </button>
  </DialogTrigger>
  <DialogContent className="min-w-4xl overflow-y-auto max-h-[90vh] ml-110 mt-80">
    <SubscriptionPlanForm onClose={() => setOpen(false)} />
  </DialogContent>
</Dialog>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className="bg-white hover:bg-[#68b39f] transition-colors duration-300  group"
          >
            <CardHeader className="px-4 -mt-2">
              <img
                src={plan.image}
                alt={plan.name}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </CardHeader>

            <CardContent className="p-4 text-sm space-y-4">
              <CardTitle className=" group-hover:text-white" style={{...FONTS.text}}>
                {plan.name}
              </CardTitle>
              <p className=" opacity-80 mb-4 group-hover:text-white"style={{...FONTS.text1}}>{plan.description}</p>

              <div className="group-hover:text-white text-center" style={{...FONTS.number}}>
                {plan.price}
                <span className="text-sm font-normal ml-1"style={{...FONTS.text1,fontSize:'16px'}}>/ Monthly</span>
              </div>

              {(idx === 0 || idx === 1) && (
                <Card className="bg-gray-100 group-hover:bg-[#589b89] rounded-md p-3 mt-3">
                  <p className=" mb-1  group-hover:text-white"style={{...FONTS.text3}}>
                    FEATURES
                  </p>
                  <ul className="list-none text-black group-hover:text-white text-sm space-y-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span style={{...FONTS.text1}} ><img src={tickicon}/></span> {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </CardContent>

           <CardFooter className="flex justify-between items-center px-4 pb-4 pt-2">
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  className="rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"variant="outline">{currentStatus}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 p-2">
        {["Active", "Inactive"].map((status) => (
          <DropdownMenuItem
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`rounded-md px-3 py-2 text-sm font-medium rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none ${
              currentStatus === status
                ? "bg-[#68b39f] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {status}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        className={`px-3 py-1 rounded-tl-md mt-4 rounded-br-xl text-sm flex items-center justify-center group-hover:bg-white relative z-10 ${
          plan.status === "Active"
            ? "bg-[#d7f1e8] text-[#68b39f]"
            : "bg-red-100 text-red-600"
        }`}
      >
        <MoreVertical className="w-4 h-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>View</DropdownMenuItem>
      <DropdownMenuItem  onClick={() => setOpen(true)}>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</CardFooter>


          </Card>
        ))}
      </div>
    </div>
  );
}
