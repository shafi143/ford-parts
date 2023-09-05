

import axios from "axios";
import { useEffect, useState } from "react";

const Jsoncheck = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [models, setModels] = useState([]);
  const [selectMakeDisabled, setSelectMakeDisabled] = useState(true);
  const [modelDisabled, setModelDisabled] = useState(true);
  const [selectedModelData, setSelectedModelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost/fordsPart/showalldata.php"
        );
        // console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const uniqueYears = [...new Set(data.map((data,index) =>({year:data.year,key :index}) ))];
  const makes = [...new Set(data.map((data, index) => ({ key: index, make: data.make })))];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMake("");
    setSelectedModel("");
    setModels([]);
    if (selectedYear === "select-year") {
      setSelectMakeDisabled(true);
    } else {
      setSelectMakeDisabled(false);
    }
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
    setSelectedModel("");
    const filteredModels = data.filter(
      (item) => item.year === selectedYear && item.make === event.target.value
    );
    const uniqueModels = [...new Set(filteredModels.map((item,index) =>({model:item.model,key:index}) ))];
    setModels(uniqueModels);
    if (event.target.value === "Select make") {
      setModelDisabled(true);
    } else {
      setModelDisabled(false);
    }
  };

  const handleButtonClick = () => {
    const modelData = data.find(
      (item) =>
        item.year === selectedYear &&
        item.make === selectedMake &&
        item.model === selectedModel
    );
    setSelectedModelData(modelData);
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <select
        name="year"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="select-year">Select year</option>
        {uniqueYears.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <select
        name="make"
        value={selectedMake}
        onChange={handleMakeChange}
        disabled={selectMakeDisabled}
      >
        <option value="Select make">Select make</option>
        {makes.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <select
        name="model"
        id="model"
        disabled={modelDisabled}
        value={selectedModel}
        onChange={(event) => setSelectedModel(event.target.value)}
      >
        <option value="Select model">Select model</option>
        {models.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleButtonClick}>Show Model Data</button>
      {selectedModelData && (
        <div>
          <h2>Selected Model Data:</h2>

          <p>Model : {selectedModelData.model}</p>
          <p>Make : {selectedModelData.make}</p>
          <p>Id : {selectedModelData.id}</p>
          {/* Add more properties here */}
        </div>
      )}
    </div>
  );
};

export default Jsoncheck;
