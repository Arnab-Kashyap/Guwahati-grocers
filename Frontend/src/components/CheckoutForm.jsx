import { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/api";
import confetti from "canvas-confetti";

const CheckoutForm = () => {
  const {
    cart,
    showCheckoutForm,
    setShowCheckoutForm,
    showOrderConfirmation,
    orderDetails,
    calculateTotal,
    handleOrderPlaced,
    handleCloseOrderConfirmation,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
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

    const orderData = {
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: 1,
      })),
      totalAmount: parseFloat(calculateTotal()),
      customerName,
      customerPhone: phoneNumber,
      deliveryAddress: address,
    };

    await placeOrder(orderData);

    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    handleOrderPlaced({
      customerName,
      address,
      phoneNumber,
      paymentMethod,
      total: calculateTotal(),
    });

    setCustomerName("");
    setAddress("");
    setPhoneNumber("");
    setPaymentMethod("card");
  };

  if (showOrderConfirmation && orderDetails) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-zoom-in">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Order Placed! 🎉</h2>
          <p className="text-lg mb-6 text-gray-800">
            Thank you, <strong>{orderDetails.customerName}</strong>! Your order
            has been successfully placed and will be delivered to:
          </p>
          <p className="mb-4 italic text-gray-600 whitespace-pre-wrap">
            {orderDetails.address}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Payment Method:{" "}
            <strong>{orderDetails.paymentMethod.toUpperCase()}</strong>
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            Total: ₹{orderDetails.total}
          </p>
          <button
            onClick={handleCloseOrderConfirmation}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (!showCheckoutForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-slide-in-right relative">
        <button
          onClick={() => setShowCheckoutForm(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 hover:scale-110"
          aria-label="Close checkout"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Complete Your Order
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

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="flex flex-wrap gap-3">
              {["card", "upi", "cod"].map((method) => (
                <label
                  key={method}
                  className={`cursor-pointer flex-1 px-4 py-2 border rounded-lg text-center select-none transition-colors duration-200 ${
                    paymentMethod === method
                      ? "bg-green-100 border-blue-500 font-semibold"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="hidden"
                  />
                  {method === "card" && "Card"}
                  {method === "upi" && "UPI"}
                  {method === "cod" && "Cash on Delivery"}
                </label>
              ))}
            </div>
          </div>

          {formError && (
            <p className="text-red-500 text-sm text-center">{formError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            Place Order (₹{calculateTotal()})
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;