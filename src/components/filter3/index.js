import React, { useState } from 'react';
import Style from "./filter3.module.css"



import Category from '../Category'
import Category2 from '../Category'
import Category3 from '../Category'
import Category4 from '../Category'






const App = () => {
  const [activeComponent, setActiveComponent] = useState('Model');

  const handleClick = (component) => {
    setActiveComponent(component);
  };
  const list =[
    {
        text:"Electronics",
        src:"./images/electronics.jpg"
    },
    {
        text:"Exterior Accessories",
        src:"./images/exterioraccessories.jpg"
    },
    {
        text:"Infotainment",
        src:"./images/inafatoinment.jpg"
    },
    {
        text:"Interior Accessories",
        
        src:"./images/interioraccesssories.jpg"
    },
    {
        text:"Other Accessories",
      
        src:"./images/otheraccessories.jpg"
    },
    {
        text:"Safety Accessories",
        src:"./images/safetyaccessories.jpg"
    },
    {
        text:"Wheels and Suspension",
        src:"./images/wheel.jpg"
    },
  ]
  const list2=[
    
      {
            text:"Brakes",
            src:"./images/brakes.jpg"
        },  
        {
            text:"Climate Control",
            src:"./images/climatecontrol.jpg"
        }, 
       
        {
            text:"Filters",
            src:"./images/filters.jpg"
        }, 
        {
            text:"Fluids, Chemicals and Lubricants",
            src:"./images/fluids.jpg"
        }, 
        {
            text:"Hardware and Fasteners",
            src:"./images/hardware.jpg"
        }, 
        {
            text:"Wiper and Washers",
            src:"./images/wiper.jpg"
        }, 
    
  ]
  const list3=[
    {
        text:"Engine",
        src:"./images/engine.jpg"
    }, 
    {
        text:"Transmission",
        src:"./images/transmission.jpg"
    }, 
  ]
  const list4=[
    {
        text:"Body",
        src:"./images/body.jpg"
    }, 
    {
        text:"Electrical",
        src:"./images/electrical.jpg"
    }, 
    {
        text:"Exhaust",
        src:"./images/exhaust.jpg"
    }, 
    {
        text:"Fuel System",
        src:"./images/fuelsystem.jpg"
    }, 
    {
        text:"Steering",
        src:"./images/steering.jpg"
    }, 
    {
        text:"Suspension",
        src:"./images/suspension.jpg"
    }, 
    {
        text:"Wheels and Tires",
        src:"./images/wheelsandtires.jpg"
    }, 
  ]

  let currentComponent = null;
  if (activeComponent === 'Model') {
    currentComponent = <Category grid={list}/>;
  } else if (activeComponent === 'Vin') {
    currentComponent = <Category2  grid={list2}/>;
  } else if (activeComponent === 'KeyWords') {
    currentComponent = <Category3 grid={list3} />;
  }
  else if (activeComponent === 'Repair') {
    currentComponent = <Category4 grid={list4} />;
  }

  return (
    <div className={Style.filter_outer}>
      <div className={Style.searchFords}>
        <h2 className={Style.heading}>Top Categories

</h2>
      </div>
    <div className={Style.button_container}>
      <button
        className={activeComponent === 'Model' ? Style["active"] : ''}
        onClick={() => handleClick('Model')}
      >
      Ford Accessories
      </button>
      <button
        className={activeComponent === 'Vin' ? Style["active"] : ''}
        onClick={() => handleClick('Vin')}
      >
        Maintenance
      </button>
      <button
        className={activeComponent === 'KeyWords' ? Style["active"] : ''}
        onClick={() => handleClick('KeyWords')}
      >
        Powertrain
      </button>
      <button
        className={activeComponent === 'Repair' ? Style["active"] : ''}
        onClick={() => handleClick('Repair')}
      >
        Repair
      </button>
    </div>
    <div>{currentComponent}</div>
  </div>
  );
};

export default App;

