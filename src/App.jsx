import React from 'react'
import Navbar from './components/Navbar';
import "./App.css";
import Banner from './components/Banner';
import ApartGrid from './components/ApartGrid';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Navbar/>
      <Main>
      <Banner/>
      <ApartGrid/>
      </Main>
     
    </div>
  )
}

export default App;