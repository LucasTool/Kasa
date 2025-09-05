import './Logement.scss'

const Logement = ({title, location, tags}) => {
    return (
        <article className='InfoLogement'>
            <h2>{title}</h2>
            <h3>{location}</h3>
            <div className='Tags'>{tags.map((tag, index) => (
                <span key={index} className='Tag'>{tag}</span>
            ))}</div>
        </article>
    );
};

export default Logement;