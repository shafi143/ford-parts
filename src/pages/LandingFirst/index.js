
import Style from "./Landing.module.css"
import Banner1 from "../../components/Banner1"
import Banner2 from "../../components/Banner2"
// import FilterCategory from '../filtersCategory'
import FilterCategory2 from '../../components/FilterCategory2'
import FilterCategory3 from '../../components/bannerTwo'
import Slider  from '../../components/Slider'
import Slider2  from '../../components/Slider2'
import Filter from "../../components/filter3"
// import { useEffect, useState } from "react"

const Index = () => {
  const images = [
    {
      src:"./images/bodyparts.jpg",
      alt: "Body Parts",
      name:"Body Parts ",
      shoping:"Shop Now"
    },
    {
      src:"./images/lightning.jpg",
      alt: "Lightning",
      name:"Lightning",
      shoping:"Shop Now"
    },
    {
      src:"./images/oil-change-kit.jpg",
      alt: "Oil Change Kit",
      name:"Oil Change Kit",
      shoping:"Shop Now"
    },
    // {
    //   src:"./images/images1.jpg",
    //   alt: "Artmarkets ",
    //   name:"Interior Accessories ",
    //   shoping:"Shop Now"
    // },
    // {
    //   src: "./images/images2.jpg",
    //   alt: "Caltex",
    //   name:"Wiper Blades  ",
    //   shoping:"Shop Now"
    // },
    // {
    //   src:"./images/images3.jpg",
    //   alt: "Broaster Chicken",
    //   name:"Air Filters ",
    //   shoping:"Shop Now"
    // },
    {
      src: "./images/images4.jpg",
      alt: "Love Recruitment",
      name:"Batteries",
      shoping:"Shop Now"
    },
    // {
    //   src: "./images/images5.jpg",
    //   alt: "DC Estimation Construction Services ",
    //   name:"Exterior Accessories ",
    //   shoping:"Shop Now"
    // },
    // {
    //   src: "./images/images6.jpg",
    //   alt: "Leading Edge Carpentry Services",
    //   name:"Oil Filters",
    //   shoping:"Shop Now"
    // },
    {
      src: "./images/images7.jpg",
      alt: "Side Mirrors ",
      name:"Side Mirrors ",
      shoping:"Shop Now"
    },
    {
      src: "./images/images8.jpg",
      alt: "Sunshine Electrical & Solar Services",
      name:"Spark Plugs",
      shoping:"Shop Now"
    },
    
  ];
  const cars=[
    {
      src:"./images/ford-escape-2019.jpg",
      alt: "Ford Escape 2019 ",
      name:"Ford Escape 2019 ",
    },
    {
      src:"./images/forde-edge-2017.jpg",
      alt: "Ford Edge 2017",
      name:"Ford Edge 2017",
    },
    {
      src:"./images/ford-explorer-2019.jpg",
      alt: "Ford Explorer 2019",
      name:"Ford Explorer 2019 ",
    },
    {
      src:"./images/ford-focus-2017.jpg",
      alt: "Ford Focus 2017",
      name:"Ford Focus 2017 ",
    },
    {
      src:"./images/ford-fusion-2017.jpg",
      alt: "Ford Fusion 2017",
      name:"Ford Fusion 2017",
    },
    {
      src:"./images/ford-F150.jpg",
      alt: "Ford F150 2017 ",
      name:"Ford F150 2017",
    },
    {
      src:"./images/ford-Transit-2017.jpg",
      alt: "Ford Transit 2017",
      name:"Ford Transit 2017 ",
    },
  ]
  // const [data, setData] = useState([]);

  

  // useEffect(() => {
  //   // Fetch data from PHP backend
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost/fordsPart/showalldata.php');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // };
  return (
    <>
    <div className={Style.boxOuter}>
    <div className={Style.box}>
        <Banner1/>
        <Banner2/>
        <div className={Style.slider} style={{color:"white",width:"100% "}}>
      {/* <h2 className={Style.heading} style={{color:"white"}}>Car's Models</h2> */}
<Slider2 images={cars}/>
</div>
        <h2 className={Style.headings}>Find the Right Part for Your Vehicle</h2>
{/* <FilterCategory/> */}
<FilterCategory2/>

    </div>
    </div>
    <div className={Style.slider}>
      <h2 className={Style.heading}>Popular Parts</h2>
<Slider images={images}/>
</div>
<div className={Style.boxOuter}>
<div className={Style.box}>
       

<FilterCategory3/>

    </div>
    </div>
<Filter/>
{/* <div className={Style.motarcarftsection}>
  <img src="./images/Motorcraft.jpg" alt="" />
  <p>Actually, they do make 'em like they used to.</p>
</div> */}
   {/* <div>
      <h1>Data from PHP Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.model}<strong>{item.year}</strong></li>
        ))}
      </ul>
    </div> */}
    </>
  )
}

export default Index