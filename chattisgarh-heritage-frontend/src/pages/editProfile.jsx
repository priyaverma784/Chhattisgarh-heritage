import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: ""
  });

  const [loading, setLoading] = useState(false);

  // ✅ Load user safely from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("loggedInUser");

      if (storedUser) {
        const user = JSON.parse(storedUser);

        setFormData({
          name: user?.name || "",
          email: user?.email || "",
          location: user?.location || "India"
        });
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      localStorage.removeItem("loggedInUser"); // remove corrupted data
    }
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const storedUser = localStorage.getItem("loggedInUser");

      if (!storedUser) {
        alert("User not found. Please login again.");
        return;
      }

      const user = JSON.parse(storedUser);

      // 🔥 IMPORTANT: using user._id in URL (fixes 404)
      const res = await axios.put(
        `http://localhost:8000/api/user/update/${user._id}`,
        formData
      );

      alert("Profile Updated Successfully");

      // ✅ Save updated user properly
      localStorage.setItem("loggedInUser", JSON.stringify(res.data));

    } catch (error) {
      console.error("Update Error:", error);
      console.error("Backend Response:", error.response);

      alert(error.response?.data?.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#d9d2c3]">
      
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-[350px]">

        <h2 className="text-xl font-bold text-center mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 border rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded-md"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8b3e2f] text-white py-2 rounded-lg hover:bg-[#6e2f23] disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;