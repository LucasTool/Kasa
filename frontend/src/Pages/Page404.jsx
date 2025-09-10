import { NavLink } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Pages/Page404.scss'


const Error = () => {
  return (
      <>
          <Header />
          <main className='Error'>
              <h1>404</h1>
              <h2>Oups ! La page que vous demandez n'existe pas.</h2>
              <NavLink to="/">
                  <span>
                      Retournez sur la page d’accueil
                  </span>
              </NavLink>
          </main>
          <Footer />
      </>
      
  );
};

export default Error;