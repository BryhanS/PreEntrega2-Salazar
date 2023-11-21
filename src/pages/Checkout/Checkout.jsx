import { useState, useContext } from "react";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import CartList from "../../components/CartList";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { cartArray, deleteProduct, total, emptyCart } =
    useContext(CartContext);

  function sweetAlert(msg) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: msg,
    });
  }

  function handleForm(event) {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmation) {
      sweetAlert("Por favor completa todos los campos de informacion!!!");
      return;
    }

    if (email !== emailConfirmation) {
      sweetAlert("Los Campos del email no coinciden!!!");
      return;
    }

    if (cartArray.length === 0) {
      sweetAlert("Tienes que tener productos en tu carrito");
      return;
    }

    const orden = {
      items: cartArray.map((product) => ({
        id: product.item.id,
        nombre: product.item.nombre,
        cantidad: product.quantity,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
      });
  }

  if (ordenId.length > 0) {
    Swal.fire(
      `¡Gracias por tu compra! Sr o Sra ${apellido} Tu número de orden es: ${ordenId}`
    );
    setOrdenId("");
    emptyCart();
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmation("");
  }

  return (
    <main>
      <section id="checkout" className="section-team">
        <h1>Checkout</h1>

        <div className="container d-flex mt-5">
          <form onSubmit={handleForm} className="checkout-form col-6 mb-5">
            <h3>ingresa tus datos</h3>
            <div className="form-floating mb-3 mt-5">
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombres"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="nombre">Nombres:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              <label htmlFor="apellido">Apellidos:</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <label htmlFor="telefono">Telefono:</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="correo">Correo:</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="correoConfirm"
                placeholder="name@example.com"
                value={emailConfirmation}
                onChange={(e) => setEmailConfirmation(e.target.value)}
              />
              <label htmlFor="correoConfirm">Correo Confirmacion:</label>
            </div>

            <button type="submit" className="mt-5 bg-danger">
              confirmar compra
            </button>
            <Link to="/tienda/all">
              <button className="mt-5">regresa al catalogo</button>
            </Link>
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
      </section>
    </main>
  );
};

export default Checkout;
