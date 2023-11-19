/* eslint-disable react/prop-types */

const CartList = ({ item, cantidad }) => {
  return (
    <li>
      <img src={`../img/${item.imagen}`} alt={item.altinf} />
      <p className="precio">Qt: {cantidad}</p>
      <p className="precio">s/ {item.precio.toFixed(2)}</p>
      <p className="monto">s/ {(item.precio * cantidad).toFixed(2)}</p>
    </li>
  );
};

export default CartList;
