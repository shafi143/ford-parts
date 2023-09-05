import React, { useEffect, useState } from "react";
import Style from "./modelsearch.module.css";
import axios from "axios";
import {  Link } from 'react-router-dom';
const Index = () => {
  // const [year, setYear] = useState("select-year");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  // const [selectMake, setSelectMake] = useState("Select Make");
  const [modelValue, setModelValue] = useState("Select Model");
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [selectMakeDisabled, setSelectMakeDisabled] = useState(true);
  const [modelDisabled, setModelDisabled] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(true);
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(false);
  // const [showDataExists, setShowDataExists] = useState(false);
  const [post, setPost] = useState([]);
  const [models, setModels] = useState([]);
  const [output, setoutput] = useState([]);
  const [errorMEssage,setErrorMessage]=useState(false)

  // const navigate  = useNavigate();
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setSelectedYear(value);
    setSelectedMake("");
    setModelValue("");
    if (value === "select-year") {
      setSelectMakeDisabled(true);
    } else {
      setSelectMakeDisabled(false);
    }
  };

  // const handleMakeChange = (event) => {
  //   setSelectedMake(event.target.value);
  //   const filteredModels = data.filter(
  //     (item) => item.year === selectedYear && item.make === event.target.value
  //   );
  //   const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
  //   setModels(uniqueModels);
  //   if (selectedMake === "Select Make") {
  //       setModelDisabled(true);
  //     } else {
  //       setModelDisabled(false);
  //     }
  // };

  const selectMakeChange = (event) => {
    setSelectedMake(event.target.value);
    const filteredModels = post.filter(
      (item) => item.year === selectedYear && item.make === event.target.value
    );
    const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
    setModels(uniqueModels);
    if (selectedMake === "Select Make") {
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
      // setButtonDisabled(true);
    } else {
      // setButtonDisabled(false);
      setInputDisabled(false);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost/fordsPart/vehicle.php?year=${year}&make=${selectMake.toLowerCase()}&model=${modelValue.toLowerCase()}&keyword=${inputValue}`
  //     );
  //     const json = await response.json();

  //     // Check for errors in the response
  //     if (response.ok && json.length > 0) {
  //       setData(json);

  //       setError(null);
  //       setShowDataExists(true);
  //     } else {
  //       setError(json.error);
  //       setData(null);
  //       setShowDataExists(false);
  //       setErrorMessage(true);
  //     }
  //   } catch (error) {
  //     setError("Error fetching data");
  //     setData(null);
  //     setShowDataExists(false);
  //     setErrorMessage(true);
  //   }
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/fordsPart/backend.php"
        );

        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const uniqueYears = [...new Set(post.map((post,index) => post.year,))];
  const makes = [...new Set(post.map((post) => post.make))];

  const handleSubmit = (event) => {
    event.preventDefault();

    const filterAll = post.filter(
      (item) => item.year === selectedYear && item.make === selectedMake && item.model === modelValue && item.keywords === inputValue ,
    );
    // const sampleData = [
    //   { year: selectedYear, make: selectedMake, model: modelValue,keywords:inputValue,id:post.id },
     
    // ];
  if (filterAll.length > 0) {
    setoutput(filterAll);
    setErrorMessage(false);
  } else {
    setoutput([]);
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
      
    }, 3000);
  }
    setoutput(filterAll)
  
    // fetchData();
  };
  // const handleDetailClick = (id) => {
  //   // Redirect to the detail page using React Router
  //   // You can replace "detail/:id" with the actual path of your detail page
  //   // and pass the id of the selected item as a parameter
  //   navigate (`/detail/${id}`);
  // };
  return (
    <>
      {" "}
      <form style={{ margin: "0", width: "100%" }} onSubmit={handleSubmit}>
        <div className={Style.model} id={Style.modelgrid}>
          <select
            name="model"
            id="model"
            placeholder="Select Model"
            className={Style.selectyear}
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="Select Year">Select Year</option>
            {uniqueYears.reverse().map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
          </select>
          <select
            name="make"
            id="Select Make"
            className={Style.selectyear}
            value={selectedMake}
            onChange={selectMakeChange}
            disabled={selectMakeDisabled}
          >
            <option value="Select Make">Select Make</option>
            {makes.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
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
            {models.map((value, index) => (
              <option value={value} key={index}>
                {value}
              </option>
            ))}
        
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
      <div>
        {output.map((value) => (
          <ul>
            <li>{value.year}</li>
            <li>{value.id}</li>
            <li>{value.make}</li>
            <li>{value.model}</li>
            <li>{value.keywords}</li>
            <li>
            <Link to={`/detail/${value.id}`}>view details</Link>

            </li>
          </ul>
        ))}
      </div>
      {errorMEssage && (
        <p>Not Found</p>
      )}
      {/* {showDataExists && (
        <div>
          <p>{selectMake}</p>
          <p>{modelValue}</p>
          
        </div>
      )}
      {!showDataExists && errorMessage && (
        <div>
          <p>{error}Cannot Found </p>
        </div> */}
      {/* )} */}
    </>
  );
};

export default Index;
