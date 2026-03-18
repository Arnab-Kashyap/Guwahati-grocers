import { X, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartSidebar = ({ isDarkMode }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    handleProceedToCheckout,
  } = useCart();

  if (!isCartOpen) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-50">
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md shadow-2xl animate-slide-in-right transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`p-4 flex justify-between items-center border-b ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2
            className={`text-xl font-semibold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Shopping Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
          {cart.length === 0 ? (
            <div
              className={`text-center flex flex-col items-center space-y-4 mt-16 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <div className="text-6xl">🛒</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-sm">Add some products to get started</p>
              </div>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item._id}
                  className={`flex items-center space-x-4 p-3 rounded-lg ${
                    isDarkMode ? "bg-gray-700/50" : "bg-gray-50"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/64x64/E0F2F7/000000?text=${encodeURIComponent(item.name)}`;
                    }}
                  />
                  <div className="flex-1">
                    <h3
                      className={`font-semibold text-sm ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isDarkMode ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"
                        }`}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className={`text-sm font-semibold w-6 text-center ${isDarkMode ? "text-white" : "text-black"}`}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isDarkMode ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"
                        }`}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-600 transition-all duration-300 hover:scale-110 p-1"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}

              <div
                className={`border-t pt-4 mt-4 ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div
                  className={`flex justify-between text-xl font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <span>Total:</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;