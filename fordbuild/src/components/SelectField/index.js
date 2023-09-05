import React from 'react'

const index = (props) => {
    const handleChange=(e)=>{
       
    }
  return (
    <div style={{marginTop:"10px"}}>
    <label htmlFor={props.name}>{props.name}</label><br />

    <select name="business type" id={props.name} onChange={handleChange}>
        {props.option.map((value,index)=>(

            <option value={value.value} key={index}>{value.name}</option>

        ))}
    </select>
    </div>
  )
}

export default index