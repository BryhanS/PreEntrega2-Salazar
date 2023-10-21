import Cartsvg from "../Icons/Cartsvg";
const CartWidget = ({ onCartOpen, onQuantityCart }) => {
  return (
    <div style={{ position: "relative" }} onClick={onCartOpen}>
      <Cartsvg />
      <strong
        style={{
          color: "red",
          position: "absolute",
          top: "-10px",
          fontSize: "large",
        }}
      >
        {onQuantityCart}
      </strong>
    </div>
  );
};

export default CartWidget;
