import React from 'react'
import Style from "./carpage.module.css"
import CarParts from '../../components/carParts'
const CarPage = () => {
    const obj = {heading: 'Spark Plugs', price: 29, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"./images/images8.jpg"}
    const obj2 = {heading: 'Body Parts', price: 100, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"./images/images7.jpg"}
    const obj3 = {heading: 'Side Mirror', price: 49, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"./images/images2.jpg"}
    const obj4 = {heading: 'Batteries', price: 70, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"./images/images3.jpg"}
    const obj5 = {heading: 'Oil Change Kit', price: 200, description: 'A automobile is a substantial piece of art. An average car contains 30,000 different parts. It’s challenging to remember or even be aware of the names of the countless automotive parts because there are so many of them. Knowing the names of the various automotive parts is really helpful if you’re an engineer or just a car owner, which is what most people are. There are numerous other items to keep in mind in addition to the most popular ones like seats, tires, speedometers, and windscreens.',image:"./images/images6.jpg"}
  return (
    <div className={Style.box}>
    
    <CarParts {...obj}    />
    <CarParts {...obj2}    />
    <CarParts {...obj3}    />
    <CarParts {...obj4}    />
    <CarParts {...obj5}    />
    </div>
  )
}

export default CarPage