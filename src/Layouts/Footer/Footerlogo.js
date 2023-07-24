import React from 'react'
import Style from "./footerlogo.module.css"

const Index
 = () => {
  return (
    <div className={Style.footerTop}>
        <h2 className={Style.heading}>Our Brands</h2>
        <div className={Style.logos}>

            <div className={Style.image}>
                <img src="./images/motocraft.png" alt="" />
                </div>


            <div className={Style.image}>

                <img src="./images/fordparts.png" alt="" />
            </div>


            <div className={Style.image}>
                <img src="./images/omincraft.png" alt="" />
            </div>


            <div className={Style.image}>
                <img src="./images/fordaccessories.png" alt="" />
            </div>
            
        </div>

    </div>
  )
}

export default Index
