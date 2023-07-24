// import axios from "axios";
// import { useEffect, useState } from "react";

// const Jsoncheck = () => {
//   const [data, setData] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedMake, setSelectedMake] = useState("");
//   const [models, setModels] = useState([]);
//   const[selectMakeDisabled,setSelectMakeDisabled]=useState(true)
//   const [modelDisabled,setModelDisabled]=useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/fordsPart/showalldata.php"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const uniqueYears = [...new Set(data.map((data) => data.year))];
//   const makes = [...new Set(data.map((data) => data.make))];

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//     setSelectedMake("");
//     setModels([]);
//     if (selectedYear === "select-year") {
//         setSelectMakeDisabled(true);
//       } else {
//         setSelectMakeDisabled(false);
//       }

//   };

//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//     const filteredModels = data.filter(
//       (item) => item.year === selectedYear && item.make === event.target.value
//     );
//     const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
//     setModels(uniqueModels);
//     if (selectedMake === "Select Make") {
//         setModelDisabled(true);
//       } else {
//         setModelDisabled(false);
//       }
//   };

//   return (
//     <div style={{ paddingTop: "150px" }}>
//       <select name="year" id="year" value={selectedYear} onChange={handleYearChange}>
//         <option value="select-year">Select year</option>
//         {uniqueYears.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select name="make" value={selectedMake} onChange={handleMakeChange} disabled={selectMakeDisabled}>
//         <option value="Select make">Select make</option>
//         {makes.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select name="model" id="model" disabled={modelDisabled}>
//         <option value="Select model">Select model</option>
//         {models.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Jsoncheck;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const Jsoncheck = () => {
//   const [data, setData] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedMake, setSelectedMake] = useState("");
//   const [models, setModels] = useState([]);
//   const [selectMakeDisabled, setSelectMakeDisabled] = useState(true);
//   const [modelDisabled, setModelDisabled] = useState(true);
//   const [filteredData, setFilteredData] = useState([]);
//   const [selectedModel,setSelectedModel]=useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/fordsPart/showalldata.php"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const uniqueYears = [...new Set(data.map((data) => data.year))];
//   const makes = [...new Set(data.map((data) => data.make))];

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//     setSelectedMake("");
//     setModels([]);
//     if (selectedYear === "select-year") {
//       setSelectMakeDisabled(true);
//     } else {
//       setSelectMakeDisabled(false);
//     }
//   };

//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//     const filteredModels = data.filter(
//       (item) => item.year === selectedYear && item.make === event.target.value
//     );
//     const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
//     setModels(uniqueModels);
//     if (selectedMake === "Select Make") {
//       setModelDisabled(true);
//     } else {
//       setModelDisabled(false);
//     }
//   };

// const selectModel=(event)=>{
// setSelectedModel(event.target.value)
// }

//   const handleButtonClick = () => {
//     const filteredData = data.filter(
//       (item) => item.year === selectedYear && item.make === selectedMake && item.model === selectedModel
//     );
//     setFilteredData(filteredData);
//   };

//   return (
//     <div style={{ paddingTop: "150px" }}>
//       <select name="year" id="year" value={selectedYear} onChange={handleYearChange}>
//         <option value="select-year">Select year</option>
//         {uniqueYears.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select name="make" value={selectedMake} onChange={handleMakeChange} disabled={selectMakeDisabled}>
//         <option value="Select make">Select make</option>
//         {makes.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select name="model" id="model" disabled={modelDisabled} value={selectedModel}>
//         <option value="Select model"
//         onChange={selectModel }>Select model</option>
//         {models.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleButtonClick}>Show Data</button>
//       {filteredData.length > 0 && (
//         <div>
//           <h2>Filtered Data:</h2>
//           <ul>
//             {filteredData.map((item, index) => (
//               <li key={index}>{console.log(item)}
//               <p>{item.model}</p></li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Jsoncheck;
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Jsoncheck = () => {
//   const [data, setData] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [selectedMake, setSelectedMake] = useState("");
//   const [selectedModel, setSelectedModel] = useState("");
//   const [models, setModels] = useState([]);
//   const [selectMakeDisabled, setSelectMakeDisabled] = useState(true);
//   const [modelDisabled, setModelDisabled] = useState(true);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost/fordsPart/showalldata.php"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const uniqueYears = [...new Set(data.map((data) => data.year))];
//   const makes = [...new Set(data.map((data) => data.make))];

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//     setSelectedMake("");
//     setSelectedModel("");
//     setModels([]);
//     if (selectedYear === "select-year") {
//       setSelectMakeDisabled(true);
//     } else {
//       setSelectMakeDisabled(false);
//     }
//   };

//   const handleMakeChange = (event) => {
//     setSelectedMake(event.target.value);
//     setSelectedModel("");
//     const filteredModels = data.filter(
//       (item) => item.year === selectedYear && item.make === event.target.value
//     );
//     const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
//     setModels(uniqueModels);
//     if (event.target.value === "Select make") {
//       setModelDisabled(true);
//     } else {
//       setModelDisabled(false);
//     }
//   };

//   const handleButtonClick = () => {
//     const filteredData = data.filter(
//       (item) => item.year === selectedYear && item.make === selectedMake
//     );
//     setFilteredData(filteredData);
//   };

//   return (
//     <div style={{ paddingTop: "150px" }}>
//       <select
//         name="year"
//         id="year"
//         value={selectedYear}
//         onChange={handleYearChange}
//       >
//         <option value="select-year">Select year</option>
//         {uniqueYears.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select
//         name="make"
//         value={selectedMake}
//         onChange={handleMakeChange}
//         disabled={selectMakeDisabled}
//       >
//         <option value="Select make">Select make</option>
//         {makes.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <select
//         name="model"
//         id="model"
//         disabled={modelDisabled}
//         value={selectedModel}
//         onChange={(event) => setSelectedModel(event.target.value)}
//       >
//         <option value="Select model">Select model</option>
//         {models.map((value) => (
//           <option key={value} value={value}>
//             {value}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleButtonClick}>Show Data</button>
//       {selectedModel && (
//         <div>
//           <h2>Selected Model Information:</h2>
//           {data.map((item, index) => {
//             if (
//               item.year === selectedYear &&
//               item.make === selectedMake &&
//               item.model === selectedModel
//             ) {
//               return (
//                 <div key={index}>
//                   <p>Property 1: {item.model}</p>
//                   <p>Property 2: {item.make}</p>
//                   {/* Add more properties here */}
//                 </div>
//               );
//             }
//             return null;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Jsoncheck;

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

  const uniqueYears = [...new Set(data.map((data) => data.year))];
  const makes = [...new Set(data.map((data) => data.make))];

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
    const uniqueModels = [...new Set(filteredModels.map((item) => item.model))];
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
