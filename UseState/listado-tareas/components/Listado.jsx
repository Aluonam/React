"use client";
import React from 'react'
import { useState } from 'react'

const Listado = () => {

    //useState que crea array vacio para almacenar los datos del texto que escriba el usuario
    const [tarea, setTarea] = useState([])  
    //useState para que guarde lo que escribe el usuario en pantalla y que despues pediremos que guarde en el array
    const [textoPantalla, setTextoPantalla] = useState()

    //funcion que mete el texto guardado en el array vacio y limpia el modificador donde se escribe el valor
    const handleAddArray = ()=>{
      tarea.push(textoPantalla)
      setTextoPantalla("")
    }

    //funcion que coge el ultimo valor escrito (de la posicion 0 a la -1) y limpia el modificador donde se escribe el valor 
    const handleDelArray = ()=>{
      setTarea(tarea.slice(0,-1))
      setTextoPantalla("")
    }

  return (
    <>
    <div>Listado:</div>
    <br></br>
    {/* caja para escribir texto con función que recibe un texto y lo guarda en el modificador. Se aclara que el valor del input es la variable textoPantalla */}
    <input placeholder='Escribe tarea' onChange={(tarea)=>{setTextoPantalla(tarea.target.value)}} value={textoPantalla}/>
    {/* botones que llaman a las funciones que permiten añadir el texto y eliminarlo */}
    <button onClick={()=>{handleAddArray()}}>Añadir</button>
    <button onClick={()=>{handleDelArray()}}>Borrar</button>
    {/* Se recorre el array, se pasa como un objeto y se devuelve ese objeto como un <li> por eso tambien irá dentro del <ul>  */}
    <ul>
      {tarea.map((objTarea)=><li>{objTarea}</li>)}
    </ul>
        
    </>
  )
}

export default Listado