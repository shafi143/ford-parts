import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./submenu.module.css"

const Links = (props) => {
  return (
    <div>
    <header className={Style.header}>{props.header}</header>
    <hr />
    <ul className={Style.ulList}>
        {
            props.links.map((value,index)=>(
                <li>
                <Link to={value.link} key={index}>{value.name}</Link>
            </li>

            ))
        }
       
        
    </ul>
   </div>
  )
}

export default Links