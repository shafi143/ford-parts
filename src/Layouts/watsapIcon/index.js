import React from "react";
import Style from "./watsap.module.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const index = () => {
  return (
    <div className={Style.iconDiv}>
      <a href="https://wa.me/#" target="watsap">
        <FaWhatsapp
          id={Style.icon}
          as={Link}
          to="https://wa.me/#"
        />
        {/* <i className="fa-brands fa-square-whatsapp" id={Style.icon} as={Link} to="https://wa.me/+923469889143"></i> */}
      </a>
    </div>
  );
};

export default index;
