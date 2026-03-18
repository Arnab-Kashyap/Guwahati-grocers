import { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const {
    showCheckoutForm,
    setShowCheckoutForm,
    calculateTotal,
  } = useCart();

  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerName.trim() === "" || address.trim() === "") {
      setFormError("Please fill in your full name and address.");
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      setFormError("Please enter a valid 10-digit phone number.");
      return;
    }
    setFormError("");
    setShowCheckoutForm(false);
    navigate("/payment", {
      state: {
        customerName,
        address,
        phoneNumber,
      },
    });
  };

  if (!showCheckoutForm) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={() => setShowCheckoutForm(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          aria-label="Close checkout"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Delivery Details
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Full Name"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
            aria-label="Delivery Address"
          />

          <input
            type="tel"
            placeholder="Phone Number (10 digits)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            pattern="[0-9]{10}"
            maxLength={10}
            required
            aria-label="Phone Number"
          />

          {formError && (
            <p className="text-red-500 text-sm text-center">{formError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Continue to Payment (₹{calculateTotal()})
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;