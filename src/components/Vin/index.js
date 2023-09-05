import React, { useState } from 'react';
import Style from "./Vin.module.css";
import performVinLookup from '../../utils/api'; // Import the API function

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [vin,setVin]=useState("")
  
  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value)
 
    setInputDisabled(!value);
    
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setButtonDisabled(value === "");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
 
    try {
      const vinData = await performVinLookup(vin);
      console.log(vinData.manufacturer)
      if (vinData.manufacturer === 'Ford') {
      setResponse(vinData);

    }
    else{
     
   setResponse(null)
        setError(null);
      }
    } catch (error) {
      setError(error.message);
      setResponse(null);
    }
  };

  return (
    <>
      <form className={Style.vin} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Enter Vin Number'
          className={Style.selectyear}
          onChange={handleVinChange}
          value={vin}
        />
        <input
          type="text"
          className={Style.selectyear}
          placeholder="Enter Keyword/Part Number"
          value={inputValue}
          onChange={handleInputChange}
          disabled={inputDisabled}
        />
        <button
          disabled={buttonDisabled}
          className={buttonDisabled ? Style["disabled_button"] : Style["searchCatalog"]}
        >
          Search Catalog
        </button>
      </form>
      
      <p className={Style.lastContent}>We recommend Searching by VIN when ordering parts.</p>
      {error && <p>Error: {error}</p>}
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </>
  )
}

export default Index;
