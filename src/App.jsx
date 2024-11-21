import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import LazyLoader from "./components/LazyLoader/LazyLoader";

const Home = lazy(() => import("./Pages/Home"));
const Programs = lazy(() => import("./Pages/Programs"));
const Tools = lazy(() => import("./Pages/Tools"));
const Consultation = lazy(() => import("./Pages/Contact"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));

function App() {
  const location = useLocation().pathname;

  const isAuthPage = location === "/login" || location === "/register";

  return (
    <Suspense fallback={<LazyLoader />}>
      <div className="Layout">
        <ToastContainer />

        {!isAuthPage && <Navbar />}

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

        {!isAuthPage && <Footer />}
      </div>
    </Suspense>
  );
}

export default App;
