import React, {useState} from 'react'

const Pais = () => {

    const [nombrePais, setNombrePais] = useState("spain")
    const [datosAPI, setDatosAPI] = useState("sin datos")

    const llamadaAPI = async (nombrePais) => {
        const url = `https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`;
        const llamada = await fetch(url);
        const datos = await llamada.json();
        setDatosAPI(datos[0].capital[0])
    }

  return (
    <>
    {datosAPI}
    <br></br>
    <input onChange={(e)=>{setNombrePais(e.target.value)}}></input>
    <br></br>
    <button onClick={()=>{llamadaAPI(nombrePais)}}>Clic</button>
    </>
    
  )
}

export default Pais