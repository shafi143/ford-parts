import React from "react";
import Style from "./carparts.module.css";
import { Link } from "react-router-dom";
const CarParts = (props) => {
  return (
    <Link className={Style.outerCar}>
      <div className={Style.imageBox}>
        <img src={props.image} alt={props.heading} />
      </div>
      <div className={Style.detail}>
        <h1 className={Style.heading}>{props.heading}</h1>
        <hr />
        <p className={Style.description}>
        <strong>Description:</strong> {props.description}
        </p>
        <div className={Style.priceBox}>
        <p >Price : <strong>${props.price}</strong></p>
        </div>
      </div>
    </Link>
  );
};

export default CarParts;
