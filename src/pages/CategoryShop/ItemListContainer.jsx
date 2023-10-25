/* eslint-disable react/prop-types */
import ItemList from "./ItemList";

const ItemListContainer = ({ onProducts }) => {
  return (
    <>
      <h1>Catalogo de Productos</h1>
      <div id="shop" className="card-container">
        {onProducts.map((item) => (
          <ItemList
            {...item}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
};
export default ItemListContainer;
