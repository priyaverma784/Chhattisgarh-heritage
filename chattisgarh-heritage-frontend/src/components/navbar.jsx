import React, { useState } from "react";
import { Link } from "react-router-dom";
import mapLogo from "../assets/maps-logo.png";

const Navbar = () => {
  const [user] = useState(localStorage.getItem("loggedInUser"));
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems =
    "hover:text-[#facc15] transition duration-300 cursor-pointer";

  return (
    <nav className="bg-[#8b3a2b] text-white px-4 md:px-10 py-3">
      <div className="flex items-center justify-between">

        {/* LEFT (Logo) */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center">
            <img src={mapLogo} alt="Map" className="w-6 h-6" />
          </div>

          <div className="logo-text text-sm md:text-base">
            <h1 className="font-semibold">Digital Preservation</h1>
            <p className="text-xs md:text-sm">
              Chhattisgarh Tribal Heritage
            </p>
          </div>
        </div>

        {/* HAMBURGER BUTTON (Mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* RIGHT SIDE (Desktop Menu) */}
        <div className="hidden md:flex items-center gap-10">

          {/* Menu */}
          <ul className="flex gap-10 text-[18px] font-medium">
            <Link to="/"><li className={navItems}>Home</li></Link>
            <Link to="/about"><li className={navItems}>About</li></Link>
            <Link to="/contact"><li className={navItems}>Contact</li></Link>
          </ul>

          {/* Auth */}
          {!user || user === "" ? (
            <div className="flex gap-4">
              <Link to="/login">
                <button className="bg-[#facc15] px-4 py-2 rounded-lg font-bold hover:bg-[#fde047]">
                  Log In
                </button>
              </Link>

              <Link to="/signup">
                <button className="border-2 border-[#facc15] text-[#facc15] px-3 py-2 rounded-lg font-bold hover:border-[#fde047]">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/profile">
              <div className="w-10 h-10 bg-[#facc15] text-black rounded-full flex items-center justify-center font-bold">
                {user.charAt(0).toUpperCase()}
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            <div className={navItems}>Home</div>
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <div className={navItems}>About</div>
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <div className={navItems}>Contact</div>
          </Link>

          {!user || user === "" ? (
            <>
              <Link to="/login">
                <button className="bg-[#facc15] px-4 py-2 rounded-lg font-bold w-full">
                  Log In
                </button>
              </Link>

              <Link to="/signup">
                <button className="border-2 border-[#facc15] text-[#facc15] px-3 py-2 rounded-lg font-bold w-full">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <div className="w-10 h-10 bg-[#facc15] text-black rounded-full flex items-center justify-center font-bold">
                {user.charAt(0).toUpperCase()}
              </div>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;