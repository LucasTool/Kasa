import React, { useState } from 'react';
import ArrowUp from '../assets/angle-small-up.png';
import ArrowDown from '../assets/angle-small-down.png';
import './Collapse.scss'

const Collapse = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className='collapseContainer'>
            <div className='collapseTitle' >
                <p>{title}</p>
                <img
                   className="arrow"
                   onClick={() => setIsOpen(!isOpen)}
                   src={isOpen ? ArrowUp : ArrowDown}
                   alt={isOpen ? "arrow up" : "arrow down"}
                   role="button"
                   />
            </div>
            <div className={`collapseText ${isOpen ? 'Out' : ''}`}>
                {text}
                </div>
        </article>
       
    )
};

export default Collapse;