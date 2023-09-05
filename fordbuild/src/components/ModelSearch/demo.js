
import React, { useEffect, useState } from "react";

import Style from "./modelsearch.module.css";


const Index = () => {

  const [year, setYear] = useState("select-year");
  const [selectMake, setSelectMake] = useState("Select Make");
  const [modelValue, setModelValue] = useState("Select Model");
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectMakeDisabled, setSelectMakeDisabled] = useState(true);
  const [modelDisabled, setModelDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showDataExists, setShowDataExists] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setButtonDisabled(value === "");
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
    if (value === "select-year") {
      setSelectMakeDisabled(true);
    } else {
      setSelectMakeDisabled(false);
    }
  };

  const selectMakeChange = (event) => {
    const value = event.target.value;
    setSelectMake(value);
    if (value === "Select Make") {
      setModelDisabled(true);
    } else {
      setModelDisabled(false);
    }
  };

  const modelChange = (event) => {
    const value = event.target.value;
    setModelValue(value);
    if (value === "Select Model") {
      setInputDisabled(true);
    } else {
      setInputDisabled(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost/fordsPart/vehicle.php?year=${year}&make=${selectMake.toLowerCase()}&model=${modelValue.toLowerCase()}&keyword=${inputValue}`
      );
      const json = await response.json();

      // Check for errors in the response
      if (response.ok && json.length > 0) {
        setData(json);

        setError(null);
        setShowDataExists(true);
      } else {
        setError(json.error);
        setData(null);
        setShowDataExists(false);
        setErrorMessage(true);
      }
    } catch (error) {
      setError("Error fetching data");
      setData(null);
      setShowDataExists(false);
      setErrorMessage(true);
    }
  };
  useEffect(()=>{
    return  console.log([data]);
  },[data])

  
 
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetchData();
   
    
  };

  let maxOffset = 23;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>;
  });

  return (
    <>
      {" "}
      <form style={{ margin: "0", width: "100%" }} onSubmit={handleSubmit}>
        <div className={Style.model}>
          <select
            name="model"
            id="model"
            placeholder="Select Model"
            className={Style.selectyear}
            value={year}
            onChange={handleYearChange}
          >
            <option value="Select Year">Select Year</option>
            {yearList}
          </select>
          <select
            name="make"
            id="Select Make"
            className={Style.selectyear}
            value={selectMake}
            onChange={selectMakeChange}
            disabled={selectMakeDisabled}
          >
            <option value="Select Make">Select Make</option>
            <option value="Ford">Ford</option>
            <option value="Lincoln">Lincoln</option>
          </select>
          <select
            name="model"
            id="Select Model"
            className={Style.selectyear}
            value={modelValue}
            onChange={modelChange}
            disabled={modelDisabled}
          >
            <option value="Select Model">Select Model</option>
            <option value="Aviator">Aviator</option>
            <option value="Corsair">Corsair</option>
            <option value="Nautilus">Nautilus</option>
            <option value="Navigator">Navigator</option>
          </select>
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
            className={
              buttonDisabled ? Style["disabled_button"] : Style["searchCatalog"]
            }
            type="submit"
          >
            Search Catalog
          </button>
        </div>
      </form>
     
   
     
      {showDataExists && (
        <div>
          <p>{selectMake}</p>
          <p>{modelValue}</p>
          
        </div>
      )}
      {!showDataExists && errorMessage && (
        <div>
          <p>{error}Cannot Found </p>
        </div>
      )}
    </>
  );
};

export default Index;
