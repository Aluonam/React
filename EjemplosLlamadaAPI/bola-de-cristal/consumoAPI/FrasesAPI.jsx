import React, {useEffect, useState} from 'react'

export const FrasesAPI = () => {

    const [datosAPI, setDatosAPI] = useState("nada")



     useEffect(() => {
      llamadaAPI()
    }, [])
    
    const llamadaAPI = async () => {
      const llamada = await fetch('https://api.adviceslip.com/advice')
      const datos = await llamada.json()
      setDatosAPI(datos.slip.advice)
    }

   
  return (
    <>
    {datosAPI}
    <button onClick={()=> {llamadaAPI()}}>Otra frase</button>
    </>
  )
}
