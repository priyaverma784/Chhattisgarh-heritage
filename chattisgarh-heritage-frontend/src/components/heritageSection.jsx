import folkDance from "../assets/folk-dance.png";
import Festivals from "../assets/festivals2.png";
import Tribes from "../assets/tribes.png";
import Architechture from "../assets/architecture.png";
import TraditionalFood from "../assets/traditionalfood.png";
import { useNavigate } from "react-router-dom";

const Heritagesection = () => {
  const navigate = useNavigate();

  const heritageItems =
    "relative h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden bg-cover bg-center bg-no-repeat shadow-md";

  const heritageButtons =
    "absolute bottom-0 left-0 font-bold text-sm md:text-[18px] w-full p-[12px] md:p-[14px] border-none text-white hover:bg-[rgba(0,0,0,0.6)] hover:text-white transition duration-300";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 md:p-8">

      <section
        className={heritageItems}
        style={{ backgroundImage: `url(${folkDance})` }}
      >
        <button
          onClick={() => navigate("/heritage/folkdances")}
          className={`${heritageButtons} bg-[#8b1d14]`}
        >
          Folk Dance
        </button>
      </section>

      <section
        className={heritageItems}
        style={{ backgroundImage: `url(${Festivals})` }}
      >
        <button
          onClick={() => navigate("/heritage/festivals")}
          className={`${heritageButtons} bg-[#0e531d]`}
        >
          Festivals
        </button>
      </section>

      <section
        className={heritageItems}
        style={{ backgroundImage: `url(${Tribes})`}}
      >
        <button
          onClick={() => navigate("/heritage/tribes")}
          className={`${heritageButtons} bg-[#5A6B2C]`}
        >
          Tribes
        </button>
      </section>

      <section
        className={heritageItems}
        style={{ backgroundImage: `url(${Architechture})` }}
      >
        <button
          onClick={() => navigate("/heritage/architecture")}
          className={`${heritageButtons} bg-[#B38728]`}
        >
          Architecture
        </button>
      </section>

      <section
        className={heritageItems}
        style={{ backgroundImage: `url(${TraditionalFood})` }}
      >
        <button
          onClick={() => navigate("/heritage/traditionalfood")}
          className={`${heritageButtons} bg-[#8b1d14]`}
        >
          Traditional Food
        </button>
      </section>

    </div>
  );
};

export default Heritagesection;