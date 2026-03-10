import { ShoppingCart, Menu, Search, Moon, Sun } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = ({ searchQuery, setSearchQuery, isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const { cart, setIsCartOpen } = useCart();

  return (
    <header
      className={`shadow-sm sticky top-0 z-40 backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800/95" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
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

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
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

          {/* Dark Mode Toggle */}
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

          {/* Cart Button */}
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
        </div>
      </div>
    </header>
  );
};

export default Header;