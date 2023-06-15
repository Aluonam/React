import React, { useEffect, useState } from 'react'

const Saludo = () => {

    const [textoSaludo, setTextoSaludo] = useState("aaaaaaaaaaaaaaaaaaaaaaa")

    useEffect(() => {
      setTimeout( () => setTextoSaludo("Hola soy el componente con useEffect"), 3000)
       
    
    }, [])
    

  return (
    <>
    <div>Saludo</div>
    {textoSaludo}
    </>
  )
}

export default Saludo