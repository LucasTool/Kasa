import { NavLink } from 'react-router-dom';
import '../Components/Card.scss';

const Card = ({id, cover, title}) => {
    
    return (
        <NavLink to={`Appart/${id}`}>
            <article className='card' key={id} >
                <img src={cover} alt="{title}" />
                <h3>{title}</h3>
            </article>
        </NavLink>
    );
};

export default Card;