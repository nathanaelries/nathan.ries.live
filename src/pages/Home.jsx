import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
