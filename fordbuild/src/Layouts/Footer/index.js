import React from 'react'
import FooterLogo from "./Footerlogo"
import FooterLinks from "./FooterLinks"
import OuterLinks from "./OuterLinks"
import Style from "./footer.module.css"
import { Link } from 'react-router-dom'
const index = () => {
    const list=[
        {
            name:" © 2023 Ford Motor Company",
            link:"#"
        },
        {
            name:"Site Map",
            link:"#"
        },
        {
            name:"Contact Us",
            link:"#"
        },
        {
            name:"Terms & Conditions",
            link:"#"
        },
        {
            name:"Privacy Notice",
            link:"#"
        },
        {
            name:"Your Privacy Choices ",
            link:"#"
        },
        {
            name:"Interest Based Ads",
            link:"#"
        },
        {
            name:"Cookie Settings",
            link:"#"
        },
        {
            name:"Accessibility",
            link:"#"
        }
    ]
  return (
    <div className={Style.footer}> 
        <FooterLogo/>
        <FooterLinks/>
        <OuterLinks/>
        <div className={Style.lastSection}>
        <div className={Style.logo}>
           
            <Link>
            <img src="/images/logo.svg" alt="" />
            
            </Link>
        </div>
        <ul className={Style.LastUl}>
        {list.map((value,index)=>(
            <li>
                <Link to={value.link} key={index}>
               {value.name}
                </Link>
            </li>
                
))}
            
        </ul>
        </div>
    </div>
  )
}

export default index
