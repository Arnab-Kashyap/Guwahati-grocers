import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/api";
import confetti from "canvas-confetti";
import { CreditCard, Smartphone, Truck, CheckCircle } from "lucide-react";

const Payment = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, calculateTotal, handleOrderPlaced } = useCart();
  const orderInfo = location.state;

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    if (paymentMethod === "card") {
      if (!cardNumber || !cardName || !expiry || !cvv) {
        setError("Please fill in all card details.");
        return;
      }
    }

    if (paymentMethod === "upi") {
      if (!upiId) {
        setError("Please enter your UPI ID.");
        return;
      }
    }

    const orderData = {
      items: cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: 1,
      })),
      totalAmount: parseFloat(calculateTotal()),
      customerName: orderInfo.customerName,
      customerPhone: orderInfo.phoneNumber,
      deliveryAddress: orderInfo.address,
    };

    await placeOrder(orderData);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setOrderPlaced(true);
    handleOrderPlaced({
      customerName: orderInfo.customerName,
      address: orderInfo.address,
      phoneNumber: orderInfo.phoneNumber,
      paymentMethod,
      total: calculateTotal(),
    });
  };

  if (orderPlaced) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className={`w-full max-w-md rounded-2xl p-10 text-center shadow-xl ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">Order Placed!</h2>
          <p className={`text-base mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Thank you, <strong>{orderInfo.customerName}</strong>!
          </p>
          <p className={`text-sm mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Your order of <strong>₹{calculateTotal()}</strong> will be delivered to your address.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen px-4 py-10 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Complete Payment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`rounded-2xl p-6 shadow-md mb-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                Select Payment Method
              </h2>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "card"
                      ? "border-blue-600 bg-blue-50"
                      : isDarkMode
                      ? "border-gray-600 bg-gray-700"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <CreditCard className={`h-6 w-6 ${paymentMethod === "card" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-500"}`} />
                  <span className={`text-sm font-semibold ${paymentMethod === "card" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Card</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "upi"
                      ? "border-blue-600 bg-blue-50"
                      : isDarkMode
                      ? "border-gray-600 bg-gray-700"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <Smartphone className={`h-6 w-6 ${paymentMethod === "upi" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-500"}`} />
                  <span className={`text-sm font-semibold ${paymentMethod === "upi" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-600"}`}>UPI</span>
                </button>

                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "cod"
                      ? "border-blue-600 bg-blue-50"
                      : isDarkMode
                      ? "border-gray-600 bg-gray-700"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <Truck className={`h-6 w-6 ${paymentMethod === "cod" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-500"}`} />
                  <span className={`text-sm font-semibold ${paymentMethod === "cod" ? "text-blue-600" : isDarkMode ? "text-gray-300" : "text-gray-600"}`}>COD</span>
                </button>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                {paymentMethod === "card" && (
                  <>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={19}
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name on card"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          maxLength={5}
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="•••"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          maxLength={3}
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                        />
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === "upi" && (
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      UPI ID
                    </label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                    />
                  </div>
                )}

                {paymentMethod === "cod" && (
                  <div className={`rounded-xl p-4 border ${isDarkMode ? "bg-gray-700 border-gray-600" : "bg-green-50 border-green-200"}`}>
                    <p className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-green-700"}`}>
                      Pay when your order arrives at your doorstep. No advance payment needed!
                    </p>
                  </div>
                )}

                {error && (
                  <p className="text-red-500 text-xs text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {paymentMethod === "cod" ? "Place Order" : `Pay ₹${calculateTotal()}`}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className={`rounded-2xl p-6 shadow-md ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                Order Summary
              </h2>
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex justify-between items-center">
                    <span className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{item.name}</span>
                    <span className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>₹{item.price}</span>
                  </div>
                ))}
              </div>
              <div className={`border-t pt-3 ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>Total</span>
                  <span className="font-bold text-blue-600 text-lg">₹{calculateTotal()}</span>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Delivering to</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{orderInfo?.customerName}</p>
                <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{orderInfo?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;