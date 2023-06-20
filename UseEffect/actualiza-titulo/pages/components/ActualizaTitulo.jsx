import React, { useEffect, useState } from 'react'

const ActualizaTitulo = () => {

        const [title, setTitle] = useState("Título por defecto")

        useEffect(() => {
          setTitle("Hola React!")
        }, [])
        

  return (
    <>
    {title}
    </>
  )
}

export default ActualizaTitulo