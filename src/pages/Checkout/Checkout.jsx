import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../../components/CartList";
const Checkout = () => {
  const { cartArray, deleteProduct, total } = useContext(CartContext);
  return (
    <main>
      <section id="checkout" className="section-team">
        <h1>Checkout</h1>

        <div className="container d-flex mt-5">
          <form className="checkout-form col-6">
            <h3>ingresa tus datos</h3>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombres"
              />
              <label htmlFor="nombre">Nombres:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Apellido"
              />
              <label htmlFor="apellido">Apellidos:</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="telefono"
              />
              <label htmlFor="telefono">Telefono:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="name@example.com"
              />
              <label htmlFor="correo">Correo:</label>
            </div>
          </form>

          <div className="checkout-list col-6">
            <h3>tus compras</h3>
            <ul id="cartList" className="listCart d-flex">
              {cartArray.map((product, id) => (
                <CartList
                  item={product.item}
                  cantidad={product.quantity}
                  onDelete={deleteProduct}
                  key={id}
                />
              ))}
            </ul>

            <div id="totalSum" className="total fs-3">
              {`Compra Total: S/. ${total.toFixed(2)}`}
            </div>
          </div>
        </div>

        <button className="mt-5">finalizar compra</button>
        <button className="mt-5">regresa al catalogo</button>
      </section>
    </main>
  );
};

export default Checkout;
