import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ isDarkMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!isLogin && !name) {
      setError("Please enter your name.");
      return;
    }
    setError("");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-blue-600 to-green-500 flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <p className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-6">
            Guwahati Grocers Portal
          </p>
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Fresh Foods,<br />
            <span className="text-green-300">Track Orders,</span><br />
            Delivered Fast.
          </h1>
          <p className="text-white/80 text-lg mb-12">
            Your all-in-one hub to browse fresh products, manage your cart, and get same-day delivery — all from one place.
          </p>
          <div className="flex gap-12">
            <div>
              <p className="text-white font-bold text-2xl">36+</p>
              <p className="text-white/70 text-sm">Fresh Items</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">Live</p>
              <p className="text-white/70 text-sm">Order Tracking</p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">Fast</p>
              <p className="text-white/70 text-sm">Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full lg:w-2/5 flex flex-col justify-center px-8 lg:px-10 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-1">
              Guwahati Grocers
            </h2>
            <p className={`text-lg font-semibold mt-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {isLogin ? "Welcome back" : "Create account"}
            </p>
            <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              {isLogin ? "Sign in to order fresh groceries" : "Join us for fresh daily deliveries"}
            </p>
          </div>

          <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 font-semibold transition-colors duration-200 ${isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 font-semibold transition-colors duration-200 ${!isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-600"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-50 border-gray-300 text-black"}`}
                />
              </div>
            )}

            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-50 border-gray-300 text-black"}`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-gray-50 border-gray-300 text-black"}`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 mt-2"
            >
              {isLogin ? "Sign In →" : "Create Account →"}
            </button>
          </form>

          <p className={`text-center mt-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;