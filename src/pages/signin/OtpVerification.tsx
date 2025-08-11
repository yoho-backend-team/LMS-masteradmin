import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OtpVerification() {
    const navigate = useNavigate();

    const handleVerify = () => {
        toast.success("Verification Successful 🎉", {
            position: "top-right",
            autoClose: 2000,
        });

        setTimeout(() => {
            navigate("/");
        }, 2000);
    };

    return (
        <div className="flex h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-8">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-widest text-[#256d6b]">
                        MASTER
                    </h1>
                    <p className="text-lg tracking-widest text-[#256d6b]">ADMIN</p>
                </div>

                <h2 className="text-[#256d6b] font-semibold mb-1">OTP Verification</h2>
                <p className="text-gray-500 text-sm mb-6 text-center">
                    Enter the 6 Digit OTP Sent to your Mobile Number
                </p>

                <div className="flex gap-3 mb-6">
                    {Array(6)
                        .fill("")
                        .map((_, i) => (
                            <input
                                key={i}
                                type="tel"
                                maxLength={1}
                                className="border border-gray-300 w-12 h-12 text-center text-lg rounded"
                            />
                        ))}
                </div>

                <button
                    onClick={handleVerify}
                    className="bg-[#62A89C] hover:bg-[#4f9084] text-white p-2 rounded w-full max-w-md"
                >
                    Verify
                </button>

                <div className="mt-4">
                    <Link to="/resend" className="text-gray-600 text-sm hover:underline">
                        Resend OTP
                    </Link>
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 bg-[#62A89C]"></div>
            <ToastContainer />
        </div>
    );
}
