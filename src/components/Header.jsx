import NavBar from "./NavBar";

const Header = ({ onCartOpen, onQuantityCart }) => {
  return (
    <header className="header-container sticky-top">
      <NavBar onCartOpen={onCartOpen} onQuantityCart={onQuantityCart} />
    </header>
  );
};

export default Header;
