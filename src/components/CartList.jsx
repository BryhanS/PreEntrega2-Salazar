const CartList = ({ item }) => {
  return (
    <li>
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <div className="input-group">
        <button className="minus-item input-group-addon btn btn-primary">
          -
        </button>
        <input
          type="number"
          className="item-count form-control"
          min="0"
          max="100"
          disabled
        />
        <button className="plus-item btn btn-primary input-group-addon">
          +
        </button>
      </div>
      <p className="precio">{item.precio.toFixed(2)}</p>
      <p className="monto">{(item.precio * item.cantidad).toFixed(2)}</p>
    </li>
  );
};

export default CartList;
