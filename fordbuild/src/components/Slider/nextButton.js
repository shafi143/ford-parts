import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import "./logoSlider.css"
function NextButton({ onClick }) {
    return (
      <div className="slider-next" onClick={onClick} name='Next'>
        <FaChevronRight />
      </div>
    );
    }
export default NextButton;