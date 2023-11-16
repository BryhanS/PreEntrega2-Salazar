import CartBody from "./CartBody"
// eslint-disable-next-line react/prop-types
const Main = ({children, isCartOpen}) => {
    return (
        <main>
            {children}
            {isCartOpen && <CartBody />}
        </main>
    );
  };
  
  export default Main;