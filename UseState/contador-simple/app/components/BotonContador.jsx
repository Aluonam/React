"use client";
import React, { useState } from 'react'


const BotonContador = () => {

const [valorNum, setValorNum] = useState(0)

  return (
    <>
    <span>Boton Contador para incrementar o decrementar número</span>
    {valorNum}
    <button onClick={()=>{setValorNum(valorNum+1)}}>+</button>
    <button onClick={()=>{setValorNum(valorNum-1)}}>-</button>
    <button onClick={()=>{setValorNum(0)}}>Retornar a 0</button>
    </>
  )
}

export default BotonContador