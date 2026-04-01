import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HeritageDetails = () => {

  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/heritage/item/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!item) return null; 

  return (
    <div className="bg-[#f4efe6] min-h-screen py-16 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#8b1d14] mb-8 text-center">
          {item.title}
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed text-justify">

          <img
            src={`http://localhost:8000/${item.image}`}
            alt={item.title}
            className="w-[320px] md:w-[380px] float-right ml-6 mb-4 rounded-xl shadow-lg hover:scale-105 transition duration-500"
          />

          <p className="whitespace-pre-line">
            {item.description}
          </p>

          <div className="clear-both"></div>

          <div className="flex justify-center mt-10 gap-2">
            <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
            <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
            <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HeritageDetails;