
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
import {PopuplarParts} from "../../JsonData/index"

const Index = () => {  
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
<Slider images={PopuplarParts}/>
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