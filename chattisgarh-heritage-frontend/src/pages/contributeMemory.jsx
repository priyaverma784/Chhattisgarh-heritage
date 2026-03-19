import React, { useState } from "react";
import { motion } from "framer-motion";

const ContributeMemory = () => {

  // State variables to store form values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("Image:", image);

    alert("Memory Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#F7F1E1]">

      {/* HERO SECTION */}
      <div className="bg-[#8B2E1F] py-16 text-center text-white">
        {/* Page Title */}
        <h1 className="text-4xl font-serif mb-4">
          Contribute Your Memory
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#F3E6C4]">
          Share stories, traditions, and cultural heritage of Chhattisgarh
        </p>
      </div>


      {/*FORM SECTION  */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 1 }}     
        className="flex justify-center px-6 py-12"
      >

        {/* Card Container */}
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-10">

          <form onSubmit={handleSubmit}>

            {/* Memory Title */}
            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Title
              </label>

              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>


            {/* Category Dropdown */}
            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0B84C]"
              >
                <option value="">Select Category</option>
                <option value="Folk Dance">Folk Dance</option>
                <option value="Festivals">Festivals</option>
                <option value="Tribes">Tribes</option>
                <option value="Architecture">Architecture</option>
                <option value="Rituals">Rituals</option>
              </select>
            </div>


            {/* Description */}
            <div className="mb-6">
              <label className="block text-[#8B2E1F] font-semibold mb-2">
                Description
              </label>

              <textarea
                rows="5"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E0B84C]"
              />
            </div>


            {/*Image Upload */}
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


            {/* ========== Submit Button ========== */}
            <button
              type="submit"
              className="w-full bg-[#8B2E1F] text-white py-3 rounded-lg font-semibold hover:bg-[#6F2217] transition-all duration-300 shadow-md"
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
