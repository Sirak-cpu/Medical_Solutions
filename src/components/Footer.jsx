import React from "react";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaL, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-800 px-4 md:px-16 lg:px-28 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-18">
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-300 md:text-left">
            We are a team dedicated to providing high-quality medical equipment
            and solutions to our customers.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
          <ul>
            <li>
              <a href="#products" className="hover:underline text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline text-gray-300">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-white">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <FaTelegram className="h-6 w-6 text-gray-300" />
              <a
                href="https://t.me/Si_raq"
                className="hover:underline text-gray-300"
              >
                Telegram
              </a>
            </li>
            <li>
              <FaTwitter className="h-6 w-6 text-gray-300" />
              <a
                href="https://x.com/@Sirak_Embibel"
                className="hover:underline text-gray-300"
              >
                X
              </a>
            </li>
            <li>
              <FaLinkedin className="h-6 w-6 text-gray-300" />
              <a href="" className="hover:underline text-gray-300">
                Linkidin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-t border-gray-700 pt-6 text-gray-300 text-center mt-6">
        <p>@2025|Hippocratesmedical.et</p>
      </div>
    </footer>
  );
};

export default Footer;
