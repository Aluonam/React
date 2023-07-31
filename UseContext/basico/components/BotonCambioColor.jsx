import React, { useContext } from 'react'
import { NombreContext } from '@/context/ContextApp'

const BotonCambioColor = () => {

    // const {valor o valores del objeto que cojo del context} = useContext(nombre de la const de creación del contexto)
    const {color,setColor} = useContext(NombreContext)


  return (
    <>
    color {color} 
    {/* Se especifica el valor que he pedido en la lógica de arriba */}
    <button onClick={()=>{setColor("Negro")}}>Cambia de color con un clic</button>
    </>
  )
}

export default BotonCambioColor