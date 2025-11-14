import React from "react";
export default function OurServices() {
  const services = [
    {
      title: "Medical Empowerment",
      image: "/src/assets/empower.png",
      description:
        "We empower healthcare providers with advanced medical technologies, ensuring reliable access to equipment that enhances patient care and diagnostic precision.",
    },
    {
      title: "Complete Solutions",
      image: "/src/assets/Solutions.png",
      description:
        "From equipment selection to installation, we deliver comprehensive solutions that simplify procurement, improve efficiency, and maximize the lifespan of your investment.",
    },
    {
      title: "After Sales Services",
      image: "/src/assets/Services.png",
      description:
        "Our expert technicians provide ongoing maintenance, calibration, and support, ensuring your systems continue to operate at optimal performance after installation.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Our Services
      </h1>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-15 h-15 object-cover rounded-xl mb-5"
            />
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              {service.title}
            </h2>
            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
