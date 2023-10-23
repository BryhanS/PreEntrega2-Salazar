/* eslint-disable react/prop-types */
const ItemList = ({ item, onSelectionProduct }) => {
  return (
    <div className="card-body">
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <span>{item.nombre}</span>
      <button>Ver Detalle</button>
    </div>
  );
};

export default ItemList;
