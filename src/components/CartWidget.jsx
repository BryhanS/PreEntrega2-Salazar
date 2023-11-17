import Cartsvg from "../Icons/Cartsvg";
import { useContext } from "react";
import {OpenCartContext} from "../context/OpenCartContext";
const CartWidget = () => {

  const {isCartOpen,handleOpenCart} = useContext(OpenCartContext)
  return (
    <div style={{ position: "relative" }} onClick={()=> handleOpenCart(isCartOpen)}>
      <Cartsvg />
      <strong
        style={{
          color: "red",
          position: "absolute",
          top: "-10px",
          fontSize: "large",
        }}
      >
        3
      </strong>
    </div>
  );
};

export default CartWidget;
