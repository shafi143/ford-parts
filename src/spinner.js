import { TailSpin } from "react-loader-spinner";
import React from 'react'

const Spinner = () => {
  return (
    <div style={{width:"100%", textAlign:"center", padding:"100px",margin:"auto",display:"flex",justifyContent:"center"}}>
    <TailSpin
   
    height="80"
    width="80"
    color="#0276B3"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  </div>
  )
}

export default Spinner
