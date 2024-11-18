import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Tools from "./Pages/Tools";
// import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Consultation from "./components/UI/Consulatation/Consultation";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="Layout">
      <ToastContainer />
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Consultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
