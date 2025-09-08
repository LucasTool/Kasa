import usePropertyDetails from '../Components/usePropertyDetails';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../Components/Caroussel.scss'
import ArrowLeft from '../assets/angle-left.png'
import ArrowRight from '../assets/angle-right.png'

const Carrousel = ({ images }) => {
    const { id } = useParams()
    const { infoProperties, hasError, isLoading } = usePropertyDetails(id)
    const [Index, SetIndex] = useState(0)
    const NbSlides = images.length

    if (isLoading) return <p>Chargement...</p>;
    if (hasError || !infoProperties) return <p>Erreur de chargement</p>;

    const NextSlide = () => {
        SetIndex((Index) => Index === NbSlides - 1 ? 0 : Index + 1,)
    }

    const PreviousSlide = () => {
        SetIndex((Index) => Index === 0 ? NbSlides - 1 : Index - 1,)
    }
    
    if (NbSlides === 1) {
        return (
            <section className='carrousel'>
                <img className='picture' src={images[0]} alt={`Slide ${Index + 1}`} />
            </section>
        )
    }


    return (
        <section className='carrousel'>
            <button className='carrouselBtn leftcarrouselBtn'>
                <img src={ArrowLeft} onClick={PreviousSlide} alt="Précédent" />
            </button>
            <img className='picture' src={images[Index]} alt={`Slide ${Index + 1}`} />
            <button className='carrouselBtn rightcarrouselBtn'>
                <img src={ArrowRight} onClick={NextSlide} alt="Suivant" />
            </button>
            <div className='counter'>{Index + 1} / {NbSlides}</div>
        </section>
    );
};

export default Carrousel;