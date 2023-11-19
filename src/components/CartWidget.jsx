import Cartsvg from "../Icons/Cartsvg";
import { useContext } from "react";
import { OpenCartContext } from "../context/OpenCartContext";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { isCartOpen, handleOpenCart } = useContext(OpenCartContext);
  const { quantityTotal } = useContext(CartContext);
  return (
    <div
      style={{ position: "relative" }}
      onClick={() => handleOpenCart(isCartOpen)}
    >
      <Cartsvg />
      <strong
        style={{
          color: "red",
          position: "absolute",
          top: "-10px",
          fontSize: "large",
        }}
      >
        {quantityTotal > 0 ? quantityTotal : ""}
      </strong>
    </div>
  );
};

export default CartWidget;
