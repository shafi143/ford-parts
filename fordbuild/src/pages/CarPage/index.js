import React, { useEffect,  } from 'react'
import Style from "./carpage.module.css"
import CarParts from '../../components/carParts'
import { useParams } from 'react-router-dom';
// import { cars } from '../../JsonData';
const CarPage = () => {
  // const[carParts,setCarParts]=useState([])
  const { carCategory } = useParams();
  
  useEffect(() => {
    // const carPartsData = cars.filter(part => part.category === carCategory);
    // const productsInCategory = cars.filter(product => product.carCategory === carcategory);
    // setCarParts(carPartsData);
  }, [carCategory]);
    const obj = {heading: 'Spark Plugs', price: 29, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"/images/SparkPlugs1.jpg"}
    const obj2 = {heading: 'Body Parts', price: 100, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"/images/Body-Parts1.jpg"}
    const obj3 = {heading: 'Side Mirror', price: 49, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"/images/SideMirror1.jpg"}
    const obj4 = {heading: 'Batteries', price: 70, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"/images/Batteries1.jpg"}
    const obj5 = {heading: 'Oil Change Kit', price: 200, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"/images/OilChangeKit1.jpg"}
  // const showcar = cars.map((value)=>value.carcategory)
 
    return (
    <div className={Style.box}>
    <h1 style={{marginBottom:"20px"}}>{carCategory} Parts</h1>
  
    <CarParts {...obj}    />
    <CarParts {...obj2}    />
    <CarParts {...obj3}    />
    <CarParts {...obj4}    />
    <CarParts {...obj5}    />
    </div>
  )
}

export default CarPage