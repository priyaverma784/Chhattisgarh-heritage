import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#7b2d26] text-white mt-0">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Digital Preservation
          </h3>
          <p className="text-sm leading-relaxed">
            Preserving and celebrating the rich tribal heritage of Chhattisgarh.
            Discover traditions, festivals, rituals, and cultural stories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <Link to="/"><li className="hover:text-yellow-400 cursor-pointer">Home</li></Link>
            <Link to="/about"><li className="hover:text-yellow-400 cursor-pointer">About</li></Link>
            <Link to="/contact"><li className="hover:text-yellow-400 cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Heritage */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Heritage
          </h3>
          <ul className="space-y-2 text-sm">
            <Link to="heritage/folkdances"><li className="hover:text-yellow-400 cursor-pointer">Folk Dance</li></Link>
            <Link to="heritage/festivals"><li className="hover:text-yellow-400 cursor-pointer">Festivals</li></Link>
            <Link to="heritage/tribes"><li className="hover:text-yellow-400 cursor-pointer">Tribes</li></Link>
            <Link to="heritage/architecture"><li className="hover:text-yellow-400 cursor-pointer">Architecture</li></Link>
            <Link to="heritage/traditionalfood"><li className="hover:text-yellow-400 cursor-pointer">Traditional Food</li></Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: heritage@cgculture.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Location: Chhattisgarh, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 text-center py-4 text-sm">
        © 2026 Digital Preservation of Chhattisgarh Tribal Heritage
      </div>

    </footer>
  );
}

export default Footer;