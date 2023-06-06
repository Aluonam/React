import React, { useState } from 'react'
import fondoStyle from './Fondo.module.css'

const Fondo = () => {

    const [color, setColor] = useState(true)

    const name2= fondoStyle.screencolor2
    const name = fondoStyle.screencolor1

  return (
    <>
    <div className={`${color ? name : name2 }`}>
        <div onClick={()=>{setColor(!color)}} className={fondoStyle.btnClick}>Cambia el fondo</div>
    </div>
    </>
  )
}

export default Fondo