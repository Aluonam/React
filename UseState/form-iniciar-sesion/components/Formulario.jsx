import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const [user, setUser] = useState({
        nombre: '',
        contra: ''
    })

    const enviar = ()  => {
        console.log(user);
        setUser({
            nombre: '',
            contra: ''
        })
    }

  return (
    <>
    <div>Formulario</div>
    <input
        type='text'
        placeholder=' Nombre'
        value={user.nombre}
        onChange={(datos)=>{setUser({...user, nombre: datos.target.value})}}
        />
    <input
        type='password'
        placeholder=' Contraseña'
        value={user.contra}
        onChange={(datos)=>{setUser({...user, contra: datos.target.value})}}
        />
    <button onClick={()=>{enviar()}}> Enviar </button>
    </>
  )
}

export default Formulario