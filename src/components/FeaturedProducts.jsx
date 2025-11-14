import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useCart } from "../hooks/useCart";

export default function FeaturedProducts() {
  const allProducts = [
    {
      id: 1,
      name: "Mobile OR Light",
      price: "$4,200",
      description:
        "LED-based surgical light ensuring consistent brightness and long lifespan, suitable for operation theatres.",
      image: "/src/assets/2_mobile_or_light.jpg",
    },
    {
      id: 2,
      name: "Ultrasound",
      price: "$1,250",
      description:
        "Compact, portable ultrasound machine for hospitals and clinics.",
      image: "/src/assets/3_ultrasound.jpg",
    },
    {
      id: 3,
      name: "CBC Analyzer",
      price: "$7,800",
      description:
        "CBC analyzer for hospitals and clinics, accurate and reliable blood test results.",
      image: "/src/assets/5_cbc.jpg",
    },
    {
      id: 4,
      name: "Color Ultrasound",
      price: "$900",
      description:
        "Ultrasound machine with color display for accurate diagnosis and treatment.",
      image: "/src/assets/6_ultrasound.png",
    },
    {
      id: 5,
      name: "Oxygen Concentrator",
      price: "$2,100",
      description:
        "Oxygen concentrator for hospitals and clinics, providing safe and efficient oxygen delivery.",
      image: "/src/assets/7_oxygen_concentrator.jpg",
    },
    {
      id: 6,
      name: "Digital Shaker",
      price: "$3,500",
      description:
        "Digital shaker for hospitals and clinics, ensuring accurate and consistent results throught your tests.",
      image: "/src/assets/8_digital_shaker.jpeg",
    },
    {
      id: 7,
      name: "Chemistry Machine",
      price: "$1,000",
      description:
        "Accurate and reliable infusion pump providing precise fluid management for critical care environments.",
      image: "/src/assets/10_chemistry_machine.jpg",
    },
    {
      id: 8,
      name: "Ceiling Or Light",
      price: "$6,500",
      description:
        "Ceiling-mounted surgical light ensuring consistent brightness and long lifespan.",
      image: "/src/assets/11_ceiling_or_light.jpeg",
    },
    {
      id: 9,
      name: "Suction Machine",
      price: "$6,500",
      description:
        "Suction machine for hospitals and clinics, providing safe and efficient suction.",
      image: "/src/assets/12_suction_machine.png",
    },
    {
      id: 10,
      name: "Spirometer",
      price: "$6,500",
      description:
        "Spirometer for hospitals and clinics, providing accurate and reliable oxygen measurement.",
      image: "/src/assets/13_spirometer.jpg",
    },
    {
      id: 11,
      name: "Ultrasound Machine",
      price: "$6,500",
      description:
        "Ultrasound with the state of the art technology for hospitals and clinics.",
      image: "/src/assets/14_ultrasound.jpeg",
    },
    {
      id: 12,
      name: "OR Table",
      price: "$6,500",
      description:
        "OR Table for hospitals providing a safe and comfortable environment for patients and the surgical team.",
      image: "/src/assets/16_or_table_.jpg",
    },
    {
      id: 13,
      name: "Infant Warmer",
      price: "$6,500",
      description:
        "Infant warmer ensuring warmth and comfort for newborns and infants and adjustable.",
      image: "/src/assets/17_infant_warmer.jpg",
    },
    {
      id: 14,
      name: "Patient Monitor",
      price: "$8,500",
      description:
        "Patient monitor providing real-time monitoring and care for patients in critical conditions.",
      image: "/src/assets/18_patient_monitor.webp",
    },
    {
      id: 15,
      name: "Nebulizer",
      price: "$7,500",
      description:
        "Nebulizer providiing non-invasive respiratory therapy for patients with respiratory conditions.",
      image: "/src/assets/19_nebulizer.webp",
    },
    {
      id: 16,
      name: "Patient Bed",
      price: "$9,500",
      description:
        "Patient bed providing comfort and support for patients in critical conditions and adjustable.",
      image: "/src/assets/20_patient_bed.jpg",
    },
    {
      id: 17,
      name: "Fetal Monitor",
      price: "$7,500",
      description:
        "Fetal monitor providing real-time monitoring and care for fetal health and development.",
      image: "/src/assets/22_fetal_monitor.jpg",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSeeMore = () => {
    setVisibleCount((prev) =>
      prev + 8 > allProducts.length ? allProducts.length : prev + 8
    );
  };

  const handleSeeLess = () => {
    setVisibleCount(8);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageClick = (product) => setSelectedProduct(product);
  const handleClose = () => setSelectedProduct(null);
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-50 py-6 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Featured Products
      </h1>

      {/* Product Grid */}
      <div
        id="products"
        className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {allProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover cursor-pointer"
              onClick={() => handleImageClick(product)}
            />

            {/* + Button */}
            <button
              onClick={() => addToCart(product)}
              className="absolute top-3 right-3 bg-blue-600 text-white rounded-full p-1.5 group-hover:bg-green-400 transition"
              title="Add to Performa"
            >
              <Plus size={20} />
            </button>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-blue-700 font-medium mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="text-center mt-10 space-x-4">
        {visibleCount < allProducts.length && (
          <button
            onClick={handleSeeMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            See More
          </button>
        )}
        {visibleCount > 8 && (
          <button
            onClick={handleSeeLess}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition"
          >
            See Less
          </button>
        )}
      </div>

      {/* Product Detail Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-sky-200 rounded-2xl max-w-4xl w-full mx-4 p-6 relative grid md:grid-cols-2 gap-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            >
              <X size={24} />
            </button>

            {/* Left Side - Details */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="rounded-xl object-cover w-full h-80"
            />

            {/* Right Side - Image */}

            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <p className="text-lg font-semibold text-gray-800 mb-6">
                Price: {selectedProduct.price}
              </p>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center justify-center mx-auto"
              >
                <Plus size={18} className="mr-1" /> Add to Performa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
