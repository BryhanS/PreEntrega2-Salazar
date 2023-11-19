import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
  return (
    <header className="header-container sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Logo />
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
              <li className="nav-item dropdown">
                <NavLink
                  to="/category"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tienda
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/tienda/all">
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tienda/diario">
                      Diarios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/tienda/especiales">
                      Especiales
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/contact-us" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>

            {children}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
