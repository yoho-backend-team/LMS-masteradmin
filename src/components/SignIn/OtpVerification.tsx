import { verifyOtpService } from "@/features/ForgotPassword/service";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  email: string;
  token: string;
  otp: string;
}

const OtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [token] = useState(state.token);
  const [email] = useState(state.email);

  console.log("Received OTP from backend:", state.otp);

  // Prefill OTP when component mounts
  useEffect(() => {
    if (state.otp) {
      const otpArray = state.otp.split("").slice(0, 6); // max 6 digits
      setOtp(otpArray);
    }
  }, [state.otp]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }

      if (!value && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");

    // Optional: Compare with backend OTP before hitting API
    if (state.otp && otpCode !== state.otp) {
      alert("Entered OTP does not match the one sent by the server");
      return;
    }

    const params = {
      email,
      otp: otpCode,
      token,
    };

    try {
      const response = await verifyOtpService(params);

      if (response.data?.success) {
        navigate("/");
      } else {
        alert(response.data?.message || "Invalid OTP");
      }
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full p-5">
          <h1 className="text-9xl text-center tracking-widest text-[#2D6974]">
            Classie
          </h1>

          <p className="text-2xl mt-10 font-bold text-[#68B39F]">
            OTP Verification
          </p>
          <p className="text-lg mt-2 text-[#999999]">
            Enter the 6 digit OTP sent to your Mobile Number
          </p>

          <div className="flex justify-center ml-10 gap-4 mt-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-14 mr-14 h-14 border border-[#68B39F] rounded-md text-[#68B39F] text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#68B39F]"
                autoFocus={index === 0}
              />
            ))}
          </div>

          <button
            onClick={handleVerify}
            className="mt-6 w-full h-14 bg-[#68B39F] text-white py-2 rounded-md text-xl font-medium"
          >
            Verify
          </button>

          <div className="text-center mt-5 text-[#999999]">Resend OTP</div>
        </div>
      </div>
      <div className="hidden md:block bg-[#68B39F]"></div>
    </div>
  );
};

export default OtpVerification;
