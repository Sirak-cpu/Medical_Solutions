import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { Plus, Minus, X } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Performa = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem, clearCart } =
    useCart();

  // Initialize formData without the 'order' field in state, as it's generated at submission time
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const cleanPrice = (price) => {
    if (!price) return 0;
    if (typeof price === "number") return price;
    return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = cleanPrice(item.price);
    const qty = item.quantity || 1;
    return sum + price * qty;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your performa is empty!");
      return;
    }

    if (!formData.name || !formData.email) {
      alert("Please fill in at least your name and email.");
      return;
    }

    // Format the cart items array into a single string with a newline for each item
    const itemDetails = cartItems
      .map(
        (item) =>
          `Item: ${item.name} (Qty: ${item.quantity}) - Price: $${cleanPrice(
            item.price
          ).toLocaleString()}`
      )
      .join("\n"); // This join() creates the clean list format

    // Define the parameters object to send to EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      user_message: formData.message,
      order_details: itemDetails, // Use a descriptive variable name for the template
      total_price: `$${totalPrice.toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })}`, // Optionally send the total price
    };

    emailjs
      .send(
        "service_k13tnke", //  EmailJS service ID
        "template_ng64stn", // EmailJS template ID
        templateParams, // Pass the JavaScript object
        "J9UhHrCLmE4BRTd6y" // EmailJS public key
      )
      .then(
        () => {
          alert("✅ Performa and contact details sent successfully!");
          clearCart();
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Email send error:", error);
          alert("❌ Failed to send performa. Please try again later.");
        }
      );
  };

  return (
    <div className="fixed right-0 top-0 w-full h-screen overflow-y-auto bg-black/60 p-6 border-l border-gray-200 z-50">
      <div className="flex flex-col w-2/3 bg-gray-100 rounded-2xl shadow-lg p-6 mx-auto">
        <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">
          Your Performa
        </h3>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">No items yet.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => {
              const price = cleanPrice(item.price);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 px-3">
                    <h4 className="text-gray-800 font-semibold">{item.name}</h4>
                    <p className="text-blue-600 text-sm">
                      ${price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 p-1 rounded-full hover:bg-gray-300"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 ml-3"
                  >
                    <X size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 text-right pr-4">
            <p className="text-lg font-semibold text-gray-800">
              Total: $
              {totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        )}

        {/* 📋 Contact Form */}
        {/* We use onSubmit on the form element itself */}
        <form onSubmit={handleSendEmail} className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 text-center">
            Contact Information
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name / Company"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full md:col-span-2"
            />
          </div>

          <textarea
            name="message"
            placeholder="Additional message or request..."
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded-lg w-full h-24"
          />

          <div className="flex flex-col items-center space-y-3">
            <button
              type="submit" // Set to type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Send Performa Request
            </button>

            <Link
              to="/"
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Performa;
