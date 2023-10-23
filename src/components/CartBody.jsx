/* eslint-disable react/prop-types */
import CartList from "./CartList";
const CartBody = ({ onCartList }) => {
  return (
    <div id="idCart" className="cart">
      <h2>Tus compras</h2>
      <ul id="cartList" className="listCart">
        {onCartList.map((product) => (
          <CartList item={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default CartBody;
