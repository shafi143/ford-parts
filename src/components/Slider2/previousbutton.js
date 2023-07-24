import React from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import "./logoSlider2.css"

function PrevButton({ onClick }) {
    return (
      <div className="slider-prev" onClick={onClick} name='Previous'>
        <FaChevronLeft />
      </div>
    );
  }
export default PrevButton