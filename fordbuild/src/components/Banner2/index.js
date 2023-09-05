import React from 'react'
import Style from "./Banner2.module.css"

const index = () => {
  return (
    <div className={Style.banner2}>
  <div className={Style.text_outer}>
   <div className={Style.busImage}>
    <img src="./images/bus.svg" alt="" />
   </div>
   <div>
    <p>Shipping costs? Nah – we got you. That’s right, shipping is on us.¹</p>
   </div>
   <div>
    <span className={Style.arrowIcon}> > </span>
    </div>
  </div>
  <div className={Style.text_outer}>
   <div className={Style.busImage}>
    <img src="./images/dollar.svg" alt="" />
   </div>
   <div>
    <p>1st time customer? Click here to get $20 off an order of $75 or more²</p>
   </div>
   <div>
    <span className={Style.arrowIcon}> > </span>
    </div>
  </div>
  <div className={Style.text_outer}>
   <div className={Style.busImage}>
    <img src="./images/dollar.svg" alt="" />
   </div>
   <div>
    <p>Order now and we'll give you five.
</p>
   </div>
   <div>
    <span className={Style.arrowIcon}>  > </span>
    </div>
  </div>

    </div>
  )
}

export default index