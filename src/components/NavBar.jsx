import CartWidget from "./CartWidget";
const NavBar = ({ onCartOpen, onQuantityCart }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand logo-box" href="../index.html">
          <img className="logo-img" src="/img/logo.png" alt="logo" />
          <span>Santa Maria</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse header-menu justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="../index.html">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Tienda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contacto</a>
            </li>
          </ul>
          <CartWidget onCartOpen={onCartOpen} onQuantityCart={onQuantityCart} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
