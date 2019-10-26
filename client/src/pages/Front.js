import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Wave from 'react-wavify';
import Cando from '../components/Cando';
import Footer from '../components/footer';
import Courses from '../components/Courses';
import About from '../components/About';

export default class Front extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Cando />
        <About />
        <Footer />
      </Fragment>
    );
  }
}
