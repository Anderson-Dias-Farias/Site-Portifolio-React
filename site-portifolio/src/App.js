import React from 'react';
import './App.css';
import NavBar from './Componentes/Navbar';
import Banner from './Componentes/Banner';
import Skills from './Componentes/Skills';
import Projects from './Componentes/Projects';
import Footer from './Componentes/Footer';
import Form from './Componentes/Form';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Form/>
      <Footer/>  
    </div>
  );
}

export default App;
