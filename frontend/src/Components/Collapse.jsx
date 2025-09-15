import React, { useState } from 'react';
import ArrowUp from '../assets/angle-small-up.png';
import './Collapse.scss'

const Collapse = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <article className="collapseContainer">
            <div className="collapseTitle">
                <p>{title}</p>
                <img
                   className={`arrow ${isOpen ? 'Down' : 'Up'}`}
                   onClick={() => setIsOpen(!isOpen)}
                   src={ArrowUp}
                   alt="arrow"
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