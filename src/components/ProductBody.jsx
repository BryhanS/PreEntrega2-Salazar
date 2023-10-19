/* eslint-disable react/prop-types */
import ProductItem from "./ProductItem";

const ProductBody = ({onProducts, onSelectionProduct}) => {

  return (
    <>
      <h1>Catalogo de Productos</h1>
      <div id="shop" className="card-container">
        {onProducts.map((item) => (
          <ProductItem item={item} key={item.id} onSelectionProduct={onSelectionProduct} />
        ))}
      </div>
    </>
  );
}
export default ProductBody;

