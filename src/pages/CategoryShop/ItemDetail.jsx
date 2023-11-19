/* eslint-disable react/prop-types */
import CountController from "../../components/CountController";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { OpenCartContext } from "../../context/OpenCartContext";

const ItemDetail = ({ id, nombre, precio, imagen, altinf }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);
  const { setIsCartOpen } = useContext(OpenCartContext);

  function handleQuantity(quantity) {
    setQuantity(quantity);

    const item = { id, nombre, precio, imagen };

    addToCart(item, quantity);
    setIsCartOpen(true);
  }

  return (
    <>
      <div className="container">
        <div className="d-flex m-5">
          <img src={`../img/${imagen}`} alt={altinf} />

          <div className="m-5 p-5">
            <h1 className="mb-5">{nombre}</h1>
            <p className="fs-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              eaque iure doloremque? Tenetur magni ea ipsa laborum a, voluptate
              natus? Odit rerum consequuntur aperiam doloremque voluptatibus
              iusto ex saepe labore.
            </p>
            <p className="fs-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              eaque iure doloremque? Tenetur magni ea ipsa laborum a, voluptate
              natus? Odit rerum consequuntur aperiam doloremque voluptatibus
              iusto ex saepe labore.
            </p>
            <h3 className="mt-5 mb-5 fs-1">
              Precio: S/ {Number(precio).toFixed(2)}
            </h3>
            <div className="d-flex flex-direction-column">
              <CountController onHandleCart={handleQuantity} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
