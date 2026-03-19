import { Routes, Route } from "react-router-dom";
import "./index.css";

import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./components/Home.jsx";
import ContributeMemory from "./pages/contributeMemory.jsx";
import ExploreHeritage from "./pages/ExploreHeritage.jsx";
import Footer from "./components/footer.jsx";
import NotFoundPage from "./pages/404Pages.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contributememory" element={<ContributeMemory />} />
        <Route path="/exploreheritage" element={<ExploreHeritage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;