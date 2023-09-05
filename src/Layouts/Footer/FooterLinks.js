import React from 'react'
import Style from "./FoterLinks.module.css"

import Links from './Links'
const Index = (props) => {
    const list1=[
        {
   name:"Ford Accessories",
   link:"#"
        },
        {
            name:"Body",
            link:"#"
},
{
    name:"Brakes",
    link:"#"
},
{
    name:"Climate Control",
    link:"#"
},
{
    name:"Electrical",
    link:"#"
},
{
    name:"Engine",
    link:"#"
},
{
    name:"Exhaust",
    link:"#"
},
{
    name:"Filters",
    link:"#"
},
{
    name:"Fluids, Chemicals and Lubricants",
    link:"#"
},
{
    name:"Fuel System",
    link:"#"
},
{
    name:"Hardware and Fasteners ",
    link:"#"
},
{
    name:"Steering",
    link:"#"
},
{
    name:"Suspension",
    link:"#"
},
{
    name:"Transmission",
    link:"#"
},
{
    name:"Wheels and Tires",
    link:"#"
},
{
    name:"Wiper and Washer",
    link:"#"
},

    ]
    const list2=[
        {
            name:"Create Account",
            link:"/registeration"
        },
        {
            name:"Sign In",
            link:"#"
        },
    ]
    const list3=[
        {
            name:"Ford Accessories",
            link:"#"
        },
        {
            name:"Powertrain",
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
            name:"Return Policy",
            link:"#"
        },
    ]
    const list4=[
        {
            name:"Ford Vehicles",
            link:"#"
        },
        {
            name:"Lincoln Vehicles",
            link:"#"
        },
        {
            name:"Contact Ford  ",
            link:"#"
        },
        {
            name:"Racing",
            link:"#"
        },
        {
            name:"Technical Career Entry",
            link:"#"
        },
        {
            name:"Ford Technical Resources",
            link:"#"
        },
        {
            name:"Motorcraft Technical Resources",
            link:"#"
        },
        {
            name:"Ford Charge Stations",
            link:"#"
        },
        {
            name:"Ford Performance Parts",
            link:"#"
        },
        {
            name:"Ford Collision",
            link:"#"
        },
        {
            name:"Ford Fleet",
            link:"#"
        },
        {
            name:"Power Stroke Diesel",
            link:"#"
        },
        {
            name:"Tire Finder",
            link:"#"
        },
        {
            name:"Vintage Parts",
            link:"#"
        },
    ]
  return (
    <div className={Style.footerLInksOuter}>
  <Links header={"Shop Parts"} links={list1}/>
  <Links header={"My Account"} links={list2}/>
  <Links header={"Resources"} links={list3}/>
  <Links header={"Related Links" } links={list4}/>

    </div>
  )
}

export default Index