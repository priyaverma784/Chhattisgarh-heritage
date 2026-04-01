import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

import folkDance from "../assets/folk-dance.png";
import Festivals from "../assets/festivals2.png";
import Tribes from "../assets/tribes.png";
import Architechture from "../assets/architecture.png";
import TraditionalFood from "../assets/traditionalfood.png";
import HandiCraft from "../assets/handiCraft.png";
import MusicInstruments from "../assets/musicinstruments.jpg";
import FreedomFighters from "../assets/freedomfighters.jpg";
import DistrictWiseHeritage from "../assets/districtwiseheritage.jpg";
import WildlifeNature from "../assets/wildlifenature.jpg";
import TraditionalCostumes from "../assets/traditionalcostumes.jpg";

const ExploreHeritage = () => {

  const navigate = useNavigate();

  const categories = [
    { name: "Folk Dances", image: folkDance },
    { name: "Festivals", image: Festivals },
    { name: "Tribes", image: Tribes },
    { name: "Traditional Food", image: TraditionalFood },
    { name: "Architecture", image: Architechture },
    { name: "Handicrafts", image: HandiCraft },
    { name: "Music Instruments", image: MusicInstruments },
    { name: "Freedom Fighters", image: FreedomFighters },
    { name: "District-wise Heritage", image: DistrictWiseHeritage },
    { name: "Wildlife & Nature", image: WildlifeNature },
    { name: "Traditional Costumes", image: TraditionalCostumes }
  ];

  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (categoryName) => {

    const formattedCategory = categoryName
      .toLowerCase()
      .replace(/ /g, "")
      .replace(/&/g, "");

    navigate(`/heritage/${formattedCategory}`);
  };

  const handleLike = async (categoryName) => {

    try {
      await fetch(`http://localhost:8000/api/heritage/like/${categoryName}`, {
        method: "PUT"
      });
    } catch (error) {
      console.log(error);
    }

  };

  return (

    <div className="bg-[#F7F1E1] min-h-screen">

      {/* Navbar FULL WIDTH */}
      <Navbar />

      {/* Only content has padding */}
      <div className="px-6 py-12">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[#8B2E1F] mb-3">
            Explore Heritage
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Discover stories, traditions and memories shared by our community.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search heritage places..."
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#E0B84C] w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredCategories.map((category) => (

            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5">

                <h2 className="text-xl font-serif text-[#8B2E1F] mb-2">
                  {category.name}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  Explore the cultural heritage of {category.name} in Chhattisgarh.
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  📍 Chhattisgarh
                </p>

                <div className="flex justify-between items-center">

                  <button
                    onClick={() => handleViewDetails(category.name)}
                    className="bg-[#8B2E1F] text-white px-4 py-1 rounded-lg hover:bg-[#6F2217] transition-all"
                  >
                    View Details
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center mt-10 text-gray-600 text-xl">
            No heritage places found matching your search.
          </div>
        )}

      </div>
    </div>

  );

};

export default ExploreHeritage;