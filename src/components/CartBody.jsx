/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OpenCartContext } from "../context/OpenCartContext";
import CartList from "./CartList";

const CartBody = () => {
  const { cartArray, total } = useContext(CartContext);
  const { handleCloseCart } = useContext(OpenCartContext);

  return (
    <div id="idCart" className="cart">
      <h2>Tus compras</h2>
      <ul id="cartList" className="listCart">
        {cartArray.map((product, id) => (
          <CartList item={product.item} cantidad={product.quantity} key={id} />
        ))}
      </ul>

      <div className="checkout">
        <div id="totalSum" className="total">
          {total.toFixed(2)}
        </div>
        <div
          id="closeShopping"
          className="btn btn-danger"
          onClick={() => handleCloseCart()}
        >
          Close
        </div>
        <div id="endBuy" className="shopping">
          Finaliza tu Compra
        </div>
      </div>
    </div>
  );
};

export default CartBody;
