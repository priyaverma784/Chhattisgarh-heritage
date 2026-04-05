import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from  '../components/navbar.jsx';


const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    setUser(storedUser);
  }, []);

  const navigate = useNavigate();
  const userEmail = localStorage.getItem('email');

  return (
    <div className="bg-[#F7F1E1] min-h-screen">
        <Navbar />

      <div className="flex justify-center items-center py-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px] text-center">

          <div className="w-20 h-20 mx-auto bg-[#facc15] text-black rounded-full flex items-center justify-center text-2xl font-bold">
            {user ? user.charAt(0).toUpperCase() : "U"}
          </div>

          <h2 className="text-2xl font-bold mt-4 text-[#8b3a2b]">
            {user || "Guest User"}
          </h2>

          <p className="text-gray-600 mt-2">
            {localStorage.getItem('email') || "example@gmail.com"}
          </p>

          <div className="border-t my-6"></div>

          <div className="text-left space-y-3">
            <p><span className="font-semibold">Location:</span> India</p>
            <p><span className="font-semibold">Member Since:</span> 2024</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">

            <button
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                localStorage.removeItem("token");
               setTimeout(() => {
                    navigate("/");
                }, 1000)
              }}
              className="border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;