import React from "react";
import DussehraFestivals from "../assets/Dussehra.png";
import Muraisofbastar from "../assets/murais.png";
import BhoramdooTemple from "../assets/BhoramdooTemple.png";
import TerracottaCraft from "../assets/TerracottaCraft.png";
const FeaturedHeritage = () => {
  const featuredItems ="relative h-[200px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-md";
  const featuredButtons = " absolute bottom-0 left-0 font-bold text-[18px] w-full p-[14px] border-none text-white hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition duration-300";
  return (
    <div className = "FeaturedHeritage">
    <div className="flex items-center gap-3 my-6">
  <h2 className="text-[#8b3a2b] text-2xl  ml-8 font-serif -mt-3 font-semibold whitespace-nowrap">
    Featured Heritage
  </h2>
  <div className="flex-1 h-0.5 mr-8 -mt-3 bg-[#bc9b95]"></div>
</div>
<div className="grid grid-cols-4 gap-5 p-8">
<section className ={featuredItems} style ={{ backgroundImage: `url(${DussehraFestivals})`}}>
  <button className={`${featuredButtons} bg-[#0e531d]`}>Dussehra Festivals</button>
  </section>
<section className ={featuredItems} style ={{ backgroundImage: `url(${Muraisofbastar})`}}>
  <button className={`${featuredButtons} bg-[#8b1d14]`}>Murias of Bastar</button>
  </section>
<section className ={featuredItems} style ={{ backgroundImage: `url(${BhoramdooTemple})`}}>
  <button className={`${featuredButtons} bg-[#B38728]`}>Bhoramdoo Temple</button>
  </section>
<section className ={featuredItems} style ={{ backgroundImage: `url(${TerracottaCraft})`}}>
  <button className={`${featuredButtons} bg-[#8b3a2b]`}>Terracotta Craft</button>
  </section>
  </div>
</div>

  );
};
export default FeaturedHeritage;
