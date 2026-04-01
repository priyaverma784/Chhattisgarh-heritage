import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContributeMemory = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);

    if (image) {
      data.append("image", image);
    }

    try {
      await axios.post(
        "http://localhost:8000/api/memory/add",
        data
      );

      alert("Memory submitted successfully!");

      setFormData({
        title: "",
        description: "",
        category: ""
      });

      setImage(null);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E1]">

      <div className="bg-[#8B2E1F] py-16 text-center text-white">
        <h1 className="text-4xl font-serif mb-4">
          Contribute Your Memory
        </h1>

        <p className="text-lg text-[#F3E6C4]">
          Share stories and traditions of cultural heritage
        </p>
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center px-6 py-12"
      >

        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-10">

          <form onSubmit={handleSubmit}>

            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter memory title"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
              >
                <option value="">Select Category</option>
                <option value="folkDance">Folk Dance</option>
                <option value="festivals">Festivals</option>
                <option value="tribes">Tribes</option>
                <option value="architecture">Architecture</option>
                <option value="rituals">Rituals</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Description
              </label>

              <textarea
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter memory description"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Upload Image
              </label>

              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B2E1F] text-white py-3 rounded-lg font-semibold hover:bg-[#6F2217] transition"
            >
              Submit Memory
            </button>

          </form>

        </div>

      </motion.div>

    </div>
  );
};

export default ContributeMemory;