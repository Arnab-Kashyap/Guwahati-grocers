import { useState } from "react";

const Login = ({ isDarkMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    alert(isLogin ? "Login successful!" : "Account created!");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`w-full max-w-md rounded-2xl shadow-2xl p-8 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
          Guwahati Grocers
        </h1>
        <p className={`text-center mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          {isLogin ? "Welcome back!" : "Create your account"}
        </p>

        <div className="flex rounded-lg overflow-hidden border border-gray-200 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-semibold transition-colors duration-200 ${isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-600"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-semibold transition-colors duration-200 ${!isLogin ? "bg-blue-600 text-white" : isDarkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-600"}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black"}`}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black"}`}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-300 text-black"}`}
          />

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            {isLogin ? "Login" : "Create Account"}
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
  );
};

export default Login;