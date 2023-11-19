import { useState, createContext } from "react";

export const OpenCartContext = createContext(false);

export const OpenCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOpenCart() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <OpenCartContext.Provider
      value={{ isCartOpen, setIsCartOpen, handleOpenCart, handleCloseCart }}
    >
      {children}
    </OpenCartContext.Provider>
  );
};

export default OpenCartProvider;
