import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBasket, Zap } from "lucide-react";
import { loginUser, registerUser } from "../api/api";

const Login = ({ isDarkMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    if (isLogin) {
      const data = await loginUser({ email, password });
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } else {
      const data = await registerUser({ name, email, password });
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-blue-700 via-blue-500 to-green-500 flex-col justify-between px-16 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-white/15 p-2 rounded-xl border border-white/20">
            <ShoppingBasket className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">Guwahati Grocers</p>
            <p className="text-white/50 text-xs mt-0.5">Grocery Store</p>
          </div>
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Fresh &<br />
            <span className="text-green-300">Organic Foods</span><br />
            Delivered.
          </h1>
          <p className="text-white/75 text-base mb-10 leading-relaxed max-w-md">
            Your all-in-one hub for fresh groceries, same-day delivery, and premium quality products.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-xl px-5 py-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <ShoppingBasket className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Fresh Products</p>
                <p className="text-white/50 text-xs mt-0.5">Browse 36+ fresh items daily</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-xl px-5 py-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Same Day Delivery</p>
                <p className="text-white/50 text-xs mt-0.5">Order before 6pm for same day delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-white/40 text-xs">© 2026 Guwahati Grocers. All rights reserved.</p>
        </div>
      </div>

      <div className={`w-full lg:w-2/5 flex flex-col justify-center items-center px-8 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <div className={`w-full max-w-md rounded-2xl p-10 ${isDarkMode ? "bg-gray-800 shadow-2xl" : "shadow-xl border border-gray-100 bg-white"}`}>
          <div className="mb-8">
            <p className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {isLogin ? "Welcome back" : "Create account"}
            </p>
            <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
              {isLogin ? "Sign in to order fresh groceries" : "Join us for fresh daily deliveries"}
            </p>
          </div>

          <div className={`flex rounded-xl overflow-hidden border mb-6 ${isDarkMode ? "border-gray-600" : "border-gray-200"}`}>
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors duration-200 ${isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-700 text-gray-400" : "bg-white text-gray-400"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors duration-200 ${!isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-700 text-gray-400" : "bg-white text-gray-400"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                />
              </div>
            )}

            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className={`block text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-400"}`}>
                  Password
                </label>
                {isLogin && (
                  <button type="button" className="text-xs text-blue-600 hover:underline font-medium">
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 mt-2"
            >
              {isLogin ? "Sign In →" : "Create Account →"}
            </button>
          </form>

          <p className={`text-center mt-6 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold ml-1 hover:underline"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;