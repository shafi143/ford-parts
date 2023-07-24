import React, { useState } from 'react';
import "./Slider.css"
import Model from "../ModelSearch"
import Vin from "../Vin"
import KeyWords from "../Keywords"







const App = () => {
  const [activeComponent, setActiveComponent] = useState('Model');

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  let currentComponent = null;
  if (activeComponent === 'Model') {
    currentComponent = <Model />;
  } else if (activeComponent === 'Vin') {
    currentComponent = <Vin />;
  } else if (activeComponent === 'KeyWords') {
    currentComponent = <KeyWords />;
  }

  return (
    <div className="filter_outer">
      <div className='searchFords'>
        
        <h2><i class="fa fa-search" aria-hidden="true" style={{marginRight:"8px"}}></i>Search Ford Parts

</h2>
      </div>
    <div className="button-container">
      <button
        className={activeComponent === 'Model' ? 'active' : ''}
        onClick={() => handleClick('Model')}
      >
        Model
      </button>
      <button
        className={activeComponent === 'Vin' ? 'active' : ''}
        onClick={() => handleClick('Vin')}
      >
        VIN
      </button>
      <button
        className={activeComponent === 'KeyWords' ? 'active' : ''}
        onClick={() => handleClick('KeyWords')}
      >
        Keyword/Part#
      </button>
    </div>
    <div>{currentComponent}</div>
  </div>
  );
};

export default App;

