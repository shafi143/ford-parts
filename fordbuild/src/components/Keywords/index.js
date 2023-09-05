import React,{useState} from 'react'
import Style from "./keywords.module.css"

const Index = () => {
    const [inputValue, setInputValue] = useState("");

const [buttonDisabled, setButtonDisabled] = useState(true);

const handleInputChange = (event) => {
    
    const value = event.target.value;
    setInputValue(value);
    setButtonDisabled(value === "");
  };
  
  return (
    <>
    <div className={Style.vin}>
      
        <input
        type="text"
        className={Style.selectyear}
        placeholder="Enter Keyword/Part Number"
        value={inputValue}
        onChange={handleInputChange}
 
      />
      <button  disabled={buttonDisabled}
      className={buttonDisabled ? Style["disabled_button"] : Style["searchCatalog"]  }
      >
        Search Catalog{" "}
      </button>
    </div>
   
    <p className={Style.lastContent}>If you know the specific keyword or part number you would like to order, you may enter it here.</p>
    </>
  )
}

export default Index