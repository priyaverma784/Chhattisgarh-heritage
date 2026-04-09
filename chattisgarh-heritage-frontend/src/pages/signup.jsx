import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import loginPageImage from "../assets/loginPageImage.png";
import { handleError, handleSuccess } from "../utils.js";

function Signup() {

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setSignupInfo({
      ...signupInfo,
      [name]: value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }

    try {
      const url = "https://chhattisgarh-heritage.onrender.com/auth/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(signupInfo)
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);

      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details);
      } else {
        handleError(message);
      }
      console.log(result);
    } catch(err){
   console.error("Fetch error:", err);
   handleError("Cannot connect to server");
}
  };

  return (
    <div className="bg-[#fcf5e2]">
      <div className="min-h-screen flex bg-[#F7F1E1] flex-row-reverse">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex w-1/2 relative"
        >
          <img
            src={loginPageImage}
            alt="Chhattisgarh Culture"
            className="object-cover w-full h-200"
          />

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-4xl font-serif text-center px-10">
              “Be a part of preserving Chhattisgarh’s heritage”
            </h2>
          </div>
        </motion.div>

        {/* SIGNUP FORM */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex items-center justify-center px-6"
        >
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-serif text-[#8B2E1F] text-center mb-2">
              Create Account
            </h2>

            <p className="text-center text-gray-600 mb-6">
              Join us to explore and protect heritage
            </p>

            <form onSubmit={handleSignup}>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={signupInfo.name}
                  onChange={handlechange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={signupInfo.email}
                  onChange={handlechange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-700 mb-1">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={signupInfo.password}
                  onChange={handlechange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B2E1F] text-white py-3 rounded-lg font-semibold hover:bg-[#6F2217] transition-all duration-300 shadow-md"
              >
                Sign Up
              </button>

            </form>

            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-[#8B2E1F] font-semibold hover:underline">
                Login
              </a>
            </p>

          </div>
        </motion.div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;