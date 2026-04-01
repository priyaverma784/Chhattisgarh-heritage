import { Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./components/Home.jsx";
import ContributeMemory from "./pages/contributeMemory.jsx";
import ExploreHeritage from "./pages/ExploreHeritage.jsx";
import NotFoundPage from "./pages/404Pages.jsx";
import HeritageCategory from "./pages/HeritageCategory.jsx";
import HeritageDetails from "./pages/HeritageDetalis.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"; 
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contributememory" element={<ContributeMemory />} />
        <Route path="/exploreheritage" element={<ExploreHeritage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/heritage/:category" element={<HeritageCategory />} />
        <Route path="/heritage/item/:id" element={<HeritageDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;