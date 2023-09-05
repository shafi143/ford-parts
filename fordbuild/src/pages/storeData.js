import React, {  useState } from "react";
// import axios from "axios";

const Form = () => {

//   const initialState = {
//     stack: [],
//   };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'PUSH':
//       return {
//         ...state,
//         stack: [...state.stack, action.payload],
//       };
//     case 'POP':
//       return {
//         ...state,
//         stack: state.stack.slice(0, state.stack.length - 1),
//       };
//     default:
//       return state;
//   }
// }
// const [state, dispatch] = useReducer(reducer, initialState);
// const handlePush = () => {
//   const value = prompt('Enter a value to push:');
//   if (value) {
//     dispatch({ type: 'PUSH', payload: value });
//   }
// };

// const handlePop = () => {
//   dispatch({ type: 'POP' });
// };


  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const yearChange=(e)=>{
    setYear(e.target.value)
  }
  
const disabled = !year || !make || !model;

const makeChange=(e)=>{
    setMake(e.target.value)
}
const modelChange=(e)=>{
    setModel(e.target.value)
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!year || !make || !model) {
      setError("Please fill in all required fields.");
      // event.preventDefault()
      return;
    }


    const formData = new FormData();
    formData.append('year', year);
    formData.append('make', make);
   
    formData.append('model', model);

    try {
      // Send the form data to the PHP script
      const response = await fetch('http://localhost/fordspart/store.php', {
        method: 'POST',
        body: formData
      });

      // Check the response status
      if (response.ok) {
        setSuccessMessage("Data submitted successfully.");
      setTimeout(() => {
        setSuccessMessage("submition successful");
      }, 2000);
        // Redirect to the desired page
        // setIsModalOpen(true);
        // window.location.href = '/';
      } else {
        // Handle error case
        console.error('Form submission failed.');
      }
    } catch (error) {
      // Handle error case
      console.error('An error occurred while submitting the form.', error);
    }





    // const data = {
    //   year: year,
    //   make: make,
    //   model: model,
    // };

    // try {
    //   const response = await axios.post("http://localhost/fordspart/store.php", data);
    //   console.log("Data posted successfully:", response);
    //   console.log(data)
    //   const { id, year: responseYear, make: responseMake, model: responseModel } = response.data;
    //   console.log("Inserted ID:", id);
    //   console.log("Year:", responseYear);
    //   console.log("Make:", responseMake);
    //   console.log("Model:", responseModel);
    //   setYear("");
    //   setMake("");
    //   setModel("");
    //   setError(null);
    // } catch (error) {
    //   console.error("Error posting data:", error);
    //   setError("An error occurred while submitting the form.");
    // }
  };

  return (
    <div style={{ paddingTop: "150px", width: "80%", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={year}
            onChange={yearChange}
          />
        </div>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={make}
            onChange={makeChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={model}
            onChange={modelChange}
          />
        </div>
        {error && <p>{error}</p>}

        <button type="submit" style={{ width: "150px", height: "70px" }} disabled={disabled}>
          Submit
        </button>
        {successMessage && <p>{successMessage}</p>} 
      </form>
      {/* <ul> */}
        {/* {state.stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
<button onClick={handlePush}>increment</button>
<button onClick={handlePop}>decrement</button> */}

    </div>
  );
};

export default Form;
