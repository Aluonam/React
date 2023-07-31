import { createContext, useState } from "react";

//--------------------Creación del contexto------------------------------------
export const CartContext = createContext();

export const ContextAppProvider = (props) => {
//------------------------------------lógica-----------------------------------
    //Estado del carrito
    const [productosCarrito, setProductosCarrito] = useState([])



//---------------------info a la que tienen acceso los hijos-------------------
    const valuesProvider = {
    //En este ejemplo quiero compartir con los hijos los siguientes valores:
        productosCarrito,
        setProductosCarrito
  };



return (
    <CartContext.Provider value={valuesProvider}>
        {props.children}
    </CartContext.Provider>
    );
}