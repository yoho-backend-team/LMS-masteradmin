import { Eye } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { FONTS } from "@/constants/ui constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentThunks } from "@/features/Payments/Reducers/thunks";
import { selectPayment } from "@/features/Payments/Reducers/selectors";
import { GetImageUrl } from "@/utils/helper";

export default function PaymentsTable() {
  const dispatch = useDispatch<any>();
  const paymentData = useSelector(selectPayment);
  const [loading, isLoading] = useState<boolean>(false);

  const [page, setPage] = useState(1);

  const fetchAllPayments = async (currentPage: number) => {
    try {
      isLoading(true);
      await dispatch(getPaymentThunks({ page: currentPage }));
      isLoading(false);
    } catch (error) {
      console.log("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    fetchAllPayments(page);
  }, [dispatch, page]);

  const getAmountPaid = (paymentHistory: any) => {
    const amountPaid = paymentHistory?.map((pay: any) => pay.amount);
    const paidAmount = amountPaid?.reduce((sum: any, num: any) => sum + num, 0);
    return paidAmount;
  };

 const SkeletonHeader = () => (
  <Card className=" animate-pulse">
    <CardContent className="grid grid-cols-6 gap-2 py-2 px-1">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-6 bg-gray-300 rounded w-30"></div>
      ))}
    </CardContent>
  </Card>
);

const SkeletonRow = () => (
  <Card className="animate-pulse">
    <CardContent className="grid grid-cols-6 gap-2 py-4 px-1">
      <div className="h-4 w-30 bg-gray-200 rounded"></div>
      <div className="flex items-center mb-2 gap-2">
        <div className="w-10 h-10 bg-gray-200  rounded-full"></div>
        <div className="h-4 w-30 bg-gray-200 rounded "></div>
      </div>
      <div className="h-4 w-30 bg-gray-200 rounded"></div>
      <div className="h-4 w-30 bg-gray-200 rounded"></div>
      <div className="h-4 w-30 bg-gray-200 rounded"></div>
      <div className="flex justify-center">
        <div className="w-4 h-4 bg-gray-200 rounded"></div>
      </div>
    </CardContent>
  </Card>
);


  return (
    <div className="p-2 space-y-4">
      {/* Header */}
      <div className="mb-2" style={{ ...FONTS.bold_heading }}>
        Fees
      </div>

      {/* Table Header Card */}

      {loading ? (
        <>
          <SkeletonHeader />
          <SkeletonRow />
         <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        </>
      ) : (
        <>
          <Card className="bg-[#2d6974] text-white shadow-md">
            <CardContent
              className="grid grid-cols-6 gap-2 py-2 px-1 text-center"
              style={{ ...FONTS.tableheader }}
            >
              <div className="px-2">ID</div>
              <div className="px-2">Institute Name</div>
              <div className="px-2">Current Plan</div>
              <div className="px-2">Issue Date</div>
              <div className="px-2">Amount Paid</div>
              <div className="px-2">Actions</div>
            </CardContent>
          </Card>
           {paymentData?.data?.map((row: any) => (
        <Card
          key={row.id}
          className="shadow-md hover:shadow-md transition-shadow duration-200"
        >
          <CardContent
            className="grid grid-cols-6 gap-2 py-1 px-1 items-center text-center"
            style={{ ...FONTS.description }}
          >
            <div className="px-2">{row.id}</div>
            <div className="flex items-center gap-2 px-2">
              <img
                src={
                  GetImageUrl(row?.institute?.logo) ?? "/placeholder-logo.png"
                }
                alt="Institute Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-medium text-gray-800">
                {row?.institute?.institute_name ?? "Institute"}
              </span>
            </div>

            <div className="px-2 ml-6">{row?.status}</div>
            <div className="">
              {row?.currentSubscriptionPlan?.startDate.split("T")[0]} / &nbsp;
              &nbsp;
              {row?.currentSubscriptionPlan.endDate.split("T")[0]}
            </div>
            <div className="px-2 ml-10">
              {getAmountPaid(row?.paymentHistory)}
            </div>
            <div className="px-2 flex justify-center">
              <Eye className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black" />
            </div>
          </CardContent>
        </Card>
      ))}

        </>
      )}


      <div className="flex justify-center items-center gap-4 mt-6">
        {/* Prev Button */}
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-[#6bc1a3] text-white border border-gray-300 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-sm  font-medium hover:bg-white hover:text-[#6bc1a3] disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ← Prev
        </button>

        {/* Page Info */}
        <span className="px-4 py-2 bg-[#6bc1a3] text-white border border-gray-200 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none text-sm font-medium ">
          {paymentData?.page ?? page} of {paymentData?.last_page ?? 1}
        </span>

        {/* Next Button */}
        <button
          disabled={page === paymentData?.last_page}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-[#6bc1a3] text-white border border-gray-300 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none shadow-sm  font-medium hover:bg-white hover:text-[#6bc1a3] disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
