
/* eslint-disable react/prop-types */
const  ProductItem = ({ item,onSelectionProduct }) => {

  return (
    <div className="card-body">
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <span>{item.nombre}</span>
      <button type="button" onClick={() =>onSelectionProduct(item)}>agregar al carrito</button>
    </div>
  )
};

export default ProductItem;