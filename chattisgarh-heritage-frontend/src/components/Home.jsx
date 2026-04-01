import React from 'react';
import Navbar from  './navbar.jsx';
import Herosection from './HeroSection.jsx';
import Heritagesection from './heritageSection.jsx';
import FeaturedHeritage from './FeaturedHeritage.jsx';
import Footer from "./footer.jsx";

const Home = () => {
    return (
        <div className="bg-[#F7F1E1]">
            <Navbar />
            <Herosection />
            <Heritagesection />
            <FeaturedHeritage />
            <Footer />
            
        </div>
    );
};
export default Home;