import { useState } from "react";
import { ShoppingCart, Menu, Search, Moon, Sun, User, LogOut, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = ({ searchQuery, setSearchQuery, isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const { cart, setIsCartOpen } = useCart();
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header
      className={`shadow-sm sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800/95" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-md transition-colors duration-300 lg:hidden ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
            Guwahati Grocers
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className={`px-4 py-2 rounded-md border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700 text-white placeholder-gray-300"
                  : "border-gray-300 bg-gray-50 text-black placeholder-gray-500"
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            <Search
              className={`absolute right-3 top-2.5 h-5 w-5 ${
                isDarkMode ? "text-gray-300" : "text-gray-400"
              }`}
            />
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-600" />
            )}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className={`p-2 rounded-md relative transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cart.length}
              </span>
            )}
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className={`text-sm font-medium hidden md:block ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                  {user.name}
                </span>
                <ChevronDown className={`h-4 w-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
              </button>

              {showProfile && (
                <div className={`absolute right-0 mt-2 w-64 rounded-2xl shadow-xl border p-4 z-50 ${
                  isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
                }`}>
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                        {user.name}
                      </p>
                      <p className={`text-xs mt-0.5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors duration-200 text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <User className="h-4 w-4" />
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;