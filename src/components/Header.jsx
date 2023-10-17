import NavBar from "./NavBar";

const Header = ({ onCartOpen }) => {
  return (
    <header className="header-container sticky-top">
      <NavBar onCartOpen={onCartOpen} />
    </header>
  );
};

export default Header;
