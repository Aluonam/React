import React from 'react'

const InputLocation = ({setDataInputUser}) => {


  return (
    <>
    {/* <div>InputLocation</div> */}
    <input 
        type='text' 
        onChange={(valor)=>{setDataInputUser(valor.target.value)}}
    ></input>
    </>
  )
}

export default InputLocation