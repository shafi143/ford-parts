import React from "react";
import Style from "./carparts.module.css";
import { Link } from "react-router-dom";
const CarParts = (props) => {
  return (
    <Link className={Style.outerCar}>
      <div className={Style.imageBox}>
        <img src={props.image} alt="" />
      </div>
      <div className={Style.detail}>
        <h1 className={Style.heading}>{props.heading}</h1>
        <p className={Style.description}>
        Description: {props.description}
        </p>
        <p className={Style.description}>price : <strong>${props.price}</strong></p>
      </div>
    </Link>
  );
};

export default CarParts;
