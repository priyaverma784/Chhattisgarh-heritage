import tribalBg from "../assets/tribal-bg.png";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${tribalBg})` }}
    >
      
      <div className="max-w-5xl mx-auto bg-[#f4efe6]/95 backdrop-blur-sm p-10 md:p-14 rounded-2xl shadow-2xl border border-[#e6d3b3]">

        <h1 className="text-5xl font-bold text-center text-[#8b1d14] mb-12 tracking-wide">
          About Us
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#8b1d14] mb-4">
            About Chhattisgarh
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            Chhattisgarh, often called the “Heart of India,” is a land where nature, culture, and tradition blend in perfect harmony. Surrounded by lush forests, flowing rivers, and breathtaking waterfalls like Chitrakote, the state reflects a serene and untouched beauty. It is home to vibrant tribal communities such as the Gond, Baiga, and Muria, whose rich traditions, colorful festivals, and soulful folk dances like Panthi and Raut Nacha bring life to its cultural identity. From ancient temples and archaeological treasures of Sirpur to the simplicity of its traditional food like Fara and Chila, Chhattisgarh carries a timeless charm. It is not just a place, but an experience of heritage, simplicity, and natural elegance that quietly captivates every heart.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#8b1d14] mb-4">
            Why this website?
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            This website is created to preserve, promote, and spread awareness about the rich and diverse heritage of Chhattisgarh. Despite its deep cultural roots, vibrant tribal traditions, and historical significance, much of its beauty remains unexplored and underrepresented. Through this platform, we aim to showcase the unique identity of Chhattisgarh—its ancient temples, traditional dances, indigenous tribes, local cuisines, and natural wonders—in a simple and engaging way. This project not only serves as an informative guide for visitors but also as an effort to keep our cultural heritage alive for future generations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#8b1d14] mb-6">
            What We Cover
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-800">

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                🏛️ District-wise Heritage
              </h3>
              <p>
                Detailed information about important places, monuments, and history of each district.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                🪶 Tribal Culture
              </h3>
              <p>
                Insights into major tribes like Gond, Baiga, Muria, and their unique lifestyles, traditions, and beliefs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                💃 Folk Dance & Festivals
              </h3>
              <p>
                Exploration of traditional dances such as Panthi and Raut Nacha along with regional festivals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                🍛 Traditional Food
              </h3>
              <p>
                Authentic dishes like Fara, Chila, Angakar Roti, and their preparation methods.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                🌿 Nature & Tourism
              </h3>
              <p>
                Famous waterfalls, wildlife sanctuaries, forests, and must-visit tourist destinations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#8b1d14]">
                🛕 Art, Craft & Architecture
              </h3>
              <p>
                Ancient temples, sculptures, handicrafts, and artistic heritage of the state.
              </p>
            </div>

          </div>
        </section>

        <div className="flex justify-center mt-12 gap-2">
          <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
          <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
          <div className="w-2 h-2 bg-[#8b1d14] rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default About;