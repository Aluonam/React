import React, { useState } from 'react'

const ContadorClicks = () => {

        const [num, setNum] = useState(0)

  return (
    <>
        {num}
        <button onClick={()=>{setNum(num+1)}}>Click</button>
        <button onClick={()=>{setNum(0)}}>Poner a 0</button>
    </>
  )
}

export default ContadorClicks