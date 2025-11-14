// ✅ App.jsx;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slides from "./components/Carousel";
import OurServices from "./components/OurServices";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import OurGallery from "./components/OurGallery";
import Address from "./components/Address";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Performa from "./components/Performa";
import { CartProvider } from "./context/CartContext";

// ✅ HomePage includes all main sections
function HomePage() {
  return (
    <div className="scroll-smooth">
      <Slides />
      <OurServices />
      <FeaturedProducts />
      <About />
      <OurGallery />
      <Address />
      <Contact />
      <Footer />
    </div>
  );
}

// ✅ Main App
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* Navbar is always visible */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/performa" element={<Performa />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
