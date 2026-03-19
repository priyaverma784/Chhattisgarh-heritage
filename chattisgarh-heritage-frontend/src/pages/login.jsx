import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import loginPageImage from "../assets/login-page-cover.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex bg-[#F7F1E1]">

      {/* Left Image Section */}
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex w-1/2 relative"
      >
        <img
          src={loginPageImage}
          alt="Chhattisgarh Culture"
          className="object-cover w-full h-screen"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-4xl font-serif text-center px-10">
            “Preserving the soul of Chhattisgarh for future generations”
          </h2>
        </div>
      </motion.div>

      {/* Right Login Section */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex items-center justify-center px-6"
      >
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-serif text-[#8B2E1F] text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Login to contribute and explore heritage
          </p>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#8B2E1F]" />
                Remember me
              </label>
              <a href="#" className="text-[#8B2E1F] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#8B2E1F] text-white py-3 rounded-lg font-semibold hover:bg-[#6F2217] transition-all duration-300 shadow-md"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="my-6 text-center text-gray-500 text-sm">
            — New here? —
          </div>

          {/* Signup Button */}
          <Link
            to="/signup"
            className="block text-center bg-[#E0B84C] text-[#3A2A1A] py-3 rounded-lg font-semibold hover:bg-[#d4aa3c] transition-all duration-300"
          >
            Create an Account
          </Link>

        </div>
      </motion.div>

    </div>
  );
};

export default Login;
