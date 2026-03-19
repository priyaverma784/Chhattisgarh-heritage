import React from "react";

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
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Heritage */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Heritage
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Folk Dance</li>
            <li>Festivals</li>
            <li>Tribes</li>
            <li>Architecture</li>
            <li>Rituals</li>
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