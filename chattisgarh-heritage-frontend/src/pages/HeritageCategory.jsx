import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import tribalBg from "../assets/tribal-bg.png";

const HeritageCategory = () => {

  const { category } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/heritage/${category}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div
      className="min-h-screen py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${tribalBg})` }}
    >
      {/* Center Parchment Container */}
      <div className="max-w-6xl mx-auto bg-[#f4efe6]/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-[#e6d3b3]">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#8b1d14] mb-14 text-center tracking-wide capitalize">
          {category}
        </h1>

        {/* Grid */}
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            {data.map((item) => (

              <div
                key={item._id}
                onClick={() => navigate(`/heritage/item/${item._id}`)}
                className="group cursor-pointer relative bg-[#fff8f0] rounded-2xl shadow-lg overflow-hidden border border-[#e6d3b3] hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={`http://localhost:8000/${item.image}`}
                    alt={item.title}
                    className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Decorative Strip */}
                <div className="h-2 bg-gradient-to-r from-[#8b1d14] via-[#c2410c] to-[#8b1d14]"></div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-xl font-bold text-[#8b1d14] tracking-wide">
                    {item.title}
                  </h2>

                  {/* Underline */}
                  <div className="mt-2 flex justify-center">
                    <div className="w-16 h-[2px] bg-[#8b1d14]"></div>
                  </div>

                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-[#8b1d14]/10 to-transparent"></div>

              </div>

            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeritageCategory;