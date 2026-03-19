import React, {useState} from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom move one page to another page
import mapLogo from "../assets/maps-logo.png";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false); // Controls dropdown visibility
    const navItems ="hover:text-[#facc15] transition duration-300 cursor-pointer";
    return (
     <nav className = "bg-[#8b3a2b] text-white px-10 py-3 h-15.5">
        <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3 -ml-6.25 mb-7.5">
                <div className = "w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center text-black  font-bold"> 
                    <img src = {mapLogo} alt = "Map" className ="w-6 h-6"></img>
                </div>

                <div className="logo-text">
                    <h1 className = "text-[15px]">Digital Preservation</h1>
                    <p>Chhattisgarh Tribal Heritage</p>
                </div>
            </div>

            <ul className="flex gap-10 list-none ml-160 mb-9 text-[18px] font-medium ">
                <li className={navItems}>Home</li>
                <li className={navItems}>About</li>
                <li className={navItems}>Blog</li>
                <li className={navItems}>Contact</li>
            </ul>

            {!user ? (
              // if not loggd in then show login and signup button
              <div className="flex gap-4">
            
            <Link to ="/login">
            <button className="bg-[#facc15] border-transparent px-4 py-2 rounded-lg font-bold cursor-pointer  mb-9 hover:bg-[#fde047] transition-all duration-300"> Log In</button>
            </Link>

            <Link to ="/signup">
            <button className ="bg-[#8b3a2b] border-2 border-[#facc15] text-[#facc15] px-2.5 py-1.5 rounded-lg font-bold cursor-pointer mb-9 hover:border-[#facc15] transition-all duration-300">Sign Up</button>
            </Link>

            </div>
            ):(
               // if logged in then show user name and dropdown menu
               <div className="relative">
                {/* profile circle */}
                <div 
                onClick={() => setOpen(!open)}
                className ="w-10 h-10 bg-[#facc15] text-black rounded-full flex items-center justify-center font-bold cursor-pointer mb-9"
                >P</div>

                {/* dropdown menu */}
                {open && (
                    <div className =" absolute right-0 mt-3 w-48 bg-white text-black rounded-lg shadow-lg p-3">
                        <Link
                        to="/profile"
                        className ="block py-2 hover:bg-gray-100 rounded-md px-2"
                        >View Profile</Link>
                        <button
                        onClick={() => setUser(null)}
                        className ="block w-full text-left py-2 hover:bg-gray-100 rounded-md px-2"
                        >Logout</button>
                    </div>
                )}
               </div>
            )}
        </div>
     </nav>
    );
};

export default Navbar;