/* eslint-disable react/prop-types */
import ItemList from "./ItemList";

const ItemListContainer = ({ onProducts, onSelectionProduct }) => {
  return (
    <>
      <h1>Catalogo de Productos</h1>
      <div id="shop" className="card-container">
        {onProducts.map((item) => (
          <ItemList
            item={item}
            key={item.id}
            onSelectionProduct={onSelectionProduct}
          />
        ))}
      </div>
    </>
  );
};
export default ItemListContainer;
