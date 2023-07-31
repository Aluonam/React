**HOOK useContext**
1. Crear carpeta: context (fuera de pages).
2. Creación del archivo:  ContexApp.jsx 
3. Dentro del archivo:

```javascript
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

```

4. Existe un componente o varios que queremos envolver (BotonCambioColor en este caso).
5. En el fichero donde se llamen a los componentes que queremos envolver pondremos: (envolviendo con el nombre de la función con la lógica del contexto el o los componentes que queremos que accedan).
*Esto también podría hacerse en el fichero de un componente especifico y/o en sus hijos para que solo accedan ellos. Depende de quien queramos que acceda a los datos que se compartirán en el contexto. 

```javascript
import styles from '@/styles/Home.module.css'
import BotonCambioColor from '@/components/BotonCambioColor'
import { ContextAppProvider } from '@/context/ContextApp'

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
      <ContextAppProvider>
        {/*Componente que accederá al context*/}
       <BotonCambioColor></BotonCambioColor>
      </ContextAppProvider>
      </main>
    </>
  )
}
```
