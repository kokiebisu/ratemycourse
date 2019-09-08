import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wave from '../CustomWave';

import './navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar__container">
        <Wave />
        <div className="navbar">
          <h3>ratemycourse</h3>
          <div className="navbar__login">
            <h5>Login</h5>
            <h5>Courses</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
