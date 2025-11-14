export default function OurGallery() {
  const galleryItems = [
    {
      id: 1,
      image: "/src/assets/bed.jpeg",
      description: "Hospital Bed Setup",
    },
    {
      id: 2,
      image: "/src/assets/ct.jpg",
      description: "CT Scan Machine installed at Ayra Hospital",
    },
    {
      id: 3,
      image: "/src/assets/dental.jpeg",
      description: "Dental procedure bed Setup",
    },
    {
      id: 4,
      image: "/src/assets/dental.jpeg",
      description: "Dental bed in place",
    },
    {
      id: 5,
      image: "/src/assets/ecg.jpg",
      description: "while installing patient monitoring system",
    },
    {
      id: 6,
      image: "/src/assets/staff.jpeg",
      description: "Our dedicated technical staff at work",
    },
    {
      id: 7,
      image: "/src/assets/technical.jpeg",
      description: "ECO Machine Setup",
    },
    {
      id: 8,
      image: "/src/assets/repair.jpeg",
      description: "Our technician repairing medical equipment",
    },
  ];

  return (
    <div id="gallery" className=" bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Our Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.description}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
              <p className="text-white text-lg font-medium text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
