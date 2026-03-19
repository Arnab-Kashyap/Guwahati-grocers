import { useState } from "react";
import { ShoppingCart, Search, Moon, Sun, User, LogOut, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Header = ({ searchQuery, setSearchQuery, isDarkMode, toggleDarkMode }) => {
  const { cart, setIsCartOpen } = useCart();
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <h1
          onClick={() => navigate("/")}
          className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform whitespace-nowrap"
        >
          Guwahati Grocers
        </h1>

        <div className="hidden md:flex relative">
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
          />
          <Search className={`absolute right-3 top-2.5 h-5 w-5 ${isDarkMode ? "text-gray-300" : "text-gray-400"}`} />
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className={`p-2 rounded-md md:hidden transition-all duration-300 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md transition-all duration-300 hover:scale-110 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
          >
            {isDarkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className={`p-2 rounded-md relative transition-all duration-300 hover:scale-110 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
          >
            <ShoppingCart className="h-5 w-5" />
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
                className={`flex items-center gap-1 px-2 py-1.5 rounded-xl transition-all duration-300 ${isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold text-xs">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className={`text-sm font-medium hidden md:block ${isDarkMode ? "text-white" : "text-gray-700"}`}>
                  {user.name}
                </span>
                <ChevronDown className={`h-3 w-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
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
              className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              <User className="h-4 w-4" />
              <span className="hidden md:block">Sign In</span>
            </button>
          )}
        </div>
      </div>

      {showSearch && (
        <div className={`px-4 pb-3 md:hidden ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                isDarkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-300" : "border-gray-300 bg-gray-50 text-black"
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className={`absolute right-3 top-2.5 h-5 w-5 ${isDarkMode ? "text-gray-300" : "text-gray-400"}`} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;