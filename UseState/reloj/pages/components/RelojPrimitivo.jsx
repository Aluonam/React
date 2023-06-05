import React, {useState} from 'react'


const RelojPrimitivo = () => {

    const fecha = new Date();

    const [horaActual, setHoraActual] = useState(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds())

    const handleFecha = () => {
        const fecha2 = new Date();;
        setHoraActual(fecha2.getHours() + ":" + fecha2.getMinutes() + ":" + fecha2.getSeconds())
    }


  return ( 
    <>
    <div>RelojPrimitivo</div>
    {horaActual}
    <button onClick={()=>{handleFecha()}}>refresca la hora</button>
    </>
  )
}

export default RelojPrimitivo