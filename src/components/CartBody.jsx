import CartList from "./CartList";
const CartBody = () => {
  const productArray = [
    {
      id: "1",
      nombre: "Pan Especial",
      precio: 3.5,
      imagen: "product-1.png",
      altinf: "la imagen contiene Pan Especial",
      cantidad: 1,
    },
    {
      id: "2",
      nombre: "Bagette",
      precio: 1.5,
      imagen: "product-2.png",
      altinf: "la imagen contiene Bagette",
      cantidad: 1,
    },
    {
      id: "3",
      nombre: "Pan Yema",
      precio: 0.5,
      imagen: "product-3.png",
      altinf: "la imagen contiene Pan Yema",
      cantidad: 1,
    },
  ];
  return (
    <div id="idCart" className="cart">
      <h2>Tus compras</h2>
      <ul id="cartList" className="listCart">
        {productArray.map((product) => (
          <CartList item={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default CartBody;
