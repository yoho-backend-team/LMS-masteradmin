import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const handleSendOTP = () => {
        toast.success("OTP verification code sent successfully!", {
            position: "top-right",
            autoClose: 2000,
        });

        setTimeout(() => {
            navigate("/otp-verification");
        }, 2000);
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-8 md:px-16">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold tracking-widest text-[#2B6E6E]">MASTER</h1>
                    <h2 className="text-lg tracking-[0.4em] text-[#2B6E6E] font-medium mb-8">ADMIN</h2>
                </div>

                <h2 className="text-[#256d6b] font-semibold mb-1">Forgot Password?</h2>
                <p className="text-gray-500 text-sm mb-6 text-center">
                    Enter your email and we’ll send you instructions to reset your password
                </p>

                <div className="w-full max-w-md mb-4">
                    <label
                        htmlFor="usernameOrEmail"
                        className="block text-md font-medium text-gray-700 mb-1"
                    >
                        Username Or Email
                    </label>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>

                <button
                    onClick={handleSendOTP}
                    className="bg-[#62A89C] hover:bg-[#4f9084] text-white p-2 rounded w-full max-w-md text-center block"
                >
                    Send OTP
                </button>

                <div className="mt-6">
                    <button
                        onClick={() => navigate("/")}
                        className="text-gray-600 text-sm flex items-center gap-1"
                    >
                        <span className="mr-2 text-xl"><AiOutlineExclamationCircle /></span>
                        Back to Login
                    </button>
                </div>
            </div>

            <div className="hidden md:block md:w-1/2 bg-[#62A89C]"></div>
            <ToastContainer />
        </div>
    );
}
