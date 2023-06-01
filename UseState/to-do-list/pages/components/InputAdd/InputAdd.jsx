import React from 'react'
import InputAddStyle from './InputAdd.module.css'
import { useState } from 'react'

//COMPONENTE HIJO para cabecera (hijo 1)
const InputAdd = ({setTareaPorHacer}) => {

  //UseState para guardar lo que escribe el usuario
  const [textUserInput, setTextUserInput] = useState()

  //Función para mostrar lo que ha escrito y limpiarlo después
  const handleAddTarea = ()=>{
    setTareaPorHacer((valorActual)=>[...valorActual,textUserInput])
    setTextUserInput('')
  }



  return (
    <>
      <input 
        placeholder="texto de la tarea por defecto" 
        className={InputAddStyle.inputTask} //llamada al CSS con {} el nombre del CSS que especifiqué arriba . nombre de la parte de estilos de este input
        onChange={(textoUsuario)=>{setTextUserInput(textoUsuario.target.value)}} 
        value={textUserInput}
        //Importante poner el valor!!! el valor de este input es la variable del useState
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