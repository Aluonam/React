import React,{ useState } from 'react'
import InputLocation from '../atoms/InputLocation'
import SendButton from '../atoms/SendButton'

const SearchHeader = () => {

  const [dataInputUser, setDataInputUser] = useState("")


  return (
    <>
    {/* el input utiliza el valor */}
    <InputLocation setDataInputUser={setDataInputUser}></InputLocation>
    {/* el botón utiliza el modificador */}
    <SendButton dataInputUser={dataInputUser}></SendButton>
    </>
  )
}

export default SearchHeader