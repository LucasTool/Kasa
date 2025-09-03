import Header from "../Components/Header.jsx"
import Cards from '../Components/Cards.jsx';
import Banner from '../Components/Banner.jsx';
import Footer from '../Components/Footer.jsx';




const Home = () => {

    return (
        <>
            <Header />
            <main>
                <Banner />
                <Cards />
            </main>
            <Footer />
        </>
    );
};

export default Home;