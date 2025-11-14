import aboutBg from "/src/assets/backg.jpeg";

export default function About() {
  const sections = [
    {
      title: "Our Vision",
      description:
        "We aim to revolutionize healthcare accessibility by delivering world-class medical equipment and solutions that empower hospitals, clinics, and professionals to provide better patient outcomes. Our focus is on sustainability, innovation, and trust.",
    },
    {
      title: "Our Founder",
      description:
        "Founded by passionate healthcare professionals and engineers, our leadership brings decades of experience in the medical technology industry. With a deep understanding of the challenges faced by healthcare providers, our founder envisioned a company driven by integrity and service excellence.",
    },
    {
      title: "Our Journey",
      description:
        "From humble beginnings, we have grown into a trusted name in the healthcare industry, partnering with international brands and institutions. Over the years, our journey has been defined by dedication, innovation, and unwavering commitment to customer satisfaction.",
    },
  ];

  return (
    <div
      id="about"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen rounded-4xl p-8 shadow-lg bg-white/90"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      {/* White overlay for readability */}
      <div className="absolute bg-white/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-6xl grid md:grid-cols-2 gap-12 items-center mx-auto rounded-4xl p-2 shadow-lg">
        {/* Left Column */}
        <div className="flex flex-col justify-center relative mt-15">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
            About Us
          </h1>
          <p className="text-black leading-relaxed text-lg">
            We are a forward-thinking medical solutions provider dedicated to
            empowering healthcare professionals through reliable and
            cutting-edge technologies. Our mission is to bridge the gap between
            innovation and accessibility in the medical world.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative pl-8 md:pl-10 border-l-4 border-blue-600">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed border-l-2 border-blue-300 pl-4">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
