import React from 'react';
import Wave from 'react-wavify';
import './cando.scss';

import Card from '../card';

export default function Cando() {
  return (
    <section className="cando__container">
      <Wave fill="#ffffff" />
      <div className="cando__heading">What you can do</div>
      <div className="cando__cards">
        <Card
          imgURL=""
          title="Find"
          description="Check the reviews from students who have already taken the course"
        />
        <Card
          imgURL=""
          title="Contribute"
          description="Check the reviews from students who have already taken the course"
        />
        <Card
          imgURL=""
          title="Help"
          description="Check the reviews from students who have already taken the course"
        />
      </div>
    </section>
  );
}
