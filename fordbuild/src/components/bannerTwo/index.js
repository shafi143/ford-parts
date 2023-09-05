import React from 'react'
import Style from "./filtercategory3.module.css"
const index = () => {
  return (
    <div>
        <div className={Style.bannerSection}>
            <div className={Style.banner1}>
                <img src="./images/register.jpg" alt="" />
                <div className={Style.bannerInner}>
                <p>First-time customers get $20 off an order of $75 or more*   </p>
                <button disabled>Register and Save</button>
                </div>
            </div>
            <div className={Style.banner1}>
                <img src="./images/shipping.jpg" alt="" />
                <div className={Style.bannerInner}>
                <p>Shipping costs? Nah – we got you. That’s right, shipping is on us.** </p>
                <button>Offer Details</button>
                </div>
            </div>
          
           
        </div>
        <div  className={Style.lastContent}>
            <p className={Style.contentlast}>¹Offer valid through 06/30/23 on qualifying purchases made before tax. Offer applies to FedEx standard shipping only, up to 40 lbs. for destinations within the 50 states. Guest and sponsored customers are ineligible for free shipping. FordParts.com reserves the right to change program details at any time without obligations.</p>
        <p className={Style.contentlast}>²Must click the promotional banner at the top of the page to receive discount. Valid on qualifying purchase of items on FordParts.com, before tax and shipping. Offer valid through June 30, 2023. Guest and sponsored customers are ineligible for discount. FordParts.com reserves the right to change program details at any time without obligations.</p>
          </div>
    </div>
  )
}

export default index