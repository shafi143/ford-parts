import React,{useState} from 'react'
import Style from "./Vin.module.css"

const Index = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputDisbaled,setInputDisbaled]=useState(true)
const [buttonDisabled, setButtonDisabled] = useState(true);
const handleVinChange=(event)=>{
    const value = event.target.value;
    if (!value){
        setInputDisbaled(true)
    }else{

        setInputDisbaled(false);
    }
    
}
const handleInputChange = (event) => {
    
    const value = event.target.value;
    setInputValue(value);
    setButtonDisabled(value === "");
  };
  return (
    <>
    <div className={Style.vin}>
        <input type="text" placeholder='Enter Vin Number'
          className={Style.selectyear}
        onChange={handleVinChange}
        />
        <input
        type="text"
        className={Style.selectyear}
        placeholder="Enter Keyword/Part Number"
        value={inputValue}
        onChange={handleInputChange}
        disabled={inputDisbaled}
      />
      <button  disabled={buttonDisabled}
      className={buttonDisabled ? Style["disabled_button"] : Style["searchCatalog"]  }
      >
        Search Catalog{" "}
      </button>
    </div>
    <p className={Style.lastContent}>We recommend Searching by VIN when ordering parts.</p>
    </>
  )
}

export default Index