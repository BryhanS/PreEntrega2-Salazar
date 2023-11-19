import { useState, createContext } from "react";

export const CartContext = createContext({
  cartArray: [],
  total: 0,
  quantityTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(0);

  const addToCart = (item, quantity) => {
    const productInCart = cartArray.find((prod) => prod.item.id === item.id);

    if (!productInCart) {
      setCartArray((prev) => [...prev, { item, quantity }]);
      setQuantityTotal((prev) => prev + quantity);
      setTotal((prev) => prev + item.precio * quantity);
    } else {
      const cartUpdate = cartArray.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity };
        } else {
          return prod;
        }
      });

      setCartArray(cartUpdate);
      setQuantityTotal((prev) => prev + quantity);
      setTotal((prev) => prev + item.precio * quantity);
    }
  };

  const deleteProduct = (id) => {
    const cartUpdate = cartArray.filter((prod) => prod.item.id !== id);
    const productDeleted = cartArray.find((prod) => prod.item.id === id);

    setCartArray(cartUpdate);
    setQuantityTotal((prev) => prev - productDeleted.quantity);
    setTotal(
      (prev) => prev - productDeleted.item.precio * productDeleted.quantity
    );
  };

  const emptyCart = () => {
    setCartArray([]);
    setQuantityTotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartArray,
        total,
        quantityTotal,
        addToCart,
        emptyCart,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
