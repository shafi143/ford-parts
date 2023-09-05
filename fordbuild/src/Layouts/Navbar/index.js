import React,{useState,useEffect,useRef} from "react";
import Style from "./navbar.module.css";
import { Link } from "react-router-dom";
// import Submenu from "./Submenu"
import Submenu2 from "./Submenu2"
import { FaBars,    FaShoppingCart, FaUser, } from "react-icons/fa";


const Index = () => {
  
  // const [isOpen, setIsOpen] = useState(false);
  // const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [icon1 ,setIcons1]=useState(true)
  const [icon2 ,setIcons2]=useState(true)
 
  
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, []);

 

  // const handleSubMenuClick = (event) => {
  //   event.stopPropagation(); // prevent click from propagating to document
  //   setShowSubMenu(!showSubMenu);
  //   setShowSubMenu2(false)
  // };
  const handleSubMenuClick2 = (event) => {
    event.stopPropagation();
    // setShowSubMenu(false);
    setShowSubMenu2(!showSubMenu2);
  };

  const handleOutsideClick = () => {
   
    // setShowSubMenu(false);
    setShowSubMenu2(false)
  }
//   const list1=[
//     {
// name:"Ford Accessories",
// link:"#"
//     },
//     {
//         name:"Body",
//         link:"#"
// },
// {
// name:"Brakes",
// link:"#"
// },
// {
// name:"Climate Control",
// link:"#"
// },
// {
// name:"Electrical",
// link:"#"
// },
// {
// name:"Engine",
// link:"#"
// },
// {
// name:"Exhaust",
// link:"#"
// },
// {
// name:"Filters",
// link:"#"
// },
// {
// name:"Fluids, Chemicals and Lubricants",
// link:"#"
// },
// {
// name:"Fuel System",
// link:"#"
// },
// {
// name:"Hardware and Fasteners ",
// link:"#"
// },
// {
// name:"Steering",
// link:"#"
// },
// {
// name:"Suspension",
// link:"#"
// },
// {
// name:"Transmission",
// link:"#"
// },
// {
// name:"Wheels and Tires",
// link:"#"
// },
// {
// name:"Wiper and Washer",
// link:"#"
// },

// ]


const list2=[
  {
name:"Ford Accessories",
link:"#"
  },
  {
      name:"Ford Parts",
      link:"#"
},
{
name:"Motorcraft®",
link:"#"
},
{
name:"Parts Warranty",
link:"#"
},
{
  name:"Omnicraft",
  link:"#"
},
{
  name:"Frequently Asked Questions",
  link:"#"
},
{
  name:"Contact Us",
  link:"#"
},
{
  name:"Powertrain",
  link:"#"
}
]

const list3=[
  {
name:"Ford Technical Resources ",
link:"#"
  },
  {
      name:"Motorcraft Technical Resources ",
      link:"#"
},
{
name:"Ford Charge Stations ",
link:"#"
},

]
// const menuFirst=()=>{
//   document.getElementById("menu1").style.display="block"
// }
// const menuSecond=()=>{
//   document.getElementById("menu2").style.display="block"
// }
const menuFirst=(event)=>{
  const showmenu1 =document.getElementById(Style.menu1);
  if (showmenu1.style.display!=="block")
  {
    event.stopPropagation();
    showmenu1.style.display="block";
    setIcons1(false)
  }else{
    showmenu1.style.display="none";
    setIcons1(true)

  }
  
  
}

const menuSecond=()=>{
  const showmenu2 =document.getElementById(Style.menu2);
  if (showmenu2.style.display!=="flex")
  {

    showmenu2.style.display="flex";
    setIcons2(true)
  }else{
    showmenu2.style.display="none";
    setIcons2(true)

  }
}
const CancelMenu1=()=>{
  document.getElementById(Style.menu1).style.display="none";
  setIcons1(true)

}
// const CancelMenu2=()=>{
//   document.getElementById(Style.menu2).style.display="none";
//   setIcons2(true)

// }



  return (
    <div className={Style.navbarFull}>
    <div className={Style.outerNav}>
  {icon1?
  <FaBars id={Style.menu1icon} onClick={menuFirst}/>
  //  <i className="fa-solid fa-bars" ></i>
   :null}  
   
    <div id={Style.menu1}>
      <ul className={Style.navFirstSection} >
      <i className="fa-solid fa-xmark" id={Style.cancel} onClick={CancelMenu1}></i>
      
        <li className={Style.logo}>
          <Link to={"/"}> <img src="/images/logo.svg" alt="" /></Link>
        </li>
        {/* <li>
          {" "} 
          <Link to="#" onClick={handleSubMenuClick}>Shop Parts</Link>{" "}
          {showSubMenu && (
          <div className={Style.submenu} ref={menuRef}> 
          <Submenu links={list1} header="Shop Parts"/>
      
       
          </div>
          )}
        </li> */}
        <li>
          <Link to="#" onClick={handleSubMenuClick2}>Resources</Link>
          {showSubMenu2 && (
          <div className={Style.submenu2} ref={menuRef}> 
          
          <Submenu2 links={list2} header="Resources"/>
          <Submenu2 links={list3} header="External Links"/>
         
            
       
          </div>
          )}
        </li>
      </ul>
   

      {/* second section */}
      {icon2? 
      <i className="fa-solid fa-gears" id={Style.menu2icon} onClick={menuSecond}></i>
      // <i className="fa-solid fa-list" ></i>
      :null}
      <ul className={Style.navSecondSection} id={Style.menu2}>
      {/* <i className="fa-solid fa-xmark" id={Style.cancel} onClick={CancelMenu2}></i> */}
        {/* <li>
          {" "}
          <Link to="#">
            <FaUser className={Style.icons}/>My Account
         
          </Link>{" "}
        </li>
        <li>
          <Link to="#">
            
            <i className={`fa-solid fa-location-dot ${Style.icons}`}></i>Find a
            Dealer
          </Link>
        </li> */}
        {/* <li>
          <Link to="#">
            <FaBars className={Style.icons}/>My Orders
           
          </Link>
        </li> */}
        <li>
          <Link to="#">
            <FaShoppingCart className={Style.icons}/>
            {/* <i className={`fa-solid fa-cart-shopping $`}></i> */}
          </Link>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
};

export default Index;
