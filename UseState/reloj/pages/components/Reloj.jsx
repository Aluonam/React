import React from 'react'
import { useState, useEffect } from 'react'

const Reloj = () => {
    
    const [hora, setHora] = useState("No se ha cargado la hora")
    
    useEffect(() => {
     const actionPerSecond =  setInterval(()=>setHora(new Date().toLocaleTimeString()),1000)
     return ()=> clearInterval(actionPerSecond)
    }, [])
    
    

  return (
    <>
    <div>Reloj</div>
    {hora}
   
    </>
  )
}

export default Reloj