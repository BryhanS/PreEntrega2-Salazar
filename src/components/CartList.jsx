/* eslint-disable react/prop-types */
import { CountController } from "./CountController";

const CartList = ({ item }) => {
  return (
    <li>
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <CountController />
      <p className="precio">s/ {item.precio.toFixed(2)}</p>
      <p className="monto">s/ {(item.precio * item.cantidad).toFixed(2)}</p>
    </li>
  );
};

export default CartList;
