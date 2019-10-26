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
            <StyledLink to="login">Login</StyledLink>
          </div>
        </div>
      </div>
    );
  }
}

const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 2rem;

  &:hover {
    color: white;
  }
`;

export default Navbar;
