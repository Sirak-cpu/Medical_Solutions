import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

import { ShoppingCart } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Smooth scroll handler
  const handleScroll = (id) => {
    navigate("/"); // go to home page first
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-800 sticky top-0 z-50 shadow-md">
      <div className="h-16 flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="./src/assets/Logo.jpeg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white text-xl font-semibold">
            Medical Solutions
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 items-center text-white">
          <button
            onClick={() => handleScroll("products")}
            className="hover:text-blue-300"
          >
            Products
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-blue-300"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("gallery")}
            className="hover:text-blue-300"
          >
            Gallery
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-blue-300"
          >
            Contact
          </button>
          <Link to="/performa" className="relative">
            <ShoppingCart size={24} />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-semibold rounded-full px-2">
                {totalCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden text-3xl text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden bg-gray-100 pb-6`}
      >
        <button
          onClick={() => handleScroll("products")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Products
        </button>
        <button
          onClick={() => handleScroll("about")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("gallery")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Gallery
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Contact
        </button>

        <Link to="/performa" className="relative">
          <ShoppingCart size={24} />
          {totalCount > 0 && (
            <span className="absolute -top-2 right-8 bg-red-500 text-white text-sm font-semibold rounded-full px-2">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
