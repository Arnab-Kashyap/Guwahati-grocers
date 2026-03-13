import { useState } from "react";
import { Truck, Shield, Clock } from "lucide-react";
import products, { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import heroImg from '../assets/hero/heroimg2.jpg'

const Home = ({ searchQuery, isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "all" || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-400 to-blue-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="text-center lg:text-left lg:max-w-lg">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white animate-fade-in">
              Fresh & Organic Foods
            </h1>
            <p className="text-lg mb-6 text-white/90">
              Discover the best selection of fresh, organic, and premium-quality
              products delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Truck className="h-5 w-5" />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="h-5 w-5" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span>Same Day Delivery</span>
              </div>
            </div>

            <button
              onClick={() =>
                document.querySelector("main").scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>

          <img
            src={heroImg}
            alt="Fresh groceries"
            className="w-full lg:w-1/2 mt-8 lg:mt-0 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Browse by Category
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} isDarkMode={isDarkMode} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div
            className={`text-center py-16 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p>Try adjusting your search or category filter</p>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;