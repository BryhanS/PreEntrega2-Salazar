/* eslint-disable react/prop-types */
import ItemList from "./ItemList";

const ItemListContainer = ({ children, onProducts }) => {
  return (
    <>
      <h1>{children}</h1>
      <div id="shop" className="card-container">
        {onProducts.map((item) => (
          <ItemList {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};
export default ItemListContainer;
