import React,{useState,useEffect} from 'react'
import Style from "./input.module.css"
const Index = (props) => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [showErrorText, setShowErrorText] = useState(false);
  
    useEffect(() => {
      if (showErrorText && name.trim() !== '') {
        setShowErrorText(false);
      }
    }, [name, showErrorText]);
  
    const handleBlur = () => {
      if (name.trim() === '') {
        setError(true);
        setShowErrorText(true);
      }
    };
  return (
    <div className={Style.inputFiled}>
           <label htmlFor={props.name}>{props.title}</label><br />
                <input type={props.type} id={props.name}
                 className={error ? `${Style.error}` : ''}
                 onBlur={handleBlur}
                 onChange={(e) =>  setName(e.target.value) }
                  
                />
                {showErrorText && <p style={{ color: 'red' }}>{props.errormessage}</p>}
    </div>
  )
}

export default Index