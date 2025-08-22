import React from 'react'
import Navbar from './components/Navbar';
import "./App.css";
import Banner from './components/Banner';
import ApartGrid from './components/ApartGrid';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Main>
      <Banner/>
      <ApartGrid/>
      </Main>
      <Footer/>
     
    </div>
  )
}

export default App;