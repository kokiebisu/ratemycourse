import React from 'react';
import { Navbar } from '../components/shared/Navbar';
import { HeaderSection } from '../components/Front/Header';
import { CandoSection } from '../components/Front/Cando';
import { AboutSection } from '../components/Front/About';
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
