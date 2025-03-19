import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * The main app component, which simply renders all the other components.
 *
 * The outermost div is given the class "min-h-screen bg-secondary" to make the
 * background color fill the entire screen.
 */
function App() {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;