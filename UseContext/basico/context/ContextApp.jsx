import React, { createContext, useState } from 'react';

//Creación del contexto:
export const NombreContext = createContext(); 

//Función con la lógica del contexto: 
export const ContextAppProvider = (props) => {
//Se define la lógica que se vaya a compartir (useState, const, funciones, etc).
    const [color, setColor] = useState("blanco") //En este ejemplo useState

//información a la que los hijos acceden: 
  const valuesProvider = {
    //En este ejemplo quiero compartir con los hijos los siguientes valores:
   color, 
   setColor
  };

  return (
    // Se especifica el nombre del contexto.provider (indica que se le va a pasar información). 
    // Por eso se especifica que valor se comparte (se comparte el nombre del objeto al que acceden los hijos)
    <NombreContext.Provider value={valuesProvider}>
        {/* Permito que se le metan otros componentes */}
      {props.children} 
    </NombreContext.Provider>
  );
}
