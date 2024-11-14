import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Tools from "./Pages/Tools";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="Layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
