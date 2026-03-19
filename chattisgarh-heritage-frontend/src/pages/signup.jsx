import React, { useState } from "react";
import { motion } from "framer-motion";
import loginPageImage from "../assets/login-page-cover.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="bg-[#fcf5e2]">
      <div className="min-h-screen flex bg-[#F7F1E1] flex-row-reverse">

        {/* IMAGE SECTION (RIGHT SIDE NOW) */}
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

        {/* SIGNUP FORM (LEFT SIDE NOW) */}
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

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-[#8B2E1F] text-white py-3 rounded-lg font-semibold hover:bg-[#6F2217] transition-all duration-300 shadow-md"
            >
              Sign Up
            </button>

            {/* Back to login */}
            <p className="text-center text-sm mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-[#8B2E1F] font-semibold hover:underline">
                Login
              </a>
            </p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
