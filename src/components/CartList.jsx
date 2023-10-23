/* eslint-disable react/prop-types */
import { useState } from "react";

const CartList = ({ item }) => {
  const [value, setValue] = useState(1);

  function handlePlusClick() {
    setValue(value + 1);

    console.log({ ...item, cantidad: item.cantidad + value });
  }

  function handleMinusClick() {
    if (value > 1) setValue(value - 1);
  }
  return (
    <li>
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <div className="input-group">
        <button
          className="minus-item input-group-addon btn btn-primary"
          onClick={() => handleMinusClick()}
        >
          -
        </button>
        <input
          type="number"
          className="item-count form-control"
          min="0"
          max="100"
          value={value}
          disabled
        />
        <button
          className="plus-item btn btn-primary input-group-addon"
          onClick={() => handlePlusClick()}
        >
          +
        </button>
      </div>
      <p className="precio">s/ {item.precio.toFixed(2)}</p>
      <p className="monto">s/ {(item.precio * item.cantidad).toFixed(2)}</p>
    </li>
  );
};

export default CartList;
