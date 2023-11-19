/* eslint-disable react/prop-types */

const CartList = ({ item, cantidad, onDelete }) => {
  const { id, precio, imagen, altinf } = item;

  return (
    <li>
      <img src={`../img/${imagen}`} alt={altinf} />
      <p className="precio">Qt: {cantidad}</p>
      <p className="precio">s/ {precio.toFixed(2)}</p>
      <p className="monto">s/ {(precio * cantidad).toFixed(2)}</p>
      <button
        type="button"
        className="btn-close"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default CartList;
