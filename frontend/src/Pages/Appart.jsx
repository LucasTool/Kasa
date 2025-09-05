import React, { useEffect } from 'react';
import Header from '../Components/Header'
import Host from '../Components/Host'
import Collapse from '../Components/Collapse';
import { useNavigate, useParams } from 'react-router-dom';
import usePropertyDetails from '../Components/usePropertyDetails';
import Carrousel from '../Components/Caroussel';
import Footer from '../Components/Footer';
import Logement from '../Components/Logement';
import '../Pages/Appart.scss'



const Appart = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { infoProperties, hasError, isLoading } = usePropertyDetails(id)

    useEffect(() => {
        if (!isLoading && hasError) {
            navigate('/*')
        }
    }, [isLoading, hasError, navigate])
    if (isLoading) return <p>Chargement en cours...</p>
    if (!infoProperties) return null

    return (
        <>
            <Header />
            <main>
                <Carrousel images={infoProperties.pictures} alt={infoProperties.title} />
                
                <section className='Appart'>
                    <Logement
                    title={infoProperties.title} 
                    location={infoProperties.location}
                    tags={infoProperties.tags}
                    />
                    <Host
                    name={infoProperties.host.name}
                    picture={infoProperties.host.picture}
                    rating={infoProperties.rating}
                    />
                </section>

                <section className='CollapseAppart'>
                    <Collapse
                    title="Description"
                    text={infoProperties.description}
                    />
                    <Collapse
                        title="Equipement"
                        text={infoProperties.equipments.map((equipment, index) => (
                            <span key={index}>{equipment}</span>
                        ))}
                    />
                </section>

            </main>
            <Footer />
        </>
    );
};

export default Appart;