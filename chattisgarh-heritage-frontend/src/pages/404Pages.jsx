import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f8f5f2]">
      <h1 className="text-6xl font-bold text-[#8b3a2b]">404</h1>
      <p className="text-xl mt-4">Oops! Page not found.</p>

      <Link to="/">
        <button className="mt-6 bg-[#8b3a2b] text-white px-6 py-2 rounded-lg hover:bg-[#6f2e23] transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
