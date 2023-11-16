import Cartsvg from "../Icons/Cartsvg";
const CartWidget = ({isCartOpen, onIsCartOpen}) => {
  return (
    <div style={{ position: "relative" }} onClick={()=> onIsCartOpen(isCartOpen)}>
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
