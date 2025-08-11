import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = () => {
        toast.success("Successfully Signed In!", {
            position: "top-right",
            autoClose: 2000,
        });

        setTimeout(() => {
            navigate("/home");
        }, 2000);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-8 md:px-16">
                <h1 className="text-5xl font-bold tracking-widest text-[#2B6E6E]">MASTER</h1>
                <h2 className="text-lg tracking-[0.4em] text-[#2B6E6E] font-medium mb-8">ADMIN</h2>

                <h3 className="text-lg font-semibold text-[#68B39F]">Hi, Welcome Back</h3>
                <p className="text-gray-500 mb-6">Enter your Credentials to continue</p>

                <div className="w-full mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">User Name</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#68B39F]"
                    />
                </div>

                <div className="w-full mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#68B39F]"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <FiEye className="h-5 w-5" />
                            ) : (
                                <FiEyeOff className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full mb-6">
                    <label className="flex items-center text-sm text-gray-600">
                        <input type="checkbox" className="mr-2" /> Remember Me
                    </label>
                    <Link
                        to="/forgot-password"
                        className="text-sm text-gray-500 hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    onClick={handleSignIn}
                    className="block text-center w-full bg-[#68B39F] text-white py-2 rounded-md hover:bg-[#559d88]"
                >
                    Sign In
                </button>

                <p className="flex items-center mt-6 text-gray-500 text-sm">
                    <span className="mr-2 text-xl"><AiOutlineExclamationCircle /></span>
                    Enter the mail ID & Password given by LMS
                </p>
            </div>

            <div className="hidden md:flex w-1/2 bg-[#68B39F]"></div>

            <ToastContainer />
        </div>
    );
}
