import heroImage from "../assets/herosection-banner.png";
import { Link } from "react-router-dom";

const Herosection = () => {

const HeroButtons =
"px-6.5 py-3.5 border-none rounded-lg cursor-pointer font-medium transition duration-300 text-[18px]";

return (
<section
className="hero-section h-67 w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
style={{ backgroundImage: `url(${heroImage})` }}
>

<div className="hero-overlay text-center">

<h1 className="font-serif text-white text-6xl text-shadow-lg m-9">
Discover the Soul of Chhattisgarh
</h1>

<div className="flex flex-col md:flex-row gap-5 justify-center items-center">

<Link to="/exploreheritage">
<button className={`${HeroButtons} bg-[#8b1d14] text-white hover:bg-[#a62319]`}>
Explore Heritage
</button>
</Link>

<Link to="/contributememory">
<button className={`${HeroButtons} bg-[#e3b341] text-[#333] hover:bg-[#f2c252]`}>
Contribute Memory
</button>
</Link>

</div>

</div>

</section>
);
};

export default Herosection;