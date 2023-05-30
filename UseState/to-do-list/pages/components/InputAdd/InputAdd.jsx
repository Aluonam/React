import React from 'react'
import InputAddStyle from './InputAdd.module.css'
import { useState } from 'react'

const InputAdd = ({setTareaPorHacer}) => {

  const [textUserInput, setTextUserInput] = useState()

  const handleAddTarea = ()=>{
    setTareaPorHacer((valorActual)=>[...valorActual,textUserInput])
    setTextUserInput('')
  }



  return (
    <>
      <input 
        placeholder="texto de la tarea por defecto" 
        className={InputAddStyle.inputTask} 
        onChange={(textoUsuario)=>{setTextUserInput(textoUsuario.target.value)}} 
        value={textUserInput}
        />
      <div 
        className={InputAddStyle.buttonTask} 
        onClick={()=>{handleAddTarea()}}>
        Añadir tarea
      </div>
    </>
  )
}

export default InputAdd