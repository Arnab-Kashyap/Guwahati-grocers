import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => [
      ...prev,
      { ...product, cartItemId: Date.now() + Math.random() },
    ]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => setCart([]);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setShowCheckoutForm(true);
  };

  const handleOrderPlaced = (details) => {
    setOrderDetails(details);
    setShowCheckoutForm(false);
    setShowOrderConfirmation(true);
    clearCart();
  };

  const handleCloseOrderConfirmation = () => {
    setShowOrderConfirmation(false);
    setOrderDetails(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        showCheckoutForm,
        setShowCheckoutForm,
        showOrderConfirmation,
        orderDetails,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotal,
        handleProceedToCheckout,
        handleOrderPlaced,
        handleCloseOrderConfirmation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);