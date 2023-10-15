import React from "react";
import Cartsvg from "../Icons/Cartsvg";
const CartWidget = () => {
  return (
    <div style={{ position: "relative" }}>
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
