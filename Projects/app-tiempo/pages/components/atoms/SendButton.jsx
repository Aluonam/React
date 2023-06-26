import React from 'react'

const SendButton = ({dataInputUser}) => {
    

  return (
    <>
    <button onClick={()=>{console.log(dataInputUser)}}>Buscar tiempo</button>
    </>
  )
}

export default SendButton