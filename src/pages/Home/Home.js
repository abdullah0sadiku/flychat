import React, { useState } from 'react';
import Flychat from "./flychat";
import About from "./about";
import Feature from "./feature";
import Contact from "./contact";
import Header from "./Header";
import Footer from './Footer';

function Home() {
  const [currentSection, setCurrentSection] = useState(null);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className='Home'>
      <Header currentSection={currentSection} />
      <Flychat onSectionChange={() => handleSectionChange('flychat')} />
      <About onSectionChange={() => handleSectionChange('about')} />
      <Feature onSectionChange={() => handleSectionChange('feature')} />
      <Contact onSectionChange={() => handleSectionChange('contact')} />
      <Footer/>
    </div>
  );
}

export default Home;
