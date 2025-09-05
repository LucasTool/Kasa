import React from 'react';
import Rating from '../Components/Rating';
import './Host.scss'


const Host = ({name, picture, rating}) => {
    return (
        <article className='InformationsHoteLogement'>
                        <div className='HostInfo'>
                            <h3 className='HostName'>{name}</h3>
                            <img className='HostPicture'
                                src={picture}
                                alt={`photo de profil de ${name}`}
                            />
                        </div>
                        <Rating stars={rating} />
                    </article>
    );
};

export default Host;