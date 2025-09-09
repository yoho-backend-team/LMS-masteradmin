/* eslint-disable @typescript-eslint/no-explicit-any */
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


  useEffect(() => {
    (async (currentPage: number) => {
      try {
        isLoading(true);
        await dispatch(getPaymentThunks({ page: currentPage }));
        isLoading(false);
      } catch (error) {
        console.log("Error fetching payments data:", error);
      }
    })(page)
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
    <div className=" space-y-4">
      {/* Header */}
      <div className="mb-2" style={{ ...FONTS.bold_heading }}>
        Fees
      </div>

      {/* Table Header Card */}
      {loading ? (
        <>
          {" "}
          <SkeletonHeader />{" "}
        </>
      ) : (
        <>
          {" "}
          <Card className="bg-[#2d6974] text-white shadow-md max-h-15">
            <CardContent
              className="grid grid-cols-6 gap-1 -mt-2 text-center "
              style={{ ...FONTS.tableheader }}
            >
              <div className="">ID</div>
              <div className="">Institute Name</div>
              <div className="">Current Plan</div>
              <div className="">Issue Date</div>
              <div className="">Amount Paid</div>
              <div className="">Actions</div>
            </CardContent>
          </Card>
        </>
      )}

      {loading ? (
        <>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </>
      ) : (
        <>
          {paymentData?.data?.map((row: any) => (
            <div className="">
              <Card
                key={row.id}
                className="shadow-md hover:shadow-md transition-shadow duration-200 max-h-15"
              >
                <CardContent
                  className="grid grid-cols-6 gap-2 -mt-4 !items-center !text-center !text-sm"
                  style={{ ...FONTS.description }}
                >
                  <div className="">{row.id}</div>
                  <div className="flex items-center gap-2 ">
                    <img
                      src={
                        GetImageUrl(row?.institute?.logo) ??
                        "/placeholder-logo.png"
                      }
                      alt="Institute Logo"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium  text-gray-800  truncate max-w-[220px] block ">
                      {row?.institute?.institute_name ?? "Institute"}
                    </span>
                  </div>

                  <div className=" ml-6">{row?.status}</div>
                  <div className="">
                    {row?.currentSubscriptionPlan?.startDate.split("T")[0]} /
                    &nbsp; &nbsp;
                    {row?.currentSubscriptionPlan.endDate.split("T")[0]}
                  </div>
                  <div className=" ml-10">
                    {getAmountPaid(row?.paymentHistory)}
                  </div>
                  <div className=" flex justify-center">
                    <Eye className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black" />
                  </div>
                </CardContent>
              </Card>
            </div>
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
