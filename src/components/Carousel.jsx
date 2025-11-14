import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import local images from your src/assets folder
import img1 from "/src/assets/show2.jpg";
import img2 from "/src/assets/show3.jpg";
import img3 from "/src/assets/show4.jpg";
import img4 from "/src/assets/show5.jpg";
import img5 from "/src/assets/show6.jpg";

export default function Carousel() {
  const images = [img1, img2, img3, img4, img5];
  const paragraphs = [
    "Discover the latest in advanced imaging technology.",
    "Experience precision and clarity like never before.",
    "Innovative solutions for modern medical equipment.",
    "Reliable and efficient systems designed for you.",
    "Transforming healthcare with cutting-edge tools.",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full shrink-0">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full object-cover h-96 sm:h-80 md:h-120"
            />
            {/* Paragraph overlay */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-center p-3 rounded-md max-w-xl">
              {paragraphs[index]}
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Products Button */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <a
          href="#products"
          className="bg-blue-300 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-lg transition"
        >
          Products
        </a>
      </div>
    </div>
  );
}
