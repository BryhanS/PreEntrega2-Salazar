/* eslint-disable react/prop-types */
const  ProductItem = ({ item }) => {
  return (
    <div className="card-body">
      <img src={`./img/${item.imagen}`} alt={item.altinf} />
      <span>{item.nombre}</span>
      <button type="button">agregar al carrito</button>
    </div>
  )
};

export default ProductItem;