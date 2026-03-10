import { Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product, isDarkMode }) => {
  const { addToCart } = useCart();

  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl group ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/300x200/E0F2F7/000000?text=${encodeURIComponent(product.name)}`;
          }}
        />
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">{product.rating}</span>
        </div>
        {/* In Stock Badge */}
        {product.inStock && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            In Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className={`text-lg font-semibold mb-2 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {product.name}
        </h3>
        <p
          className={`mb-4 text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            ₹{product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;