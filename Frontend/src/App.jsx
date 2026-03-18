import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import CheckoutForm from "./components/CheckoutForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Payment from "./pages/Payment";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <CartProvider>
        <div
          className={`min-h-screen font-sans transition-colors duration-300 ${
            isDarkMode ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <Routes>
            <Route
              path="/login"
              element={<Login isDarkMode={isDarkMode} />}
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  <Payment isDarkMode={isDarkMode} />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  <Home searchQuery={searchQuery} isDarkMode={isDarkMode} />
                  <Footer />
                  <CartSidebar isDarkMode={isDarkMode} />
                  <CheckoutForm />
                  {showBackToTop && (
                    <button
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="fixed bottom-8 right-8 p-3 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40"
                      style={{ backgroundColor: "rgba(96,165,250,1)" }}
                      aria-label="Back to top"
                    >
                      ↑
                    </button>
                  )}
                </>
              }
            />
          </Routes>

          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slide-in-right {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            @keyframes zoom-in {
              from { opacity: 0; transform: scale(0.8); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in { animation: fade-in 0.8s ease-out; }
            .animate-slide-in-right { animation: slide-in-right 0.3s ease-out; }
            .animate-zoom-in { animation: zoom-in 0.3s ease-out; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;