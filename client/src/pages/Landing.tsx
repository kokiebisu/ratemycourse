import * as React from 'react';

/**
 * Components
 */
import { Navbar } from '../components/shared/Navbar';
import { HeaderSection } from '../components/Landing/Header';
import { CandoSection } from '../components/Landing/Cando';
import { AboutSection } from '../components/Landing/About';
import { Footer } from '../components/shared/Footer';

export const Landing: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <CandoSection />
      <AboutSection />
      <Footer />
    </>
  );
};
