import { useContext } from "react";
import CartBody from "./CartBody"
import {OpenCartContext} from "../context/OpenCartContext";


// eslint-disable-next-line react/prop-types
const Main = ({children}) => {


    const {isCartOpen} = useContext(OpenCartContext)


    return (
        <main>
            {children}
            {isCartOpen && <CartBody />}
        </main>
    );
  };
  
  export default Main;