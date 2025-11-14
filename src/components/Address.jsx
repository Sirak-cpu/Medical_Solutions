import React from "react";

export default function Address() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-16 px-8 md:px-16 rounded-2xl shadow-lg max-w-6xl mx-auto my-16">
      {/* Left side: text content */}
      <div className="md:w-1/2 space-y-6 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-blue-700">
          Perfect Equipment With Us
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We provide advanced medical equipment solutions to hospitals and
          clinics. Our mission is to empower healthcare facilities with reliable
          and affordable technology, ensuring patient care with excellence.
        </p>
      </div>

      {/* Right side: Google Map */}
      <div className="md:w-1/2 w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.557225252194!2d38.757760!3d9.010793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b54e29f4a3%3A0x9e3a5ad56d3723db!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
