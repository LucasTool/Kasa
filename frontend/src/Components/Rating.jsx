import React from 'react';
import './Rating.scss'


const Rating = ({ stars }) => {
    const FullStar = <i data-testid="full-star" className="fa-solid fa-star fa-xl"></i>
    const EmptyStar = <i data-testid="empty-star" className="fa-solid fa-star fa-xl empty"></i>

    return (
        <div className='rating'>
            {Array.from({ length: 5 }, (_, index) => (
                <span className='star' key={index}>
                    {index < stars ? FullStar : EmptyStar}
                </span>
            ))}
        </div>
    );
};

export default Rating;