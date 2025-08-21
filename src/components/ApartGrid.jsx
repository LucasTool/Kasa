import React from 'react';
import "./ApartGrid.css";
import Apart from './Apart.jsx';

function ApartGrid() {
  return (
    <div className='grid'>
        <Apart/>
        <Apart/>
        <Apart/>
    </div>
  )
}

export default ApartGrid;