import React from 'react';

import './left.scss';

import AboutCourse from '../aboutcourse';
import Impression from '../impression';
import Reviews from '../reviews';

export default props => (
  <div className="left">
    <AboutCourse
      courseName={props.name}
      profName={props.professor}
      description={props.description}
    />
    <Impression happy={props.happy} sad={props.sad} angry={props.angry} />
    <Reviews />
  </div>
);
