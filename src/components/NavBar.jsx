import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onCartOpen, onQuantityCart }) => {
  return (
    <header className="header-container sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo-box">
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
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about-us" className="nav-link">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Tienda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <CartWidget
              onCartOpen={onCartOpen}
              onQuantityCart={onQuantityCart}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
