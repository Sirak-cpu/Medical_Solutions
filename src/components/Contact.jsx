import React from "react";
import officeImg from "/src/assets/office top.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-16 px-6 md:px-16 rounded-2xl shadow-lg max-w-6xl mx-auto my-16"
    >
      {/* Left: Office Image */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0">
        <img
          src={officeImg}
          alt="Our Office"
          className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Right: Contact Info */}
      <div className="md:w-1/2 w-full md:pl-12 space-y-12">
        <h2 className="text-4xl font-bold text-blue-700">Contact Us</h2>

        <div className="space-y-8 text-gray-800 text-center md:text-left text-lg">
          <p className="flex items-center gap-6">
            <span className="font-semibold">📞 Phone:</span> +251 911 123 456
          </p>
          <p className="flex items-center gap-6">
            <span className="font-semibold">📧 Email:</span>{" "}
            info@medicalequipments.com
          </p>
          <p className="flex items-center gap-6">
            <span className="font-semibold">📍 Address:</span> Bole, Addis
            Ababa, Ethiopia
          </p>
        </div>
      </div>
    </section>
  );
}
