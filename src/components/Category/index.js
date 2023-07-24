import React from "react";
import Style from "./category.module.css";

const index = (props) => {
  return (
    <div>
      <div className={Style.gridcategory}>
        {props.grid.map((value,index) => (
          <div className={Style.innerGrid} key={index}>
            <img src={value.src} alt="" />
            <div className={Style.categoryText}>
              <p>{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
