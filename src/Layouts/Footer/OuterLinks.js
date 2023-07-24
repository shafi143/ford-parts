import React from "react";
import Style from "./OuterLinks.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Index = () => {
  return (
    <div className={Style.outerLinks}>
      <div className={Style.innerBox}>
        <div className={Style.section}>
          <p className={Style.follow}>Follow Us</p>
          <ul className={Style.iconsList}>
            <li>
               
                <Link className={Style.facebook}><FaFacebook fontSize={"30px"}/></Link>
             
            </li>
            <li><Link className={Style.twitter}><FaTwitter fontSize={"30px"}/></Link></li>
            <li>
                <Link className={Style.youtube}><FaYoutube fontSize={"30px"}/></Link>
            </li>
          </ul>
        </div>
        <div className={Style.section}>
            <img src="./images/comment.svg" alt="" className={Style.commentimage} />
          <p className={Style.follow} style={{textDecoration:"underline"}}>Comment Card</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
