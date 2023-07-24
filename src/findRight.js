import React, { useState } from 'react';
import "./findRight.css"

const FindPartComponent = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedPart, setSelectedPart] = useState('');

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handlePartChange = (event) => {
    setSelectedPart(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the search or any other action based on the selected options
    console.log('Selected Make:', selectedMake);
    console.log('Selected Model:', selectedModel);
    console.log('Selected Year:', selectedYear);
    console.log('Selected Part:', selectedPart);

    // Reset the form after submission
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
    setSelectedPart('');
  };

  return (
    <div className='container'>
      <h2>Find the Right Part for Your Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <select value={selectedMake} onChange={handleMakeChange}>
            <option value="">Select Make</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Toyota">Toyota</option>
            {/* Add more make options */}
          </select>
        </div>

        <div>
          <label>Model:</label>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select Model</option>
            {/* Add model options based on the selected make */}
            {selectedMake === 'Ford' && (
              <>
                <option value="Mustang">Mustang</option>
                <option value="F-150">F-150</option>
                {/* Add more Ford model options */}
              </>
            )}
            {selectedMake === 'Chevrolet' && (
              <>
                <option value="Camaro">Camaro</option>
                <option value="Silverado">Silverado</option>
                {/* Add more Chevrolet model options */}
              </>
            )}
            {/* Add model options for other makes */}
          </select>
        </div>

        <div>
          <label>Year:</label>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {/* Add year options based on the selected make and model */}
            {selectedMake !== '' && selectedModel !== '' && (
              <>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                {/* Add more year options */}
              </>
            )}
          </select>
        </div>

        <div>
          <label>Part:</label>
          <input
            type="text"
            value={selectedPart}
            onChange={handlePartChange}
            placeholder="Enter Part Name"
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FindPartComponent;
