import React from "react";
import { Link } from "react-router-dom";

import DussehraFestivals from "../assets/Dussehra.png";
import Muraisofbastar from "../assets/murais.png";
import BhoramdooTemple from "../assets/BhoramdooTemple.png";
import TerracottaCraft from "../assets/TerracottaCraft.png";

const FeaturedHeritage = () => {

  const featuredItems =
    "relative h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-md rounded-lg";

  const featuredButtons =
    "absolute bottom-0 left-0 font-bold text-sm md:text-[18px] w-full p-[12px] md:p-[14px] text-white transition duration-300";

  const items = [
    {
      id: "69c978def6b9dfd73230f38e",
      title: "Dussehra Festivals",
      image: DussehraFestivals,
      color: "bg-[#0e531d]",
    },
    {
      id: "69c9462a3269170a1ff87f9d",
      title: "Murias of Bastar",
      image: Muraisofbastar,
      color: "bg-[#8b1d14]",
    },
    {
      id: "69c94b723ac51fbc026669a0",
      title: "Bhoramdeo Temple",
      image: BhoramdooTemple,
      color: "bg-[#B38728]",
    },
    {
      id: "69ca8644e66fe339a9d1c4af",
      title: "Terracotta Craft",
      image: TerracottaCraft,
      color: "bg-[#8b3a2b]",
    },
  ];

  return (
    <div className="FeaturedHeritage">

      {/* Heading */}
      <div className="flex items-center gap-3 my-6 px-4 md:px-8">
        <h2 className="text-[#8b3a2b] text-lg md:text-2xl font-serif font-semibold whitespace-nowrap">
          Featured Heritage
        </h2>
        <div className="flex-1 h-0.5 bg-[#bc9b95]"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 p-4 md:p-8">
        {items.map((item) => (
          <Link
            to={`/heritage/item/${item.id}`}
            key={item.id}
            className="block"
          >
            <section
              className={featuredItems}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div
                className={`${featuredButtons} ${item.color} hover:bg-[rgba(0,0,0,0.6)]`}
              >
                {item.title}
              </div>
            </section>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default FeaturedHeritage;