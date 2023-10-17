import Cartsvg from "../Icons/Cartsvg";
const CartWidget = ({ onCartOpen }) => {
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
        3
      </strong>
    </div>
  );
};

export default CartWidget;
