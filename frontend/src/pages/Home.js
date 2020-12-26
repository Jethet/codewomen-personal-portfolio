import React from 'react';
import Projects from './../components/Projects';
import Skills from './../components/Skills';
import About from './../components/About';
import Contact from './../components/Contact';

const Home = () =>{
    return (
        <>    
          <Projects/>
          <Skills/>            
          <About/>
          <Contact/>
        </>
    )
}

export default  Home;