import React,{useEffect, useState} from 'react'

const Chiste = () => {

    const [datosAPI, setDatosAPI] = useState("Aún no me has contado ningún chiste")

    useEffect(() => {
        llamadaAPI()
    }, [])
    

    const llamadaAPI = async () =>  {
        try{
        const llamada = await fetch('https://v2.jokeapi.dev/joke/Programming?lang=es')
        const datos = await llamada.json()
        console.log("datos",datos)
        setDatosAPI({setup:datos.setup, delivery:datos.delivery, joke:datos.joke})
        }
        catch(error){
            console.log("error detectado", error);
        }
    }


  return (
    <>
    <div>Chiste:</div>
    {datosAPI.setup}
    <br></br>
    {datosAPI.delivery}
    <br></br>
    {datosAPI.joke}
    <button onClick={()=>{llamadaAPI()}}>Cuéntame un chiste</button>
    </>
  )
}

export default Chiste