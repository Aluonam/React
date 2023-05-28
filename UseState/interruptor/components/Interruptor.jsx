"use client";
import React from 'react'
import { useState } from 'react'

const Interruptor = () => {

    //useState interruptor encendido/apagado; se declara valor por defecto false
    const [value, setValue] = useState(false)
    console.log(value)

  return (
    <>
    {/* <button onClick={()=>{!setValue("Apagado")}}>Interruptor</button> */}
    <h3>La luz está {value ? "encendida" : "apagada"}</h3>
    {/* Si el valor es true devuelves encendido sino apagado  */}
    <button onClick={()=>{setValue(!value)}}>Interruptor</button>
    </>
  )
}

export default Interruptor