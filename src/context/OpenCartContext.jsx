import { useState, createContext } from "react";

export const OpenCartContext = createContext(false)


export const OpenCartProvider = ({children}) =>{


    const [isCartOpen, setIsCartOpen] = useState(false);

    function handleOpenCart() {
      setIsCartOpen((isCartOpen) => !isCartOpen);
    }

    return (
        <OpenCartContext.Provider value={{isCartOpen, handleOpenCart}} >
            {children}
        </OpenCartContext.Provider>
    )


}

export default OpenCartProvider