"use client";
import React, { useState } from 'react'


const BotonContador = () => {

    //hook useState para dar valor al numero que se usará al sumar o restar 1
    const [valorNum, setValorNum] = useState(0)

    //hook useState para dar valor al numero que se usará al sumar o restar 2
    const [valorNum2, setValorNum2] = useState(0)


  return (
    <>
    <span>Boton Contador para incrementar o decrementar número</span>
    {valorNum}
    <button onClick={()=>{setValorNum(valorNum+1)}}>+</button>
    <button onClick={()=>{setValorNum(valorNum-1)}}>-</button>
    <button onClick={()=>{setValorNum(0)}}>Retornar a 0</button>

    <span>Boton Contador para incrementar o decrementar de 2 en 2 </span>
    {valorNum2}
    <button onClick={()=>{setValorNum2(valorNum2+2)}}>+</button>
    <button onClick={()=>{setValorNum2(valorNum2-2)}}>-</button>
    <button onClick={()=>{setValorNum2(0)}}>Retornar a 0</button>
    </>
  )
}

export default BotonContador