import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Cando from '../components/Cando';
import Footer from '../components/footer';
import About from '../components/About';

export const Front: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Cando />
      <About />
      <Footer />
    </>
  );
};
